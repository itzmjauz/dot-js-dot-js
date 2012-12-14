var Mousetrap = require('mousetrap');
Mousetrap.bind('left', clicky.bind(null, 'prev'));
Mousetrap.bind('right', clicky.bind(null, 'next'));

function clicky(rel) {
    var link = document.querySelector('a[rel=' + rel + ']');
    if (link) {
        if (link.href.indexOf('#') == -1) link.href = link.href + window.location.hash;
        link.click();
        return false;
    }
}
