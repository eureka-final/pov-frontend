import { app } from '@/utils/firebase/initFirebase';
import { getMessaging, getToken } from 'firebase/messaging';
import { postFcmToken } from '@/apis/member/postMember';
import { useAuthStore } from '@/stores/useAuthStore';

/* Firebase messaging 객체 초기화 */
const messaging = getMessaging(app);

/* service worker 등록 */
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      console.log('Service Worker 등록 성공:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker 등록에 실패 :', error);
      throw error;
    }
  } else {
    console.error('Service Worker가 지원되지 않음');
    return Promise.reject('Service Worker not supported');
  }
}

/* 푸시 알림 권한 요청, fcm device token 발급 및 저장 */
export async function requestPermission(): Promise<void> {
  const { isLoggedIn, fcmDeviceToken, setFcmDeviceToken } = useAuthStore.getState();

  // 이미 fcm device token이 존재하는 경우 return
  if (!isLoggedIn || fcmDeviceToken) return;

  try {
    const registration = await registerServiceWorker();
    const permission = await Notification.requestPermission();
    localStorage.setItem('notification', permission);

    if (permission !== 'granted') {
      throw new Error(`알림이 허용되지 않음`);
    }

    // fcm device token 발급
    const currentToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    // 발급받은 token을 서버 및 store에 저장
    if (currentToken) {
      await postFcmToken(currentToken);
      setFcmDeviceToken(currentToken);
    }
  } catch (error) {
    console.error('오류 발생:', error);
  }
}
