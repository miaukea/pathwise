// This file registers the service worker for PWA capabilities.

const register = () => {
    if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
        navigator.serviceWorker
.register('/service-worker.js')
.then(registration => {
            console.log('Service Worker registered:', registration);
})
.catch(error => {
            console.log('Service Worker registration failed:', error);
});
});
    }
};

export { register };
