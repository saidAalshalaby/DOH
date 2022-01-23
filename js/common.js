$(document).ready(function () {
     
    /* header responsive */
    $('i.icon').click(function () {
        $('.nav-list.main').slideToggle()
        $('.nav-list.secondary').slideToggle()
        $('header .logo-sec').toggleClass('hidden')
        $('header a.search').toggleClass('hidden')
        $('header a.lang').toggleClass('hidden')
        $('header .logo-sec').toggleClass('col-xs-2 col-xs-12')
        $('.nav-list.secondary').toggleClass('col-xs-12')
        $('.nav-list.main .list i').toggleClass('center-home')
        $('nav.first').toggleClass('col-xs-12')
        $('nav.second').toggleClass('center')        
        $('.nav-list.secondary').toggleClass('animate-nav')
       // $('.logo-sec .logo img').toggleClass('animate-logo')
        $('.nav-list.secondary').toggleClass('header-full')
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