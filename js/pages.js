var lastPage = "index";
$( "#body" ).load( "pages/index.html" );

function loadPage(page){
	$("#body").load( "pages/" + page + ".html" );
	$("#pages-" + lastPage).attr("class", "");
	$("#pages-" + page).attr("class", "active");
	lastPage = page;
}