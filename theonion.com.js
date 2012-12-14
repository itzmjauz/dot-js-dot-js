console.log('ohai');
(function stuff() {
    var box = document.querySelector('#gregbox-outer');
    if (!box) return setTimeout(stuff, 100);
    var par = box.parentElement;
    var overlay = box.nextElementSibling;
    par.removeChild(box);
    par.removeChild(overlay);
})();
