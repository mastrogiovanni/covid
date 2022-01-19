
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then((reg) => {
            console.log("Service worker registered.", reg);
        });
    });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {

    console.log("Before install")

    const addBtn = document.querySelector('.modal-install');
    console.log(addBtn)
    // addBtn.style.display = 'none';
    
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    const installBtn = document.querySelector('.install-btn');
    console.log(installBtn);

    installBtn.addEventListener('click', () => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    });
  });