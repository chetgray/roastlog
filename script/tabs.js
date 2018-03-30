//~ Adapted from https://css-tricks.com/transformer-tabs/

var Tabs = {
  init: function() {
    this.bindUIfunctions();
    this.pageLoadCorrectTab();
  },

  bindUIfunctions: function() {
  },

  changeTab: function(hash) {
    // find the link based on that hash
    var anchor = $('[href="' + hash + '"]');

    // find the related content panel
    var div = $(hash);

    // activate correct anchor (visually)
    anchor.addClass('active').parent().siblings().find('a').removeClass('active');

    // activate correct div (visually)
    div.addClass('active').siblings().removeClass('active');

    // Close menu, in case in dropdown state
    anchor.closest('ul').removeClass('open');
  },

  pageLoadCorrectTab: function() {
  },

  toggleMobileMenu: function(event, el) {
    $(el).closest('ul').toggleClass('open');
  }
};

Tabs.init();

$('.tabs')
  .on('click', 'a[href^="#"]:not(".active")', function(event){
    Tabs.changeTab(this.hash);
    event.preventDefault();
  })
  .on('click', 'a.active', function(event){
    Tabs.toggleMobileMenu(event, this);
    event.preventDefault();
  });

