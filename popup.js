$("ducument").ready(function(){
	$("#checkPage").click(function(){
		chrome.tabs.getSelected(null, function(tab) {
	      var url = tab.url;
	      console.log(url);
	    });
	});
});