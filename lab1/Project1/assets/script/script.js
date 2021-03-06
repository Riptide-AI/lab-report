function navSlide() {
    const burger = document.querySelector('.burger'); 
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) =>{
            if(link.style.animation){
            link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 10  + 0.4}s`;
            }
        } );
        burger.classList.toggle('close');
    }
        
    );
}

navSlide();