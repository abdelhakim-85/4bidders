$(document).ready(function () {
  $("form.d-lg-flex").width(
    $(".navbar-collapse").width() - $(".navbar-nav").width() - 50
  );
  $(".mobile").width(
    $(".bg-light .container-fluid").outerWidth() -
      $(".navbar-brand").outerWidth() -
      $(".navbar-toggler").outerWidth() -
      40
  );

  // define our variables
  var fullHeightMinusHeader,
    sideScrollHeight = 0;

  // create function to calculate ideal height values
  function calcHeights() {
    // set height of main columns
    fullHeightMinusHeader =
      $(window).height() -
      $("header").outerHeight() -
      $(".filter").outerHeight();
    $(".map").height(fullHeightMinusHeader);
    $(".list-bids").height(fullHeightMinusHeader);
    // $(".grid-view #products").height(fullHeightMinusHeader - 50);
  } // end calcHeights function

  // run on page load
  calcHeights();

  // run on window resize event
  $(window).resize(function () {
    calcHeights();
  });

  // $('.js-example-basic-single').select2();
  function iconFormat(icon) {
    var originalOption = icon.element;
    if (!icon.id) {
      return icon.text;
    }
    var $icon =
      '<i class="icon-' + $(icon.element).data("icon") + '"></i>' + icon.text;

    return $icon;
  }

  $(".multiselect").multiselect();
  $(".select-search").select2();
  $(".select").select2();
  $(".daterange-single").daterangepicker({
    singleDatePicker: true,
  });

  $(".default_option").click(function () {
    $(this).parent().toggleClass("active");
  });
  // Toggle between Views
  $(".grid-view").hide();
  $(".fa-map-marked-alt").click(function (e) {
    e.preventDefault();
    $(".grid-view").hide(500);
    $(".bids-map-view").show(500);
  });
  $(".fa-th").click(function (e) {
    e.preventDefault();
    $(".grid-view").show(500);
    $(".bids-map-view").hide(500);
  });

  var _sidebarMobileMainToggle = function () {
    $(".sidebar-mobile-main-toggle").on("click", function (e) {
      e.preventDefault();
      $("body")
        .toggleClass("sidebar-mobile-main")
        .removeClass("sidebar-mobile-secondary sidebar-mobile-right");

      if ($(".sidebar-main").hasClass("sidebar-fullscreen")) {
        $(".sidebar-main").removeClass("sidebar-fullscreen");
      }
    });
  };
  _sidebarMobileMainToggle();

  $(".sidebar-main-toggle").on("click", function (e) {
    e.preventDefault();

    $("body").toggleClass("sidebar-xs").removeClass("sidebar-mobile-main");
    revertBottomMenus();
  });
});
targetElement.ontouchend = (e) => {
  e.preventDefault();
};
