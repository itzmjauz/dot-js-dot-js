console.log([].map.call(document.querySelectorAll('div.downloads.ebook'), function(div) {
    var a = [].slice.call(div.querySelectorAll('a[download]'), -1)[0]
    return a.href
}).map(function(url) {
    return "wget '" + url + "' -O '" + url.split('/').slice(-1)[0].split('?')[0] + "'"
}).join('&&'))
