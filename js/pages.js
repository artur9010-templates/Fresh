$( "#page" ).load( "pages/index.html" );

function loadPage(page){
//	$("#page").load( "pages/" + page + ".html" );
	var i = $("#k"), p = $("#page"), n = p.height();
	i.load( "pages/" + page + ".html" );
	var m = i.height();
	p.animate({opacity:0}, 500,function(){
		p.html(i.html());
		p.height(n);
	})
	setTimeout(function(){
		p.animate({height:m, opacity: 1}, 500)
	},501)
//	p.animate({height:m}, 1000)
	$('*[id^="pages-"]').each(function(){$(this).attr("class", "");})
	$("#pages-" + page).attr("class", "active");
}
