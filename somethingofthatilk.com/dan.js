require('domready')(function() {
    var elem = document.getElementById('creeper');
    elem.parentElement.removeChild(elem);
});
