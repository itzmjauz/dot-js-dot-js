require('domready')(function() {
    var elem = document.querySelector('#creeper');
    elem.parentElement.removeChild(elem);
});
