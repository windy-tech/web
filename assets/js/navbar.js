function init_navbar(document) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "navbar", false);
    ajax.send();
    document.body.innerHTML += ajax.responseText;
}