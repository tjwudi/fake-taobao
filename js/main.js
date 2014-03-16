$(document).ready(function() {
  $('.drpd').parent().bind('mouseover', function(event) {
    $(this).children('.drpd').addClass('visible');
  });
  $('.drpd').parent().bind('mouseleave', function(event) {
    $(this).children('.drpd').removeClass('visible');
  });
});
