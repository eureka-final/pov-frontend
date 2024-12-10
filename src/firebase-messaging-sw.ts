import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 알림 권한 요청 및 Firebase message Token 설정
const messaging = getMessaging();

export function requestPermission() {
  // 알림 권한 요청
  void Notification.requestPermission().then((permission) => {
    // 알림 권한이 허용된 경우 Firebase message token을 서버로 전송
    if (permission === 'granted') {
      getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
    } else if (permission === 'denied') {
      console.log('푸시 권한 차단');
    }
  });
}
