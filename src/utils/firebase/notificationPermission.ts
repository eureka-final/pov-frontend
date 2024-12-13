import { app } from './initFirebase';
import { getMessaging, getToken } from 'firebase/messaging';
import { postFcmToken } from '../../apis/member/postMember';
import { useAuthStore } from '../../stores/useAuthStore';

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

/* 푸시 알림 권한 요청 및 서버로 fcm device token 전달 */
export async function requestPermission(): Promise<void> {
  const fcmDeviceToken = useAuthStore((state) => state.fcmDeviceToken);
  const setFcmDeviceToken = useAuthStore((state) => state.setFcmDeviceToken);
  let registration: ServiceWorkerRegistration;

  // 이미 fcm device token이 존재하는 경우 return
  if (fcmDeviceToken) {
    console.log();
    return;
  }

  registerServiceWorker()
    .then((reg) => {
      registration = reg;

      return Notification.requestPermission();
    })
    .then((permission) => {
      if (permission === 'granted') {
        return getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
          serviceWorkerRegistration: registration,
        });
      } else if (permission === 'denied') {
        console.error('푸시 알림 권한 차단됨');
        throw new Error('Permission denied');
      } else {
        throw new Error('알림 권한이 허용되지 않음');
      }
    })
    .then((currentToken) => {
      if (currentToken) {
        postFcmToken(currentToken); // 서버로 fcm device token 전송
        setFcmDeviceToken(currentToken); // storage에 device token 저장
      } else {
        console.error('유효한 토큰이 존재하지 않음');
      }
    })
    .catch((error) => {
      console.error('오류 발생:', error);
    });
}
