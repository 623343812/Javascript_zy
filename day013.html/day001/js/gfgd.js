window.onload = function () {
    if(!document.getElementById) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            };
        }
    }
};
function popUp(winURL){
    window.open(winURL , "popup","width=320,height=480");
}0