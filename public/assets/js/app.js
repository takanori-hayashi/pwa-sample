if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/service-worker.js')
    .then(reg => {
      console.log(`Service worker registered! scope is ${reg.scope}`);
    }).catch(error => {
      console.log(`Registration failed with ${error}`);
    });
}