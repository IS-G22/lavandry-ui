window.addEventListener('load', () => {
    registerSW();
});

// Register the Service Worker
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator
                .serviceWorker
                .register('serviceworker.js');
        }
        catch (e) {
            throw e;
            console.log('SW registration failed');
        }
    }
}
