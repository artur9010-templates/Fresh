$( "#page" ).load( "pages/index.html" );

function loadPage(page){
	$("#page").load( "pages/" + page + ".html" );
	for(var i = 0; i < $('*[id^="pages-"]').length;i++)
		$(this).attr("class", "");
	$("#pages-" + page).attr("class", "active");
}
