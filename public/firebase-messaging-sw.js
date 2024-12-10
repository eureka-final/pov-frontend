/* firebase service worker */
self.addEventListener('install', function (e) {
  console.log('fcm install..');
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  console.log('fcm activate..');
});

self.addEventListener('push', function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
  };
  console.log('push: ', { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});
