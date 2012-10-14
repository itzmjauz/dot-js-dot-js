//fiddle with SSH URLs to remove the git@
var urle=document.querySelector('li.public_clone_url > a');
var priv=document.querySelector('li.private_clone_url');
if(priv){
    url=priv.querySelector('a').getAttribute('href').replace('git@','');
}
else if(urle){
    url=urle.getAttribute('href').split("://")[1].replace(/\//,':');

    a=document.createElement('a');
    a.classList.add('js-git-protocol-selector');
    a.setAttribute('data-permission','Read-Only');
    a.setAttribute('data-url','/users/set_protocol?protocol_selector=ssh&protocol_type=clone');
    a.textContent='SSH';

    priv=document.createElement('li');
    priv.classList.add('private_clone_url');
    priv.appendChild(a);

    document.querySelector('ul.clone-urls').insertBefore(priv,document.querySelector('li.http_clone_url').nextSibling);
}
if(priv){
    var selected=priv.parentNode.querySelector('li.selected');
    if(selected)
        selected.classList.remove('selected');
    priv.classList.add('selected');

    priv.querySelector('a').setAttribute('href',url);
    priv.parentNode.parentNode.querySelector('input').setAttribute('value',url);
}

var newrepo=document.querySelector('.new-repo-cli-container');
if(newrepo){
    Array.prototype.slice.call(newrepo.querySelectorAll('.js-live-clone-url')).forEach(function(url){
        url.textContent='github.com:'+document.location.pathname.slice(1)+'.git';
    });
}

var showmore=document.querySelector('#inline_your_repos.show-more');
if(showmore) setTimeout(showmore.click.bind(showmore),100);
