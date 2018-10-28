$(document).ready(function() {
  var scrollTrigger = 500, // px

  backToTop = function (){
    var scrollTop = $('.content').scrollTop();
    if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
    } else {
        $('#back-to-top').removeClass('show');
    }
  }

  backToTop();

  $('body > div.main > div.autopagerize_page_element > div').scroll(function(){
    backToTop();
  })

  $('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('.content').animate({
        scrollTop: 0
    }, 700, 'easeInExpo');

  });

});
