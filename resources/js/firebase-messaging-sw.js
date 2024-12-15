importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // Your web app's Firebase configuration
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;

    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/images/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
