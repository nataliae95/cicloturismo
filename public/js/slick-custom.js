

(function ($) {
    // USE STRICT
    "use strict";

        /*[ Slick1 ]
        ===========================================================*/
        var itemSlick1 = $('.slick1').find('.item-slick1');
        var action1 = [];
        var action2 = [];
        var action3 = [];
        var cap1Slide1 = [];
        var cap2Slide1 = [];
        var btnSlide1 = [];

        for(var i=0; i<itemSlick1.length; i++) {
          cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');
          cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');
          btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');
        }


        $('.slick1').on('init', function(){

            action1[0] = setTimeout(function(){
                $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');
            },200);

            action2[0] = setTimeout(function(){
                $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');
            },1000);

            action3[0] = setTimeout(function(){
                $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');
            },1800);              
        });


        $('.slick1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: true,
            appendDots: $('.wrap-slick1-dots'),
            dotsClass:'slick1-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick1'),
            prevArrow:'<button class="arrow-slick1 prev-slick1"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick1 next-slick1"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick1').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick1.length; i++) {

              clearTimeout(action1[i]);
              clearTimeout(action2[i]);
              clearTimeout(action3[i]);


              $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');
              $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');
              $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');

            }

            action1[currentSlide] = setTimeout(function(){
                $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2[currentSlide] = setTimeout(function(){
                $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3[currentSlide] = setTimeout(function(){
                $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');
            },1800);            
        });


        /*[ Slick2 ]
        ===========================================================*/
        var itemSlick2 = $('.item-slick2');
        var action1s2 = [];
        var cap1Slide2 = [];

        for(var i=0; i<itemSlick2.length; i++) {
          cap1Slide2[i] = $(itemSlick2[i]).find('.wrap-content-slide2 .blo2');
        }


        $('.slick2').on('init', function(){

            action1s2[0] = setTimeout(function(){
                $(cap1Slide2[0]).addClass($(cap1Slide2[0]).data('appear') + ' visible-true');
            },200);              
        });


        $('.slick2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: true,
            appendDots: $('.wrap-slick2-dots'),
            dotsClass:'slick2-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick2'),
            prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick2').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick2.length; i++) {

              clearTimeout(action1s2[i]);

              $(cap1Slide2[i]).removeClass($(cap1Slide2[i]).data('appear') + ' visible-true');
            }

            action1s2[currentSlide] = setTimeout(function(){
                $(cap1Slide2[currentSlide]).addClass($(cap1Slide2[currentSlide]).data('appear') + ' visible-true');
            },200);            
        });


        /*[ Slick3 ]
        ===========================================================*/
        var itemSlick3 = $('.slick3').find('.item-slick3');
        var action1s3 = [];
        var action2s3 = [];
        var action3s3 = [];
        var cap1Slide3 = [];
        var cap2Slide3 = [];
        var btnSlide3 = [];

        for(var i=0; i<itemSlick3.length; i++) {
          cap1Slide3[i] = $(itemSlick3[i]).find('.pic-review');
          cap2Slide3[i] = $(itemSlick3[i]).find('.content-review');
          btnSlide3[i] = $(itemSlick3[i]).find('.more-review');
        }


        $('.slick3').on('init', function(){

            action1s3[0] = setTimeout(function(){
                $(cap1Slide3[0]).addClass($(cap1Slide3[0]).data('appear') + ' visible-true');
            },200);

            action2s3[0] = setTimeout(function(){
                $(cap2Slide3[0]).addClass($(cap2Slide3[0]).data('appear') + ' visible-true');
            },1000);

            action3s3[0] = setTimeout(function(){
                $(btnSlide3[0]).addClass($(btnSlide3)[0].data('appear') + ' visible-true');
            },1000);              
        });


        $('.slick3').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            dots: true,
            appendDots: $('.wrap-slick3-dots'),
            dotsClass:'slick3-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick3'),
            prevArrow:'<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick3').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick3.length; i++) {

              clearTimeout(action1s3[i]);
              clearTimeout(action2s3[i]);
              clearTimeout(action3s3[i]);


              $(cap1Slide3[i]).removeClass($(cap1Slide3[i]).data('appear') + ' visible-true');
              $(cap2Slide3[i]).removeClass($(cap2Slide3[i]).data('appear') + ' visible-true');
              $(btnSlide3[i]).removeClass($(btnSlide3[i]).data('appear') + ' visible-true');

            }

            action1s3[currentSlide] = setTimeout(function(){
                $(cap1Slide3[currentSlide]).addClass($(cap1Slide3[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2s3[currentSlide] = setTimeout(function(){
                $(cap2Slide3[currentSlide]).addClass($(cap2Slide3[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3s3[currentSlide] = setTimeout(function(){
                $(btnSlide3[currentSlide]).addClass($(btnSlide3)[currentSlide].data('appear') + ' visible-true');
            },1000);            
        });
        
/*[ Slick4 ]
        ===========================================================*/
        var itemSlick4 = $('.slick4').find('.item-slick4');
        var action1s4 = [];
        var action2s4 = [];
        var action3s4 = [];
        var cap1Slide4 = [];
        var cap2Slide4 = [];
        var btnSlide4 = [];

        for(var i=0; i<itemSlick4.length; i++) {
          cap1Slide4[i] = $(itemSlick4[i]).find('.pic-review');
          cap2Slide4[i] = $(itemSlick4[i]).find('.content-review');
          btnSlide4[i] = $(itemSlick4[i]).find('.more-review');
        }


        $('.slick4').on('init', function(){

            action1s4[0] = setTimeout(function(){
                $(cap1Slide4[0]).addClass($(cap1Slide4[0]).data('appear') + ' visible-true');
            },200);

            action2s4[0] = setTimeout(function(){
                $(cap2Slide4[0]).addClass($(cap2Slide4[0]).data('appear') + ' visible-true');
            },1000);

            action3s4[0] = setTimeout(function(){
                $(btnSlide4[0]).addClass($(btnSlide4)[0].data('appear') + ' visible-true');
            },1000);              
        });


        $('.slick4').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            dots: true,
            appendDots: $('.wrap-slick4-dots'),
            dotsClass:'slick4-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick4'),
            prevArrow:'<button class="arrow-slick4 prev-slick4"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick4 next-slick4"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick4').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick4.length; i++) {

              clearTimeout(action1s4[i]);
              clearTimeout(action2s4[i]);
              clearTimeout(action3s4[i]);


              $(cap1Slide4[i]).removeClass($(cap1Slide4[i]).data('appear') + ' visible-true');
              $(cap2Slide4[i]).removeClass($(cap2Slide4[i]).data('appear') + ' visible-true');
              $(btnSlide4[i]).removeClass($(btnSlide4[i]).data('appear') + ' visible-true');

            }

            action1s4[currentSlide] = setTimeout(function(){
                $(cap1Slide4[currentSlide]).addClass($(cap1Slide4[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2s4[currentSlide] = setTimeout(function(){
                $(cap2Slide4[currentSlide]).addClass($(cap2Slide4[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3s4[currentSlide] = setTimeout(function(){
                $(btnSlide4[currentSlide]).addClass($(btnSlide4)[currentSlide].data('appear') + ' visible-true');
            },1000);           
        });
        
/*[ Slick5 ]
        ===========================================================*/
        var itemSlick5 = $('.slick5').find('.item-slick5');
        var action1s5 = [];
        var action2s5 = [];
        var action3s5 = [];
        var cap1Slide5 = [];
        var cap2Slide5 = [];
        var btnSlide5 = [];

        for(var i=0; i<itemSlick5.length; i++) {
          cap1Slide5[i] = $(itemSlick5[i]).find('.pic-review');
          cap2Slide5[i] = $(itemSlick5[i]).find('.content-review');
          btnSlide5[i] = $(itemSlick5[i]).find('.more-review');
        }


        $('.slick5').on('init', function(){

            action1s5[0] = setTimeout(function(){
                $(cap1Slide5[0]).addClass($(cap1Slide5[0]).data('appear') + ' visible-true');
            },200);

            action2s5[0] = setTimeout(function(){
                $(cap2Slide5[0]).addClass($(cap2Slide5[0]).data('appear') + ' visible-true');
            },1000);

            action3s5[0] = setTimeout(function(){
                $(btnSlide5[0]).addClass($(btnSlide5)[0].data('appear') + ' visible-true');
            },1000);              
        });


        $('.slick5').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            dots: true,
            appendDots: $('.wrap-slick5-dots'),
            dotsClass:'slick5-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick5'),
            prevArrow:'<button class="arrow-slick5 prev-slick5"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick5 next-slick5"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick5').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick5.length; i++) {

              clearTimeout(action1s5[i]);
              clearTimeout(action2s5[i]);
              clearTimeout(action3s5[i]);


              $(cap1Slide5[i]).removeClass($(cap1Slide5[i]).data('appear') + ' visible-true');
              $(cap2Slide5[i]).removeClass($(cap2Slide5[i]).data('appear') + ' visible-true');
              $(btnSlide5[i]).removeClass($(btnSlide5[i]).data('appear') + ' visible-true');

            }

            action1s5[currentSlide] = setTimeout(function(){
                $(cap1Slide5[currentSlide]).addClass($(cap1Slide5[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2s5[currentSlide] = setTimeout(function(){
                $(cap2Slide5[currentSlide]).addClass($(cap2Slide5[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3s5[currentSlide] = setTimeout(function(){
                $(btnSlide5[currentSlide]).addClass($(btnSlide5)[currentSlide].data('appear') + ' visible-true');
            },1000);            
        });

/*[ Slick6 ]
        ===========================================================*/
        var itemSlick6 = $('.slick6').find('.item-slick6');
        var action1s6 = [];
        var action2s6 = [];
        var action3s6 = [];
        var cap1Slide6 = [];
        var cap2Slide6 = [];
        var btnSlide6 = [];

        for(var i=0; i<itemSlick6.length; i++) {
          cap1Slide6[i] = $(itemSlick6[i]).find('.pic-review');
          cap2Slide6[i] = $(itemSlick6[i]).find('.content-review');
          btnSlide6[i] = $(itemSlick6[i]).find('.more-review');
        }


        $('.slick6').on('init', function(){

            action1s6[0] = setTimeout(function(){
                $(cap1Slide6[0]).addClass($(cap1Slide6[0]).data('appear') + ' visible-true');
            },200);

            action2s6[0] = setTimeout(function(){
                $(cap2Slide6[0]).addClass($(cap2Slide6[0]).data('appear') + ' visible-true');
            },1000);

            action3s6[0] = setTimeout(function(){
                $(btnSlide6[0]).addClass($(btnSlide6)[0].data('appear') + ' visible-true');
            },1000);              
        });


        $('.slick6').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            dots: true,
            appendDots: $('.wrap-slick6-dots'),
            dotsClass:'slick6-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick6'),
            prevArrow:'<button class="arrow-slick6 prev-slick6"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick6 next-slick6"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick6').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick6.length; i++) {

              clearTimeout(action1s6[i]);
              clearTimeout(action2s6[i]);
              clearTimeout(action3s6[i]);


              $(cap1Slide6[i]).removeClass($(cap1Slide6[i]).data('appear') + ' visible-true');
              $(cap2Slide6[i]).removeClass($(cap2Slide6[i]).data('appear') + ' visible-true');
              $(btnSlide6[i]).removeClass($(btnSlide6[i]).data('appear') + ' visible-true');

            }

            action1s6[currentSlide] = setTimeout(function(){
                $(cap1Slide6[currentSlide]).addClass($(cap1Slide6[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2s6[currentSlide] = setTimeout(function(){
                $(cap2Slide6[currentSlide]).addClass($(cap2Slide6[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3s6[currentSlide] = setTimeout(function(){
                $(btnSlide6[currentSlide]).addClass($(btnSlide6)[currentSlide].data('appear') + ' visible-true');
            },1000);            
        });
        

})(jQuery);