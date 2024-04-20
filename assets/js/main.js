window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        navbar.classList.add('navbar-bg'); 
    } else {
        navbar.classList.remove('navbar-bg');
    }
});
