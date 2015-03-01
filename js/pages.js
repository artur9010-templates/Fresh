var lastPage = "index";
$( "#page" ).load( "pages/index.html" );

function loadPage(page){
	$("#page").load( "pages/" + page + ".html" );
	$("#pages-" + lastPage).attr("class", "");
	$("#pages-" + page).attr("class", "active");
	lastPage = page;
}
