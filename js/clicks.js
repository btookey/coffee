
// add click events on items just to illustrate that scroll touch was cancelled

function run(){
   
    /**
     * indicate click with simple message
     */        
    function onLinkClick( event ){
        event.preventDefault();
        var link = event.target,
            html = link.innerHTML;
        link.innerHTML = 'Click';
        link.className = 'item clicked';
        setTimeout( function(){
            link.innerHTML = link.getAttribute('data-num');
            link.className = 'item';
        }, 500 );
        return false;
    }        

    var i = -1,
        wrap  = document.getElementById('testwrap'),
        links = wrap.getElementsByTagName('a');
    
    while( ++i < links.length ){
        links[i].setAttribute('data-num', links[i].innerHTML );
        // very important to use capture here. So container gets event before we do.
        links[i].addEventListener('click', onLinkClick, true );
    }

}
    
// demo only supports modern browsers
document.body.addEventListener && run();
