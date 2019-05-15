if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/service-worker.js')
    .then(() => {
      console.log('Service worker registered!');
    });
}