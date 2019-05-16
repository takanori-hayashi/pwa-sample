if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
    .then(reg => {
      console.log(`Service worker registered! scope is ${reg.scope}`);
    }).catch(error => {
      console.log(`Registration failed with ${error}`);
    });
}