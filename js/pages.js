$( "#page" ).load( "pages/index.html" );

function loadPage(page){
	var i = $("</div>"), p = $("#page");
	i.load( "pages/" + page + ".html" );
	var n = p.height(), m = i.height();
	p.html(i.html());p.height(n);p.animate({height:m})
	$('*[id^="pages-"]').each(function(){$(this).attr("class", "");})
	$("#pages-" + page).attr("class", "active");
}
