(function ($) {
	"use strict";


jQuery(document).ready(function($){
	
    $('.frequent_questions').find('div').hide();

    $('.frequent_questions ul').find('li').click(function() {
            $(this).children('div').slideDown();
            $(this).children('h3').addClass("showanwer");
            // $(this).siblings().children('h3').removeClass("down_arrow");
            $(this).siblings().children('div').slideUp();
            $(this).siblings().children('h3').removeClass("showanwer");
            $(this).siblings().children('h3').addClass("down_arrow");
	});
	
    
    // Owl Carousel for Latest Course
    $('.all_latest_course').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    // Owl Carousel for Testimonial
    var testimonial = $('.all_testimonial');
    testimonial.owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        items:1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });
    
    $('.testi_next').click(function() {
        testimonial.trigger('next.owl.carousel');
    });
    
    $('.testi_prev').click(function() {
        testimonial.trigger('prev.owl.carousel');
    });
    
    // Owl Carousel for partners
    $('.all_partners').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:2500,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:4
            },
            992:{
                items:6
            }
        }
    });
    
    // Owl Carousel for Alumni Photos
    $('.all_alumni_carousel_item').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    // jQuery counter
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });
    
    
});
$("#contact_form").validate({
				rules: {
					Name: {
						required: true,
						minlength: 3
					},
					Email: {
						required: true,
						email: true
					},
				},
				messages: {
					Name: {
						required: "Please enter a yourname",
						minlength: "Your name must consist of at least 2 characters"
					},
					Email: "Please enter a valid email address",					

				}
			});

	$('#contact_form').submit(function(event) {
			event.preventDefault();
			var content = $(this).serializeArray(); 
			var formname = $(this).attr('id');
			var res = true;
			$("input[type='text'],textarea",this).each(function() {
     				if($(this).val().trim() == "") {
      				res = false; 
     				}
    			});
			content.push({"name":"formname","value":formname});
			if(res){
				$.ajax({
					url: 'mail.php',
					type: 'POST',
					data: content,
					success: function(data) {
						alert(data);
					},
				});
			}
		});

		fadeContent();
		function fadeContent() {
		    $(".div-roles p:hidden:first-child").fadeIn(500).delay(3000).fadeOut(500, function () {
		        $(this).appendTo($(this).parent());
		        fadeContent();
		    });
		}
		
}(jQuery));	