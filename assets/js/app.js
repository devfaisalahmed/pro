// =========== owl carousel ==========

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 20) {
    $('.nav_menu_wrapper').addClass('sticky')
  } else {
    $('.nav_menu_wrapper').removeClass('sticky')
  }
});
$(document).ready(function () {
  $("#hero_slider").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });


  AOS.init({
    startEvent: "DOMContentLoaded",
    delay: 0,
    duration: 1000,
    easing: "ease",
    mirror: false,
  });
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  if ($(".products").length > 0) {
    var config = document.querySelector(".products");
    var mixer = mixitup(config);
  }
  $("#testimonials_slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".clients").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
  });
})(jQuery);

