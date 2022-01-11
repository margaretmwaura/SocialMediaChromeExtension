let color = '#3aa757';

function getCurrentTab() {
    let queryOptions = {};
    let url = ''
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        url = tabs[0].url;
        chrome.storage.sync.set({ url });
        // use `url` here inside the callback because it's asynchronous!
    });

    return url
  }

chrome.runtime.onInstalled.addListener( 
    async () => {
        chrome.storage.sync.set({ color });
        console.log('Default background color set to %cgreen', `color: ${color}`);
        setTimeout(function(){
           getCurrentTab()
        }, 5000);
        
});



