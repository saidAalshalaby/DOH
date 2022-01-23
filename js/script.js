$(document).ready(function () {
    // animate scroll top icon
    console.log("screen "+$(window).width());
    setInterval(function () {
        $(".scrollTop").toggleClass('animate-scrollTop');
    }, 5000);

    // when scrolling , make steacky navbar 
    $(Window).scroll(function () {
        var sc = $(this).scrollTop();
        if (sc > 100) {
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
        if (sc > 1560) {
            $('.timer').countTo();
            $(Window).off('scroll');
        }
        if (sc > 500) { // Fade The Scroll Top Btn

            $('.scrollTop').fadeIn();

        } else {

            $('.scrollTop').fadeOut();

        }
    });

    // owl carousel >> initiatives Section
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // popup video in media section
    $('.pop').magnificPopup({
        type: 'iframe',
        autoplay: 'true'
    });

    // slick slider on pleasure section
    $('.slick').slick({
        nextArrow: false,
        prevArrow: false
    });


    // Scroll to Top
    $('.scrollTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // smooth Scroll 
    $('.list a').click(function () {

        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        });

    });
    //
    $('.stat-info-title').click(function () {

        $(".stat-info-title").map(function () {
            $(this).removeClass('active-tap');
        });
        $(this).addClass('active-tap');

        //$(this).addClass('active-tap').siblings().removeClass('active-tap');
        var filter = $(this).attr('id');
        if (filter == 'public') {
            $('.stat-desc').text('This section will provide you with information about the available services for the public');
            $('.stat-button >a').text("View All Public Services");
        }
        else if (filter == 'facilties') {
            $('.stat-desc >p').text('This section will provide you with information about the available services for the facilities.');
            $('.stat-button >a').text("View All Facilties Services");
        }
        else if (filter == 'professionals') {
            $('.stat-desc >p').text('This section will provide you with information about the available services for the professionals.');
            $('.stat-button >a').text("View All Professionals Services");
        }
        else {
            $('.stat-desc >p').text('This section will provide you with information about the available services for the insurance.');
            $('.stat-button >a').text("View All Insurance Services");
        }
    });
    // inline navbar
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.inline-navbar li').click(function () {
        $(this).addClass('active-tap').siblings().removeClass('active-tap');
        var filter = $(this).attr('id');
        if (filter == 'all') {
            $('.media >div').fadeIn();
        }
        else {
            $('.media >div').fadeOut();
            $('.media').contents().filter('.' + filter).fadeIn();
        }
    });
    /* swiper*/
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /*observer intersection for triggering the animation*/ // anorher way to detect viewport item


    /*  const callback = function (entries) {
          prevRatio = 0.0;
          entries.forEach(entry => {
              if (entry.intersectionRatio > prevRatio) {
                add(entry, '.section-header', 'animateUp-header');
                  add(entry, '.section-content', 'animateUp-content');
                  add(entry, '.button', 'animateUp-btn');
  
              }
          });
      };
      function add(entry, element, animation) {
          const square = entry.target.querySelector(element);
          if (entry.isIntersecting) {
              square.classList.add(animation);
              prevRatio = entry.intersectionRatio;
              return;
          }
          square.classList.remove(animation);
      }
  
      const observer = new IntersectionObserver(callback);
      const targets = document.querySelectorAll('section');
      targets.forEach(function (target) {
          observer.observe(target);
      });*/





}); //end ready





