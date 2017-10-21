'use strict';
function getRandomArticle(){
    $("#results").empty();  
    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json&callback=?', function(response) {
    var pages = response.query.pages,
        id = Object.keys(pages)[0],
        randomPage = pages[id];

    $('#articleTitle').html(randomPage.title);
    $('#article').html(randomPage.extract);
});
}


   
function searchdata() {  
   
    var q = $("#search").val();  
    $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",  
    {  
        srsearch: q,  
        action: "query",  
        list: "search",  
        format: "json"  
    },  
    function(data) {  
        $("#results").empty();  
        $("#results").append("Results for <b>" + q + "</b> </br>");  
        $("#results").append("<div> </div>");  
        $.each(data.query.search, function(i, item) {  
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a> : " + item.snippet + "</div>");  
            });  
       });  
}    