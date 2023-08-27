$(function(){
  /*wow.js animation initialization js code*/ 
  /*new WOW().init();*/
  
    /*slick slider js starts here*/
  $('.my-slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 5,
  arrows: true,
  prevArrow: '.left',
  nextArrow: '.right',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  /*slick slider for Client Opinions start here*/
   $('.client-text').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.client-profile'
});
$('.client-profile').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.client-text',
  dots: true,
  centerMode: true,
  focusOnSelect: false
});
  
  /*slick slider for clients-logo starts here*/
$('.Clients-logo').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  prevArrow: '.client-logo-left',
  nextArrow: '.client-logo-right',
});
  
  /*Auto counter code*/
  $('.sifat-counter').counterUp({
                delay: 10,
                time: 3000
            });
  
  /*back2top starts here*/
  $('.back2top').click(function(){
    $('html,body').animate({scrollTop:0},500);
  });
  $(window).scroll(function(){
    inViewport();//this is for animation on scroll with adding an extra class
    var scrolling = $(this).scrollTop();
    if(scrolling > 350)
      {
        $('.back2top').fadeIn();
        $('.back2top').addClass('back2topMove');
      }
    else 
    {
      $('.back2top').fadeOut();
      $('.back2top').removeClass('back2topMove');
    }
    if(scrolling > 150)
      {
        $('#menu').addClass('menu-bg');
      }
    else {
      $('#menu').removeClass('menu-bg');
    }
  });
  
  /*back2top ends here*/
  
  /*animation on scroll with adding an extra class*/
  $(window).resize(function(){
    inViewport();
  });
  function inViewport(){
    $('.commercial').each(function(){
      var divPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      
      if(divPos < topOfWindow+800)
        {
          $('.commercial1').addClass('commercial2');
          $('.Healthcare1').addClass('Healthcare2');
          $('.Entertainment1').addClass('Entertainment2');
          $('.Residential1').addClass('Residential2');
          $('.Transportation1').addClass('Transportation2');
          $('.Religious1').addClass('Religious2');
          $('.Green-Home1').addClass('Green-Home2');
        }
    });
  } 
  
  /*side-bar adding and removing code starts here*/
  $('.my-side-btn').click(function(){
    $('.side-bar').toggleClass('side-bar-previous-position');
  });
  
  
  /*side bar js starts here*/
  /*$('.Boxed-screen').click(function(){
    $('#menu').addClass('wide-screen-add');
  });
  $('.wide-screen').click(function(){
    $('#menu').removeClass('wide-screen-add');

  });*/
  
  
  /*color-switcher code starts here*/
  var colorSheets = [
    {
        color: "orange",
        title: "Switch to Default",
        href: "./css/style.css"
    },
    {
        color: "skyblue",
        title: "Switch to skyblue",
        href: "./css/skyblue.css"
    },
    {
        color: "#9F5BA4",
        title: "Switch to Purple",
        href: "./css/purple.css"
    },
    {
        color: "#82543A",
        title: "Switch to Coffee",
        href: "./css/coffee.css"
    },
    {
        color: "#E63F74",
        title: "Switch to Pink",
        href: "./css/pink.css"
    },
    {
        color: "#999999",
        title: "Switch to Gray",
        href: "./css/gray.css"
    },
    {
        color: "#5D85B7",
        title: "Switch to Blue",
        href: "./css/blue.css"
    },
    {
        color: "#D6110B",
        title: "Switch to Red",
        href: "./css/red.css"
    },
     {
        color: "#17BC9D",
        title: "Switch to Green",
        href: "./css/green.css"
    },
    
];

ColorSwitcher.init(colorSheets);
        
});