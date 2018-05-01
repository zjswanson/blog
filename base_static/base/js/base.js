var menuModule = (function() {
  var menuIsOpen = false,
      $navbar = $('.navbar'),
      $navContainer = $('.nav-container'),
      navIsVisible = !($('.nav-container').hasClass('hide')),
      navBaseHeight = $navbar.outerHeight();

  var openMenu = function() {
    var menuHeight = $('.navMenu').outerHeight();

    $navbar.addClass('open').css('height', navBaseHeight + menuHeight);
    menuIsOpen = true;
  }

  var closeMenu = function() {
    $navbar.removeClass('open').css('height', '');
    menuIsOpen = false;
  }

  var checkNavbarDisplay = function(scrollPosition) {
    if (window.innerWidth < 576) {
      if (!navIsVisible) {
        $navContainer.removeClass('hide')
        navIsVisible = true;
      }
    } else {
      var menuTriggerHeight = $('.display-header').outerHeight() - navBaseHeight;

      if (scrollPosition > menuTriggerHeight && !navIsVisible) {
        $navContainer.removeClass('hide')
        navIsVisible = true;
      } else if (scrollPosition <= menuTriggerHeight && navIsVisible) {
        $navContainer.addClass('hide')
        navIsVisible = false;
      }
    }
  }

  var init = function() {
    checkNavbarDisplay(0);
    $('.menu-button').on('click', function() {
      if (menuIsOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    $(document).on('scroll', function() {
      scroll = (document.body.scrollTop > document.documentElement.scrollTop)? document.body.scrollTop : document.documentElement.scrollTop;

      checkNavbarDisplay(scroll);
    });

    $(window).on('resize', function() {
      scroll = (document.body.scrollTop > document.documentElement.scrollTop)? document.body.scrollTop : document.documentElement.scrollTop;
      checkNavbarDisplay(scroll);
    })

  }

  return {
    init: init,
    navIsVisible: navIsVisible
  }
}());

$(function() {
  menuModule.init();
});
