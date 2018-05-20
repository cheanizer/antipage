Parser.is_site_included(function(status,method){
	if (status)
	{
		eval("Parser.method_" + method + "()");	
	}
});
