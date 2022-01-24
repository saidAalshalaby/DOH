$(document).ready(function () {
    /* header */
    function stickyHeader() {
        $(Window).scroll(function () {
            var sc = $(this).scrollTop();
            if (sc > 2) {
                $('header').addClass('sticky-v2');
            }
            else {
                $('header').removeClass('sticky-v2');
            }
        })
    }
    window.addEventListener("scroll", stickyHeader);

    /* service */
    $('.favorite-icon').click(function () {
        $(this).toggleClass('fas fa-active')
    });
    $('.bookmark-icon').click(function () {
        $(this).toggleClass('fas fa-active')
    });
    $('.rate i').click(function () {

        $(this).toggleClass('active-star');
        

    });

    $('.review-content button').hover(function () {
        $(this).addClass('btn-active').siblings().removeClass('btn-active');
    });

    // video
    $('.pop').magnificPopup({
        type: 'iframe',
        autoplay: 'true'
    });

    /* service details */
    $('.service-details  .header .collapse-icon').click(function () {
        // Toggle the icon
        $(this).toggleClass('fa-chevron-down');
        $(this).toggleClass('fa-chevron-up');
        // Hide the content
        let parent = $(this).parent().parent();
        let entry = parent.children()[1];
        entry.classList.toggle('hidden');
    });


});