$(document).ready(function () {
  $(window).scroll(function () {
    var showAfter = 200;
    if ($(this).scrollTop() > showAfter) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $("#openMenuRight").click(function () {
    $(".menu-right").css("right", 0);
    $(".menu-right__backdrop").css("display", "block");
    $("header").css("left", -270);
    $("main").css("left", -270);
    $("footer").css("left", -270);
  });

  $("#closeMenuRight").click(function () {
    $(".menu-right").css("right", "-40%");
    $(".menu-right__backdrop").css("display", "none");
    $("header").css("left", 0);
    $("main").css("left", 0);
    $("footer").css("left", 0);
  });

  $("#backdropMenuRight").click(function () {
    $(".menu-right").css("right", "-26%");
    $(".menu-right__backdrop").css("display", "none");
    $("header").css("left", 0);
    $("main").css("left", 0);
    $("footer").css("left", 0);
  });

  $("#openMenuBarMobile").click(function () {
    $(".menu-bar-mobile-wrapper").toggleClass("open");
  });

  $(".menu-bar-mobile a").click(function () {
    $(".menu-bar-mobile-wrapper").removeClass("open");
  });

  $(".single-item").slick({
    dots: true,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".product__rating").starRating({
    totalStars: 5,
    emptyColor: "#eae7de",
    activeColor: "#c7a17a",
    useGradient: false,
    strokeColor: "#c7a17a",
    strokeWidth: 0,
    starSize: 14,
    readOnly: true,
    useFullStars: true,
  });

  $(".multiple-items").slick({
    rows: 2,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slider-news").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
