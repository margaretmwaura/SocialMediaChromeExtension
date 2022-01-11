let color = '#3aa757';

function getCurrentTab() {
    let queryOptions = {};
    let url = ''
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        url = tabs[0].url;

        chrome.storage.sync.set({ url });
    
    });

    // This is how it is done if you want all the tabs
    // chrome.tabs.query({currentWindow: true}, function(tabs) {
    //     tabs.forEach(function(tab) {
    //         console.log('Tab url: ', tab.url);
    //         chrome.storage.sync.set({ url });
    //     });
    // });
  }

chrome.runtime.onInstalled.addListener( 
    async () => {
        chrome.storage.sync.set({ color });
        console.log('Default background color set to %cgreen', `color: ${color}`);
        setTimeout(function(){
           getCurrentTab()
        }, 5000);
        
});



