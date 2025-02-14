// Service Worker Registration Script
// This file registers the service worker to enable PWA functionality in the app.

export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        // Register the service worker after the page loads to ensure all assets are available.
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/service-worker.js') // Registers the service worker from `/public/service-worker.js` to enable offline support and caching.
                .then((registration) => 
                    console.log('Service Worker Registered:', registration)
                ) // Logs the service worker registration success to confirm it's working.
                .catch((error) => 
                    console.error('Service Worker Registration Failed:', error)
                ); // Logs an error if the service worker registration fails, which may prevent offline functionality.
        });
    }
};
