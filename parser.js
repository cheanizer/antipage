function Parser(){}

var sites = [
	{
		"url" : "tribunnews.com","method" : "first"
	}
];
var current_page = 1;

Parser.is_site_included = function(callback)
{
	var location = window.location.href;
	
	current_page = Parser.getParameterByName('page',location);
	if (current_page == null) current_page = 1;
	$.each(sites,function(index,site){
		if (location.indexOf(site.url) >= 0)
		{
			return callback(true,site.method);
		}
		if (index >= sites.lenght){
			callback(false);
		}
	});
}

Parser.method_first = function()
{
	var page = [];
	var paging = $(".paging").eq(0);
	if (paging.length > 0)
	{
		var location = window.location.href;
		paging.children('div').find('div').eq(1).remove();
		paging.children('div').append($("<a></a>").attr('href',location + (location.indexOf('?') > -1 ? 
			'':'?') + "&page=all").addClass('white bgred').html('Semuanya <i class="fa fa-arrow-right"></i>'));
		var links = paging.find('a');
		var count = links.lenght;
		$.each(links,function(index){
			var link =$(this).attr('href'); 
			console.log(link);
			page.push(link);
		});
	}
	
}

Parser.getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}