$( "#page" ).load( "pages/index.html" );

function loadPage(page){
	//$("#page").load( "pages/" + page + ".html" );
	var i = $("#k"), p = $("#page"), n = p.height();
	i.load( "pages/" + page + ".html" );
	var m = i.height();
	p.load( "pages/" + page + ".html" );
	p.height(n);
	p.animate({height:m})
	$('*[id^="pages-"]').each(function(){$(this).attr("class", "");})
	$("#pages-" + page).attr("class", "active");
}
