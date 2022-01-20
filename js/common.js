$(document).ready(function () {
    let startedService = false;
    let prevRatio = 0.0;
    /* header responsive */
    $('.settings').click(function () {
        $('.nav-list.main').slideToggle();
        $('header .logo-sec').toggleClass('center-logo');
        $('.logo-sec img').toggleClass('resize-logo');
        $('header .logo-sec').toggleClass('col-xs-4 col-xs-12');
        $('.nav-list.main .list i').toggleClass('center-home')
        $('nav.first').toggleClass('col-xs-12');
        $('nav.second').toggleClass('col-xs-7 col-xs-12')
        $('nav.second').toggleClass('header-full')
    });
    //Animation Trigger
    function reveal(selector, animation, elementVisiability) {
        var reveals = document.querySelectorAll(selector);
        reveals.forEach(function (reveal) {
            var windowHeight = window.innerHeight;
            var elementTop = reveal.getBoundingClientRect().top;
            var elementVisible = elementVisiability;
            if (elementTop <= windowHeight - elementVisible) {
                reveal.classList.add(animation);
            }
        });
    }

    // window.addEventListener("scroll", animate);
    window.onscroll = function () {
        reveal('.reveal', 'activeUp', 150);
        reveal('.animateUp', 'activeUp', 120);
        reveal('.animateLeft', 'activeLeft', 50);
    }

});