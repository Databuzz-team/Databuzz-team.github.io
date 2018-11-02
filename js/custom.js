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

  var shareUrls = {
    facebook:  '//www.facebook.com/sharer.php?u=',
    twitter:   '//twitter.com/intent/tweet?url=',
    pinterest: '//pinterest.com/pin/create/button/?url=',
    pocket:    '//getpocket.com/save?url='
  };

  var url = encodeURIComponent([
    window.location.protocol,
    '//',
    window.location.host,
    window.location.pathname
  ].join(''));

  $('.sharer__item').click(function(){
    var social = $(this).attr('data-n');
    window.open(
      shareUrls[social] + url,
      'Share to ' + social,
      'toolbar=0,location=0,menubar=0,height=400,width=600'
    );
  });

});
