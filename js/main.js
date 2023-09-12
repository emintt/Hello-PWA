
(async () => {
    if ('serviceWorker' in navigator) {
        try  {
            const worker = await navigator.serviceWorker.register('./sw.js');
            console.log('Service Worker Refistered');
        } catch (error) {
            console.log(error.message);
        }
        
      }
})();