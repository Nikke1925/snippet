$(function() {

  var $clickable = $('.ripple');

  $clickable.on('mousedown', function(e) {
    var self    = this;
    var $effect = $(self).find('.ripple_effect');

    $effect.css({
      left: e.offsetX - $effect.width() / 2,
      top: e.offsetY - $effect.height() / 2
    });

    if (!$effect.hasClass('is-ripple-show')) {
      $effect.addClass('is-ripple-show');
      $clickable.addClass('is-hover-show');

      setTimeout(function() {
        $effect.removeClass('is-ripple-show');
      }, 500);
      setTimeout(function() {
        $clickable.removeClass('is-hover-show');
      }, 700);
    }
    return false;
  });
});
