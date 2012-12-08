var filters = [].slice.call(document.querySelectorAll('.repo_filter'));
var input = document.querySelector('.filter-bar input');

if (!filters || !input) return;

//enter opens the top repo
var elems = [];
filters.forEach(function(a) {
    a.rel.split(',').forEach(function(rel) {
        elems = elems.concat([].slice.call(document.getElementsByClassName(rel)));
    });
});

input.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) navigate();
});

function navigate() {
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].style.display != 'none') break;
    }
    if (i == elems.length) return;
    var elem = elems[i];
    var a = elem.querySelector('h3 a') || elem.querySelector('a');
    a.click();
}
