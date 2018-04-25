var menuModule = (function() {
  var menuIsOpen = false,
      $navbar = $('.navbar');

  var openMenu = function() {
    $navbar.addClass('open');
    menuIsOpen = true;
  }

  var closeMenu = function() {
    $navbar.removeClass('open');
    menuIsOpen = false;
  }

  var init = function() {
    $('.menu-button').on('click', function() {
      if (menuIsOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

  }

  return {
    init: init
  }
}());

$(function() {
  menuModule.init();
});
