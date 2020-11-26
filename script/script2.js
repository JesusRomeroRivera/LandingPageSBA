const $menuBtn = document.querySelector('.menu-btn');
const $headerNav = document.querySelector('.header-nav');

let menuOpen = true;

$menuBtn.addEventListener('click', () => { 
    if(menuOpen) {
      $headerNav.classList.add('is-active'); 
      menuOpen = false;
    }else{
      $headerNav.classList.toggle('not-active');
      $headerNav.classList.toggle('is-active');
    }
    $menuBtn.classList.toggle('open');    
});

