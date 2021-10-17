XHttp = new XMLHttpRequest();
let method = "GET";
let target = "https://icanhazdadjoke.com";

function fetchJoke() {
    XHttp.open( method, target, true );
    XHttp.setRequestHeader( "Accept", "application/json");
    XHttp.responseType = "json";

    XHttp.send();

    XHttp.onload = () => {
        document.getElementById("JSText").innerHTML = ("joke: " + XHttp.response.joke );
        document.getElementById("backgroundText").innerHTML = "ID: " + XHttp.response.id;

        let table = document.getElementById( "historyTable" );
        let row = table.insertRow(1);
        let pastId = row.insertCell(0);
        let pastJoke = row.insertCell(1);

        pastId.setAttribute( "class", "idEntry" );
        pastJoke.setAttribute( "class", "jokeEntry" );
        pastId.innerHTML = XHttp.response.id;
        pastJoke.innerHTML = XHttp.response.joke;

    }
};