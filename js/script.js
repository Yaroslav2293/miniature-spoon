$('.sl-images').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '30px;',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
      breakpoint: 1480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2
      }
    },
  {
      breakpoint: 860,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$(function(){

  $('.menu-content').on('click', function(){

    $('.menu-burger').slideToggle(300, function(){

      if($(this).css('display') === 'none'){

        $(this).removeAttr('style');
      };

    });
    
  });

});