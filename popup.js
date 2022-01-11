let changeColor = document.getElementById("changeColor");
let text = document.getElementById("url");
let urlOpened = "";

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

chrome.storage.sync.get("url", ({ url }) => {
  text.innerHTML = "You are on the following site " + url;
  urlOpened = url
});

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow:true });
  
    if(urlOpened.match(/instagram|twitter|facebook/g)){

    await chrome.scripting.executeScript({
          target: { tabId: tab.id },
         function: monitorActivity,
    });
    
    setTimeout(function(){
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.remove(tabs[0].id);
      });
    }, 7000);      

    }
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function monitorActivity() {
    // chrome.storage.sync.get("color", ({ color }) => {
    //   document.body.style.backgroundColor = color;
    // });
      setTimeout(function(){
        alert("You have been on our page for way too long .. go get bread sha and your daily 2k")
      }, 5000);      
  
  }