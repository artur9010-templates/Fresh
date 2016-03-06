// Load default page
$("#page").load("pages/index.html");

function loadPage(page) {
    $("#page").load("pages/" + page + ".html");
    $('*[id^="pages-"]').each(function () {
        $(this).attr("class", "");
    })
    $("#pages-" + page).attr("class", "active");
}
