var sfa = sfa || {};

sfa.stickyNav = {
  settings: {
    nav: $('#sticky-nav'),
    topOfNav: $('#sticky-nav').offset().top
  },
  init: function () {
    var rafTimer;
    var self = this;
    window.addEventListener('scroll', function (event) {
      cancelAnimationFrame(rafTimer);
      rafTimer = requestAnimationFrame(self.fixedNav(self));
    });
  },
  fixedNav: function (self) {
    return function () {
      if (window.scrollY >= self.settings.topOfNav) {
        $(document.body).addClass('fixed-nav').css('padding-top', self.settings.nav.height() + 'px');
      } else {
        $(document.body).removeClass('fixed-nav').css('padding-top', '0');
      }
    }
  }
}

sfa.stickyNav.init();