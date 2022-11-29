jQuery(document).ready(function ($) {



  /* animation*/
  AOS.init({
    /*disable: 'mobile',*/
  });

  /*parallax text*/
  if(window.innerWidth > 319){
    $(window).scroll(function(event){
      var topBlock = $('.media').offset().top,
        h = window.innerHeight,
        st = $(this).scrollTop(),
        scrollTop = (topBlock - st)/10 - 100,
        scaleBlock = (topBlock - st - h);

      $('.media .text p').css("top", scrollTop);
      if(scaleBlock > 0){
        $('.wireframes .content .item').css('transform', 'scale(' + 0.5 + ')');
      }else if(scaleBlock < 0 && scaleBlock > -200){
        $('.wireframes .content .item').css('transform', 'scale(' + 0.8 + ')');
      }else{
        $('.wireframes .content .item').css('transform', 'scale(' + 1 + ')');
      }
    });
  }


  /*scroll to block*/
  $(document).on('click', '.top-menu a', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  /*slider*/
  let swiperServices1 = new Swiper(".slider-services-1", {
    pagination: {
      el: ".services-pagination-1",
    },
    navigation: {
      nextEl: ".services-next-1",
      prevEl: ".services-prev-1",
    },
    on: {
      init: function(swiperServices1) {
        let totalItem = swiperServices1.slides.length;

        $('.pagination-1 .total').html(totalItem);
      }
    }
  });

  let swiperServices2 = new Swiper(".slider-services-2", {
    pagination: {
      el: ".services-pagination-2",
    },
    navigation: {
      nextEl: ".services-next-2",
      prevEl: ".services-prev-2",
    },
    on: {
      init: function(swiperServices2) {
        let totalItem = swiperServices2.slides.length;

        $('.pagination-2 .total').html(totalItem);
      }
    }
  });

  let swiperServices3 = new Swiper(".slider-services-3", {
    pagination: {
      el: ".services-pagination-3",
    },
    navigation: {
      nextEl: ".services-next-3",
      prevEl: ".services-prev-3",
    },
    on: {
      init: function(swiperServices3) {
        let totalItem = swiperServices3.slides.length;
        $('.pagination-3 .total').html(totalItem);
      }
    }
  });

  let swiperServices4 = new Swiper(".slider-services-4", {
    pagination: {
      el: ".services-pagination-4",
    },
    navigation: {
      nextEl: ".services-next-4",
      prevEl: ".services-prev-4",
    },
    on: {
      init: function(swiperServices4) {
        let totalItem = swiperServices4.slides.length;
        console.log(totalItem)
        $('.pagination-4 .total').html(totalItem);
      }
    }
  });

  swiperServices1.on('slideChange', function (e) {
    let item = swiperServices1.activeIndex + 1;
    $('.pagination-1 .current').html(item);
  });
  swiperServices2.on('slideChange', function (e) {
    let item = swiperServices2.activeIndex + 1;
    $('.pagination-2 .current').html(item);
  });
  swiperServices3.on('slideChange', function (e) {
    let item = swiperServices3.activeIndex + 1;
    $('.pagination-3 .current').html(item);
  });
  swiperServices4.on('slideChange', function (e) {
    let item = swiperServices4.activeIndex + 1;
    $('.pagination-4 .current').html(item);
  });


    //TABS
    (function($){
      jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
          tabs = this;
          i = 0;

          showPage = function(i){
            $(tabs).find(".tab-content").children("div").hide();
            $(tabs).find(".tab-content").children("div").eq(i).show();
            $(tabs).find(".tabs-menu").children("li").removeClass("is-active");
            $(tabs).find(".tabs-menu").children("li").eq(i).addClass("is-active");
          }

          showPage(0);

          $(tabs).find(".tabs-menu").children("li").each(function(index, element){
            $(element).attr("data-page", i);
            i++;
          });

          $(tabs).find(".tabs-menu").children("li").click(function(){
            showPage(parseInt($(this).attr("data-page")));
          });
        };
        return this.each(createTabs);
      };
    })(jQuery);
  $(".tabs").lightTabs();

  /*accordion*/
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });

  /*slider*/
  var swiperTestimonials = new Swiper(".testimonials-slider", {
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
  });

  /*marquee*/
  $('.marquee').marquee({
    duration: 50000,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });

  /*drag*/
  if(window.innerWidth > 991){
    $( ".why-us .item" ).draggable();
  }

 /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();
    if($('.open-menu').hasClass('is-active')){


      $('.open-menu').removeClass('is-active');
      $.fancybox.close();
      $('header').removeClass('is-active');
    } else{
      $('.open-menu').addClass('is-active');
      $('header').addClass('is-active');
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out',
      });
    }
  });

  /*mob-menu click*/
  $(document).on('click', '.mob-menu a', function (e){
    e.preventDefault();
    $.fancybox.close();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  })

  /*form*/
  $('.input-wrap input, .input-wrap textarea').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).closest('.input-wrap').removeClass('is-active');
    } else {
      $(myInput).closest('.input-wrap').addClass('is-active');
    }
  });

  $('.input-wrap input, .input-wrap textarea').focus(function (e) {
    $(this).closest('.input-wrap').addClass('is-focus');
  });
  $('.input-wrap input, .input-wrap textarea').blur(function (e) {
    $(this).closest('.input-wrap').removeClass('is-focus');
  });

  /*popup*/
  $('.fancybox').fancybox({
    touch:false,
    autoFocus:false,
  });

});