chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#3aa757'}, function() {
	  console.log("wowhowo.");
	});

	chrome.browserAction.onClicked.addListener(function(tab) {
	  // Send a message to the active tab
	  console.log('halo');
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    var activeTab = tabs[0];
	    
	    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	  });
	});



	chrome.tabs.onUpdated.addListener(function (tabId , info) {
	  if (info.status === 'complete') {
	    console.log('complete bro');
	    
	  }
	  if (info.status === 'loading')
	  {
	  	console.log('loading');
	  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	  		console.log('tab selected');
		    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			    //console.log(response.farewell);
			});
		});
	  }
	});

});

