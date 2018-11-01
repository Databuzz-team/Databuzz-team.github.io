$(document).ready(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-127200932-1');

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
