let cierres = document.querySelectorAll('.close');

cierres.forEach(function(cierre){
    cierre.addEventListener('click',function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        
        content.classList.remove('bounceInDown');
        content.classList.remove('animated');

        content.classList.add('bounceOutUp');
        content.classList.add('animated');
        
        setTimeout(function(){
            location.href = "../";
        },700);
        
        return false;
    });
});


