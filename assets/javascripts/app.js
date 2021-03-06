//nomensa
require(['modules/generate_player'], function(player) {
  $(player);
});


$(function() {
  $("body").removeClass("no-js");
  $('.proportional.breakdown-chart tbody tr td:first-child').css('height', function(index) {
    return +($(this).text().replace('%', '')) * 4;
  });
});


//set up sticky headings
require(['modules/stickyheaders'], function(setupStickyHeaders) {
  setupStickyHeaders();
});

// scrolling down and up
require(['modules/anchor_scrolling'], function(scrollToAnchor) {
  $("#markdown-toc a").on('click', function() {
    scrollToAnchor($(this).attr('href'));
  });
  $("#contents").on("click", function() {
    scrollToAnchor('html');
  });
});

require(['modules/magna-charta.min'], function() {
  $(".horizontal-bar-chart").each(function(i, item) {
    // some special cases
    $.magnaCharta($(item), {
      outOf: 70,
      autoOutdent: true,
    });
  });
});

// show toggle links
require(['modules/jquery.toggle'], function() {
  $(".show-hide").contentToggle({
    headingSelector: "p > a",
    contentSelector: ".show-hide-content"
  });
});


