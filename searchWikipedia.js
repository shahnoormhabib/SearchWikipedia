'use strict';
function Search(){
    var searchFor="";
    searchFor = document.getElementById('search').value;
    console.log("Searching for: "+searchFor);
}
function getArticleList() {
    var searchFor = "";
    searchFor = document.getElementById('search').value;
    console.log("Searching for: "+searchFor);
    var myHeaders = new Headers();
        myHeaders= {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
        }   
     var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    console.log("Searching for: "+searchFor);
    var finalURL="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchFor + "&limit=5&format=jsonfm"
    finalURL="https://en.wikipedia.org/wiki/India";
    finalURL="https://en.wikipedia.org/w/api.php?action=query&titles="+ searchFor+"&prop=revisions&rvprop=content&format=jsonfm"
    console.log(finalURL); 
    fetch(finalURL,
    myInit).then(function(resp) {
        console.log("trySearch");
        return resp.json()
    }).then(function(data) {
        console.log(data);
        document.querySelector.artName.innerText = data.object[1];
        document.querySelector.textArt.innerText = data.object[0];
        document.querySelector.href = data.object[2]
    })
};
//https://en.wikipedia.org/w/api.php?action=query&titles=India%20Page&prop=revisions&rvprop=content&format=json