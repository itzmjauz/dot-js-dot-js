//show repository counts on user pages and allow easily opening the repo pages from search
var style=document.createElement('style');
style.textContent+='.plugcount:before{ content:" ["; }\n';
style.textContent+='.plugcount:after { content: "]"; }\n';
document.querySelector('head').appendChild(style);
var filters=[].slice.call(document.querySelectorAll('.repo_filter'));
var input=document.querySelector('.filter-bar input');

//show counts
filters.forEach(hooklink);
function hooklink(a){
    var elem=document.createElement('span');
    elem.classList.add('plugcount');
    a.appendChild(elem);

    a.addEventListener('click',update);
    input.addEventListener('input',update);
    input.addEventListener('change',update);
    input.addEventListener('keyup',update);
    update();
    setInterval(update,250);

    function update(){
        setTimeout(_update,0);
    }

    function _update(){
        var elems=[];
        a.rel.split(',').forEach(function(rel){
            elems=elems.concat([].slice.call(document.getElementsByClassName(rel)));
        });
        var visible=elems.filter(function(elem){
            return elem.style.display!='none';
        });
        elem.textContent=visible.length+'/'+elems.length;
    }
}

