var request = require('browser-request');
require('domready')(function() {
    ['prev', 'next'].forEach(function(rel) {
        var a = document.querySelector('[rel=' + rel + ']');
        if (!a) return;
        preload(a.href);
    });
});

function preload(url) {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.height = iframe.style.width = '0px';
    document.body.appendChild(iframe);
}
