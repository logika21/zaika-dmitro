document.addEventListener('DOMContentLoaded', function() {
    // Додати активний клас до поточної сторінки в навігаційному меню
    var currentPage = window.location.pathname;
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    // Плавний скролінг до якорних посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();


            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
