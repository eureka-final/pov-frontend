import { app } from './initFirebase';
import { getMessaging, MessagePayload, onMessage } from 'firebase/messaging';

const messaging = getMessaging(app);

onMessage(messaging, (payload: MessagePayload) => {
  console.log('알림 도착 ', payload);

  const notificationTitle = payload.notification?.title;
  const notificationOptions = {
    body: payload.notification?.body,
  };

  if (Notification.permission === 'granted') {
    new Notification(notificationTitle!, notificationOptions);
  }
});
