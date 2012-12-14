var request = require('browser-request');
require('domready')(function() {
    ['prev', 'next'].forEach(function(rel) {
        var a = document.querySelector('[rel=' + rel + ']');
        if (!a) return;
        preload(a.href);
    });
});

function preload(url) {
    request(url, function(err, res, body) {
        if (err) return;
        var imgUrl = body.match(/http:\/\/www.explosm.net\/db\/files\/Comics\/[^"]+/).toString();
        if (!imgUrl) return;
        var img = new Image();
        img.src = imgUrl;
        window._images = window._images || [];
        window._images.push(img);
    });
}
