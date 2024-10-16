const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');


menuIcon.addEventListener('click', function() {
    
    sideMenu.classList.toggle('open');
    
    
    menuIcon.classList.toggle('active');
});
