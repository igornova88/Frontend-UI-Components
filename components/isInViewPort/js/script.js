$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  // var viewportTop = $(window).scrollTop();
  // var viewportBottom = viewportTop + $(window).height();

  var boxTop = $('#js-colorname').offset().top
  return boxTop > elementTop && boxTop < elementBottom;
  // return viewportTop <= elementTop && elementBottom <= viewportBottom;
};

function showText() {
  var color;
  if ($('#js-blue').isInViewport()) {
    color = $('#js-blue').attr('data-color');
  } else if ($('#js-red').isInViewport()) {
    color = $('#js-red').attr('data-color');
  } else if ($('#js-green').isInViewport()) {
    color = $('#js-green').attr('data-color');
  } else if ($('#js-gray').isInViewport()) {
    color = $('#js-gray').attr('data-color');
  }

  if(color !== undefined) {
    $('#js-colorname').text(color)
  }
}

$(document).ready(function() {
  showText()
});

$(document).on('ready resize scroll', function() {
  showText()
});