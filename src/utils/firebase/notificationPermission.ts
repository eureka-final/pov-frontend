import { app } from './initFirebase';
import { getMessaging, getToken } from 'firebase/messaging';

/* Firebase messaging 객체 초기화 */
const messaging = getMessaging(app);

/* service worker 등록 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        // service worker 등록 실패 시
        .catch(function (error) {
          console.error('Service Worker 등록에 실패 :', error);
        });
    });
  }
}

/* 브라우저 notification 권한 요청 */
export function requestPermission() {
  registerServiceWorker();
  // 알림 권한 요청
  void Notification.requestPermission().then((permission) => {
    // 알림 권한이 허용된 경우 Firebase message token을 서버로 전송
    if (permission === 'granted') {
      getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
        .then((currentToken) => {
          if (currentToken) {
            // TODO 서버로 토큰 전송 및 필요 시 UI 업데이트
          } else {
            console.error('유효한 토큰이 존재하지 않음');
          }
        })
        .catch((error) => {
          console.error('토큰 발급 중 오류 발생', error);
          // ...
        });
    }

    // 알림 권한이 허용되지 않은 경우 브라우저 푸시 알림 사용 불가능
    if (permission === 'denied') {
      console.error('푸시 알림 권한 차단됨');
    }
  });
}
