jQuery(document).ready (function ($) {
"use strict";
	// remove empty p
	$('p')
	.filter(function() {
	    return $.trim($(this).text()) === '' && $(this).children().length == 0
	})
	.remove();


	//Different header on index
	function difheader(){
		var width = $(document).width();
		var new_height = ((682*width)/1920)-1;
		var new_font_size = ((40*width)/1920);
		if(width > 800){
			$(".welcome-box").height(new_height)
				.css('font-size', new_font_size)
				.removeClass('mobile');
		}else{
			if(width > 320){
				$(".welcome-box").height(285)
					.css('font-size', 16)
					.addClass('mobile');
			}else{
				$(".welcome-box").height('auto')
					.css('font-size', 16)
					.addClass('mobile');
			}
		}
	}
	$(window).resize(function(){
		difheader();
	});
	difheader();
	



//place holder
    $('input').each(function() {
    $(this).data('holder',$(this).attr('placeholder'));
    
    $('input').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
        });
    $('textarea').data('holder',$('textarea').attr('placeholder'));
    
    $('textarea').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('textarea').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });


// search
$('#navigation .nav-button').click(function(e) {
    if (!$(this).hasClass('active')) {
	$('#navigation .nav-button').removeClass('active');
	$(this).addClass('active');
	$('.nb-inner-wrap').removeClass('sw-show');
	$(this).next('.nb-inner-wrap').addClass('sw-show');
    } else {
	$(this).removeClass('active');
	$('.nb-inner-wrap').removeClass('sw-show');
    }
    e.stopPropagation();

});
$('.nb-inner-wrap').click(function(e) {
    e.stopPropagation();
});

$('body').click(function(e) {
    $('#navigation .nav-button').removeClass('active');
    $('.nb-inner-wrap').removeClass('sw-show');
});

//Sticky navigation
if ($(window).width() > 1000) {
   if ($('body').hasClass('sticky_navigation_on')) {
        var aboveHeight = $('#header-wrapper').outerHeight();
        $(window).scroll(function(){
	        //if scrolled down more than the headerÕs height
                if ($(window).scrollTop() > aboveHeight){
	        // if yes, add ÒfixedÓ class to the <nav>
	        // add padding top to the #content
            if ( $('#wpadminbar').length ) {
                $('#navigation').addClass('sticky-nav').css('top','28px').next().css('padding-top','52px');
             } else {
                $('#navigation').addClass('sticky-nav').css('top','0').next().css('padding-top','52px');
            } 
                } else {
 
	        // when scroll up or less than aboveHeight,
                $('#navigation').removeClass('sticky-nav').css('top', 0).next().css('padding-top','0');
                }
        });	
    } 
}
//tabbed widget
    jQuery(".widget_momizattabber").each(function(){
        var ul = jQuery(this).find(".main_tabs ul.tabs");

        jQuery(this).find(".tab-content").each(function() {
            jQuery(this).find('a.mom-tw-title').wrap('<li></li>').parent().detach().appendTo(ul);
        });
    });

// Main Tabs
    if ($(".main_tabs ul.tabs").length) { $("ul.tabs").momtabs("div.tabs-content-wrap > .tab-content", { effect: 'fade'}); }

//HIDPI Images
    var hidpi = window.devicePixelRatio > 1 ? true : false;
    if (hidpi) {
    // Replace img src with data-hidpi
    $('img[data-hidpi]').each(function() {
    // If width x height hasn't been set, fill it in
    if ($(this).parents('.tab-content').length === 0) {
	/*
	if ($(this).attr('width') === undefined) {
	$(this).attr('width', $(this).width());
	}
	if ($(this).attr('height') === undefined) {
	$(this).attr('height', $(this).height());
	}
	*/
    }
    $(this).attr('src', $(this).data('hidpi'));
    });
    }    
// weather widget
    $('.weather-widget').on('click', '.day-summary',function() {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $(this).next('.day-details').slideToggle(250, function() {
                $this.toggleClass('active');
            });
        } else {
                $this.toggleClass('active');
            $(this).next('.day-details').slideToggle(250);
        }
    });

//time line 
    if ($('.mom-timeline').length) {
	$('.tl-month:first-child').removeClass('closed').addClass('opened');
        $('.tl-month').each(function() {
            if ($(this).hasClass('opened')) {
                $(this).find('.tl-days').show();
                $(this).find('.tlm-title .handle').removeClass('brankic-icon-add');
                $(this).find('.tlm-title .handle').addClass('brankic-icon-minus3');
            }
    });
        $('.tl-month .tlm-title .handle').click(function() {
            var $this = $(this);
            var month = $(this).parent().parent();
            if (month.hasClass('closed')) {
                month.removeClass('closed');
                month.addClass('opened');
                month.find('.tl-days').slideDown();
                $this.removeClass('brankic-icon-add');
                $this.addClass('brankic-icon-minus3');
            } else {
                month.removeClass('opened');
                month.find('.tl-days').slideUp('normal', function() {
                month.addClass('closed');
                $this.removeClass('brankic-icon-minus3');
                $this.addClass('brankic-icon-add');
                });
            }
        });
    }

//social icons
if ($('.mom-social-icons').length) {
    $('.mom-social-icons li').each(function () {
    var dataHover = $('a',this).attr('data-bghover');
    if (typeof dataHover !== 'undefined' && dataHover !== false) {
	 var origBg = $('a',this).css('background');
	 var hoverBg = $('a',this).data('bghover');
	$('a', this).hover(function() {
	    $(this).css('background', hoverBg)
	}, function() {
	    $(this).css('background', origBg)
	});
    }
    });
}

//images
if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
    // fade images on appear
    $('body.fade-imgs-in-appear .main_container img, body.fade-imgs-in-appear .sidebar img, body.fade-imgs-in-appear #footer img, body.fade-imgs-in-appear .wpb_row img').addClass('disappear');
    $('body.fade-imgs-in-appear .main_container img, body.fade-imgs-in-appear .sidebar img, body.fade-imgs-in-appear #footer img,  body.fade-imgs-in-appear .wpb_row img').one('inview', function() {$(this).addClass('appear');});
    
    //body background link
    $('body.use_bg_as_ad.layout-boxed').click(function(e){
	if (e.target === this) {

			window.open(
			  momAjaxL.bodyad,
			  '_blank' // <- This is what makes it open in a new window.
			);

	}
    });
}
			
//Submenu auto align
        $('ul.main-menu > li').each(function(e){
            var t = $(this),
                submenu = t.find('.cats-mega-wrap');
            if( submenu.length > 0 ) {
                var offset = submenu.offset(),
                    w = submenu.width();
                if( offset.left + w > $(window).width() ) {
                    t.addClass('sub-menu-left');
                } else {
                    t.removeClass('sub-menu-left');
                }
            }
        });
//category mega menu
	$('.cats-mega-wrap ul.sub-menu li').mouseenter(function() {
	    var id = $(this).attr('id');
	    var id = id.split('-');
	    //console.log(id[2]);
	    $(this).parent().find('li').removeClass('active');
	    $(this).addClass('active');
	    $(this).parent().next('.subcat').find('.mom-cat-latest').hide();
	    $(this).parent().next('.subcat').find('#mn-latest-'+id[2]).show();
	});

//breaking news
if ($('.news-ticker').length) {
    $('body:not(.rtl) .news-ticker > ul').liScroll();
    $('body.rtl .news-ticker > ul').liScrollRight();

if ($('body').hasClass('ticker_has_live_time')) {
$.startTime = function () {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = $.checkTime(m);
    s = $.checkTime(s);
    if ($('body').hasClass('time_in_twelve_format')) {
	h = ((h+11) % 12) +1;
    }
    //document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    $('span.current_time span').html(h+":"+m+":"+s);
    var t = setTimeout(function(){$.startTime()},500);
}
$.checkTime = function(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
$.startTime();
}

}

//social share
$('.mom-social-share a').click(function(e) { e.preventDefault(); });

//twitter widget buttons
$('.twiter-list ul.twiter-buttons li a').click( function(e) {
    e.preventDefault();
}); 	

//Porfolio filter
$('ul.portfolio-filter').each( function() {
	var $this = $(this);
	$this.find('li a').click(function() {
	    $this.find('li').removeClass('current');
	    $(this).parent().addClass('current');
	});
});

// Avanced search form Validate
$('.advanced-search-form [type="submit"]').click(function(e) {
    var s = $(this).parent().find('input[name="s"]');
    if (s.val() === '' ) {
	e.preventDefault()
	s.addClass('invalid');
	s.attr('placeholder', s.data('nokeyword'));
    }
});

// videos
$('.mom-video-widget').fitVids();
//scroll to top
$('.scrollToTop').hide();
	$(window).scroll(function () {
		if( $(this).scrollTop() > 100 ) {
			$('.scrollToTop').fadeIn(300);
		}
		else {
			$('.scrollToTop').fadeOut(300);
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop:0}, 500 );
		return false;
	});
// sidebars categories
$('.sidebar li.cat-item, .sidebar .widget_archive li').each(function(){
          var $contents = $(this).contents();
          if ($contents.length > 1)  {
	  $contents.eq(1).wrap('<span class="cat_num"></span>');

	  $contents.eq(1).each(function(){
	});
    }
    }).contents();
	    $('.sidebar li.cat-item .cat_num, .sidebar .widget_archive li .cat_num').each(function () {
	       $(this).html($(this).text().substring(2));
	      $(this).html( $(this).text().replace(/\)/gi, "") );
	    });

if ($('.sidebar li.cat-item').length) {
    $('.sidebar li.cat-item .cat_num .line').each( function() {
	if ($(this).is(':empty')){
	    $(this).parent().hide();
	}
	
});
}
// footer Categories
$('#footer li.cat-item').parent().addClass('two_columns_categoreis clearfix');
/*-----------------------------------------
*	Shortcode
*-----------------------------------------*/

//Accordion
$('.accordion.mom_accordion').each( function() {
    var acc = $(this);
    if (acc.hasClass('toggle_acc')) {
        acc.find('li:first .acc_title').addClass('active');
        acc.find('.acc_toggle_open').addClass('active');
        acc.find('.acc_toggle_open').next('.acc_content').show();
        acc.find('.acc_toggle_close').removeClass('active');
        acc.find('.acc_toggle_close').next('.acc_content').hide();
        acc.find('.acc_title').click(function() {
        $(this).toggleClass('active');
        $(this).next('.acc_content').slideToggle();
    });
    } else {
    acc.find('li:first .acc_title').addClass('active');
    acc.find('.acc_title').click(function() {
        if(!$(this).hasClass('active')) {
        acc.find('.acc_title').removeClass('active');
        acc.find('.acc_content').slideUp();
        $(this).addClass('active');
        $(this).next('.acc_content').slideDown();
        }
    });
    }
}); 
$(".accordion").each(function () {
    $(this).find('.acc_title').each(function(i) {
        $(this).find('.acch_numbers').text(i+1);
    });
});

// lists
if ($('.mom_list').length) {
    $('.mom_list li').each(function() {
	var i = $(this).children('i');
	var cl = i.data('color');
	var clh = i.data('color_hover');
	var bg = i.data('bg');
	var bgh = i.data('bg_hover');
	if (clh !== '') {
	    $(this).hover(function() {
		i.css('color', clh);
	    }, function() {
		i.css('color', cl);
	    });	    
	}
	if (bgh !== '') {
	    $(this).hover(function() {
		i.css('background', bgh);
	    }, function() {
		i.css('background', bg);
	    });
	}

	
    });
}
//callitout
if ($('.mom_callout').length) {
    $('.mom_callout').each( function () {
	if ($(this).find('.cobtr').length) {
	var btwidth = parseFloat($(this).find('.cobtr').css('width'))+30;
	var btheight = parseFloat($(this).find('.cobtr').css('height'))/2;
	$(this).find('.callout_content').css('margin-right',btwidth+'px');
	$(this).find('.cobtr').css('margin-top', '-'+btheight+'px');
	}
	if ($(this).find('.cobtl').length) {
	var btwidth = parseFloat($(this).find('.cobtl').css('width'))+30;
	var btheight = parseFloat($(this).find('.cobtl').css('height'))/2;
	$(this).find('.callout_content').css('margin-left',btwidth+'px');
	$(this).find('.cobtl').css('margin-top', '-'+btheight+'px');
	}
    });
}
	jQuery('.mom_button').hover(
		function(){
		var $hoverbg = jQuery(this).attr('data-hoverbg');
		var $texthcolor = jQuery(this).attr('data-texthover');
		var $borderhover = jQuery(this).attr('data-borderhover');
		jQuery(this).css("background-color",$hoverbg);
		jQuery(this).css("color",$texthcolor);
		jQuery(this).css("border-color",$borderhover);
	},function() {
		var $bgcolor = jQuery(this).attr('data-bg');
		var $textColor = jQuery(this).attr('data-text');
		var $bordercolor = jQuery(this).attr('data-border');
		if($bgcolor!==undefined){
			jQuery(this).css("background-color",$bgcolor);
		}else {
			jQuery(this).css("background-color",'');
		}
		if($textColor!==undefined){
			jQuery(this).css("color",$textColor);
		}else {
			jQuery(this).css("color",'');
		}
		if($bordercolor !== undefined){
			jQuery(this).css("border-color",$bordercolor);
		}else {
			jQuery(this).css("border-color",'');
		}
	});
// Tab Current icon
if (('.main_tabs ul.tabs li a i').length) {
    $('.main_tabs').each(function () {
	var $this = $(this);
	var current_tab = $this.find('.tabs li a.current i[class*="-icon-"]');
	current_tab.css('color', current_tab.attr('data-current'));
	$this.find('.tabs li a').click(function () {
	if ($(this).hasClass('current')) {
	var $current = $(this).find('[class*="-icon-"]').attr('data-current');
	var $orig = $(this).find('[class*="-icon-"]').attr('data-color');
	
	$this.find('.tabs li a i[class*="-icon-"]').css('color',$orig);
	$('[class*="-icon-"]', this).css('color', $current);
	} 
	});
    });
}
// Accordion Current icon
if (('h2.acc_title i').length) {
    $('.accordion').each(function () {
	var $this = $(this);
	var current_acc = $this.find('h2.active i[class*="-icon-"]');
	current_acc.css('color', current_acc.attr('data-current'));
	$this.find('h2.acc_title').click(function () {
	if ($(this).hasClass('active')) {
	var $current = $(this).find('[class*="-icon-"]').attr('data-current');
	var $orig = $(this).find('[class*="-icon-"]').attr('data-color');
	
	$this.find('h2.acc_title i[class*="-icon-"]').css('color',$orig);
	$('[class*="-icon-"]', this).css('color', $current);
	} 
	});
    });
}

//team members
	var tm_cols = 2;
	var tm_2_i = 0;
	$(".team_member2").each(function(){
		tm_2_i++;
		tm_cols = 2;
		if (tm_2_i % tm_cols === 0) {$(this).addClass("last");}
	});
	var tm_3_i = 0;
	$(".team_member3").each(function(){
		tm_3_i++;
		tm_cols = 3;
		if (tm_3_i % tm_cols === 0) {$(this).addClass("last");}
	});
	var tm_4_i = 0;
	$(".team_member4").each(function(){
		tm_4_i++;
		tm_cols = 4;
		if (tm_4_i % tm_cols === 0) {$(this).addClass("last");}
	});
	var tm_5_i = 0;
	$(".team_member5").each(function(){
		tm_5_i++;
		tm_cols = 5;
		if (tm_5_i % tm_cols === 0) {$(this).addClass("last");}
	});
$('.team_member').each( function () {
    var socials = $(this).find('.member_social ul li');
    var width = 100/socials.length;
    socials.css('width',width+'%');
});	

//Icon Colors in hover
jQuery('.mom_iconbox').hover(
	function(){
	var icon = $(this).find('[class*="-icon-"]');
	var icon_wrap = $(this).find('.iconb_wrap');
	
	var $hover = icon.attr('data-hover');
	var $bghover = icon_wrap.attr('data-hover');
	var $bdhover = icon_wrap.attr('data-border_hover');

	if ($hover !== '') {
	icon.css("color",$hover);
	}
	if ($bghover !== '') {
	icon_wrap.css("background",$bghover);
	}
	if ($bdhover !== '') {
	icon_wrap.css("border-color",$bdhover);
	}
},function() {
	var icon = $(this).find('[class*="-icon-"]');
	var icon_wrap = $(this).find('.iconb_wrap');

	var $color = icon.attr('data-color');
	var $origcolor = icon.css('color');
	var $bgcolor = icon_wrap.attr('data-color');
	var $origbg = icon_wrap.css('background-color');
	var $bdcolor = icon_wrap.attr('data-border_color');
	var $origbd = icon_wrap.css('border-color');
	if($color!==undefined){
		icon.css("color",$color);
	}else {
		icon.css("color",$origcolor);
	}
	if($bgcolor!==undefined){
		icon_wrap.css("background",$bgcolor);
	}else {
		icon_wrap.css("background",$origbg);
	}
	if($bdcolor!==undefined){
		icon_wrap.css("border-color",$bdcolor);
	}else {
	}
});

//icona
jQuery('.mom_icona').hover(
	function(){
	var icon = $(this).find('[class*="-icon-"]');
	var icon_wrap = $(this);
	var $hover = icon.attr('data-hover');
	var $bghover = icon_wrap.attr('data-hover');
	var $bdhover = icon_wrap.attr('data-border_hover');
	icon.css("color",$hover);
	icon_wrap.css("background",$bghover);
	icon_wrap.css("border-color",$bdhover);
},function() {
	var icon = $(this).find('[class*="-icon-"]');
	var icon_wrap = $(this);
	var $color = icon.attr('data-color');
	var $origcolor = icon.css('color');
	var $bgcolor = icon_wrap.attr('data-color');
	var $origbg = icon_wrap.css('background-color');
	var $bdcolor = icon_wrap.attr('data-border_color');
	var $origbd = icon_wrap.css('border-color');
	if($color!==undefined){
		icon.css("color",$color);
	}else {
		icon.css("color",$origcolor);
	}
	if($bgcolor!==undefined){
		icon_wrap.css("background",$bgcolor);
	}else {
		icon_wrap.css("background",$origbg);
	}
	if($bdcolor!==undefined){
		icon_wrap.css("border-color",$bdcolor);
	}else {
	}
});
//Porfolio filter
$('.protfolio_filter ul').each( function() {
	var $this = $(this);
	$this.find('li a').click(function() {
	$this.find('li').removeClass('current');
	$(this).parent().addClass('current');
	});
});

//heighest col
/*
var highestCol = Math.max($('.bothsides_content').height(),$('.sideb').height());
$('.bothsides_content, .sideb').height(highestCol);
*/

// comment form
if($('#commentform').length) {
$('#commentform input').each(function() {
$(this).data('holder',$(this).attr('placeholder'));

$('#commentform input').focusin(function(){
    $(this).attr('placeholder','');
});
$('#commentform input').focusout(function(){
    $(this).attr('placeholder',$(this).data('holder'));
});
    });
$('#commentform #comment').data('holder',$('#commentform #comment').attr('placeholder'));

$('#commentform #comment').focusin(function(){
    $(this).attr('placeholder','');
});
$('#commentform #comment').focusout(function(){
    $(this).attr('placeholder',$(this).data('holder'));
});
}

// Contact form
if($('.mom_contact_form').length) {
$('.mom_contact_form input').each(function() {
	$(this).data('holder',$(this).attr('placeholder'));
	
	$('.mom_contact_form input').focusin(function(){
	$(this).attr('placeholder','');
	});
	$('.mom_contact_form input').focusout(function(){
	$(this).attr('placeholder',$(this).data('holder'));
	});
});

$('.mom_contact_form textarea').each(function() {
	$(this).data('holder',$(this).attr('placeholder'));
	$('.mom_contact_form textarea').focusin(function(){
$(this).attr('placeholder','');
	});
	$('.mom_contact_form textarea').focusout(function(){
$(this).attr('placeholder',$(this).data('holder'));
	});
});

}
//share
if ($('.mom_share_buttons').length) {
    $('.mom_share_buttons').data('height',$('.mom_share_buttons').css('height'));
    var curHeight = $('.mom_share_buttons').height();
    $('.mom_share_buttons').css('height', 'auto');
    var autoHeight = $('.mom_share_buttons').height();
    $('.mom_share_buttons').css('height', curHeight);
    $('.mom_share_it .sh_arrow').toggle(function () {
	$('.mom_share_buttons').stop().animate({height: autoHeight}, 300);
	$(this).find('i').removeClass();
	$(this).find('i').addClass('momizat-icon-193');
    }, function () {
	$('.mom_share_buttons').stop().animate({height: $('.mom_share_buttons').data('height')}, 300);
	$(this).find('i').removeClass();
	$(this).find('i').addClass('momizat-icon-194');
    });
}

//toggles
jQuery("h4.toggle_title").click(function () {
	$(this).next(".toggle_content").slideToggle();
	$(this).toggleClass("active_toggle");
	$(this).parent().toggleClass("toggle_active");
});

$("h4.toggle_min").click(function () {
	$(this).next(".toggle_content_min").slideToggle();
	$(this).toggleClass("active_toggle_min");
});

//scroll to top
$('.scrollTo_top').hide();
	$(window).scroll(function () {
		if( $(this).scrollTop() > 100 ) {
			$('.scrollTo_top').fadeIn(300);
		}
		else {
			$('.scrollTo_top').fadeOut(300);
		}
	});

	$('.scrollTo_top').click(function(){
		$('html, body').animate({scrollTop:0}, 500 );
		return false;
	});

//lightbox
if ($('.mom_lightbox').length) { 
$(".mom_lightbox > a").prettyPhoto({animation_speed:'fast',slideshow:10000, deeplinking: false});
}
// Mobile
if ($('.top_menu_handle').length) {
    $('.top_menu_handle').toggle( function () {
	$(this).next('.mobile_top_nav').show();
	$(this).addClass('tmh_close');
    }, function () {
	$(this).next('.mobile_top_nav').hide();
	$(this).removeClass('tmh_close');
    });
}

if ($('.mobile_main_nav_handle').length) {
    $('.mobile_main_nav_handle').toggle( function () {
	$(this).next('.mom_mobile_main_nav .nav').slideDown();
    }, function () {
	$(this).next('.mom_mobile_main_nav .nav').slideUp();
    });

}

$(window).resize(function() {
  if ($(window).width() < 978) {
	$('.video_wrap').fitVids();
  } 
});

  if ($(window).width() < 978) {
	$('.video_wrap').fitVids();
  } 
//$('.video_frame').fitVids();
$(window).resize(function() {
  if ($(window).width() < 460) {
    $('.topbar .mom-social-icons li').hide();
    $(".topbar .mom-social-icons li:lt(7)").show();
  } 
});

  if ($(window).width() < 460) {
    $('.topbar .mom-social-icons li').hide();
    $(".topbar .mom-social-icons li:lt(7)").show();
  }
//$("html").niceScroll();

/*
     $('a').click(function(){
	$('html, body').animate({
	    scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	}, 500);
	return false;
    });
 */
$('.animator.animated, .iconb_wrap.animated').each( function() {
    var $this = $(this);
    var animation = $(this).attr('data-animate');

$this.bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
	    $(this).addClass(animation);
	    $(this).css('visibility', 'visible');
	    if(animation.indexOf('fade') === -1)
	    {
	      $(this).css('opacity', '1');
	    }
    if (visiblePartY == 'top') {
      // top part of element is visible
    } else if (visiblePartY == 'bottom') {
      // bottom part of element is visible
    } else {
      // whole part of element is visible
    }
  } else {
    // element has gone out of viewport
  }
});

});
if ($('.progress_outer').length) {
    $('.progress_outer').each( function() {
	var $this = $(this);
    $this.bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
		$(this).find('.parograss_inner').show();
		$(this).find('.parograss_inner').addClass('ani-bar');
	if (visiblePartY == 'top') {
	  // top part of element is visible
	} else if (visiblePartY == 'bottom') {
	  // bottom part of element is visible
	} else {
	  // whole part of element is visible
	}
      } else {
	// element has gone out of viewport
      }
    });
    
    });
}
//responsive headings
    if ($(window).width() < 767) {
	$('h1,h2,h3,h4,h5,h6, span, .mom_google_font').each(function() {
	    if ($(this).attr('font-size')) {
		var fs = parseFloat($(this).css('font-size'));
		if (fs > 24) {
		    $(this).css('font-size','23px');
		}
	    }
	});
    }

if ($('.mom_custom_background').length) {
    $('.mom_custom_background').each(function() {
	var $this = $(this);
	$(window).scroll(function () {
		var speed = 8.0;
		$this.css({backgroundPosition:(-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px"});
		//document.body.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
	});
    });
}
//Default Gallery
if ($('.gallery .gallery-item').length) {
    $(".gallery .gallery-item a").attr('rel', 'prettyPhoto[pp_gal]');
    $(".gallery .gallery-item a").prettyPhoto(); 
}

//lightbox
if ($('img.lightbox').length) {
    $('img.lightbox').each(function() {
	$(this).parent('a').prettyPhoto(); 
    })
}

/*----------------------------
    Ads
 ----------------------------*/
if ($('.mca-fixed').length) {
    var mca_top = $('.mca-fixed').offset().top;
    var mca = $('.mca-fixed');
        $(window).scroll(function(){
	    if ($(window).scrollTop() > mca_top){
		if ( $('#wpadminbar').length ) {
		    mca.css({ top:'28px', position: 'fixed' });
		    mca.addClass('mca_touch_top');
		 } else {
		    mca.css({ top:'0', position: 'fixed' });
		    mca.addClass('mca_touch_top');
		} 
	    } else {
		mca.css({ top:'auto', position: 'absolute' });
		mca.removeClass('mca_touch_top');
	    }
        });    
}
/* ==========================================================================
 *                Responsive mode
   ========================================================================== */

// double tab on navigation
if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
    $('#navigation .main-menu > li.menu-item-has-children').doubleTapToGo();
}
	
// Responsive menus
$('.top-menu-holder').click(function(e) {
    e.stopPropagation();
    $('.device-top-nav').slideToggle();
    $(this).toggleClass('active');
});
$('.device-top-nav, .device-menu').click(function(e) {
    e.stopPropagation();
});
$('body').click(function() {
    $('.device-top-nav').slideUp();
    $('.device-menu').slideUp();
});

$('.device-menu-holder').click(function(e) {
    e.stopPropagation();
    if ($(this).hasClass('active')) {
	    $('.device-menu li').each(function() {
		if ($(this).find('.mom_mega_wrap').length !== 0) {
		} else {
		    $(this).find('.sub-menu').slideUp();
		}
	    });
	    $('.device-menu').find('.dm-active').removeClass('dm-active');
	    $('.device-menu').find('.mom_custom_mega').slideUp();
    }
    $('.device-menu').slideToggle();
    $(this).toggleClass('active');
    $('#navigation .nav-buttons').toggleClass('mh-active');

});
$('.responsive-caret').click(function() {
    var li = $(this).parent();
    if (li.hasClass('dm-active') || li.find('.dm-active').length !== 0 || li.find('.sub-menu').is(':visible') || li.find('.mom_custom_mega').is(':visible') ) {
	li.removeClass('dm-active');
	li.children('.sub-menu').slideUp();
	if (li.find('.mom_mega_wrap').length === 0) {
	    	li.find('.sub-menu').slideUp();
	}
	if (li.hasClass('mom_default_menu_item') || li.find('.cats-mega-wrap').length !== 0) {
	    li.find('.sub-menu').slideUp();
	}
	li.find('.dm-active').removeClass('dm-active');
	if (li.find('.mom_custom_mega').length !== 0) {
	    li.find('.mom_custom_mega').slideUp();
	}

    } else {
	$('.device-menu').find('.dm-active').removeClass('dm-active');
	li.addClass('dm-active');
	li.children('.sub-menu').slideDown();
	if (li.find('.cats-mega-wrap').length !== 0) {
	    li.find('.sub-menu').slideDown();
	}
	if (li.find('.mom_custom_mega').length !== 0) {
	    li.find('.mom_custom_mega').slideDown();
	}

    }
})
$('.the_menu_holder_area').html($('.device-menu').find('.current-menu-item').children('a').html());

var nbts = $('.nav-buttons .nav-button');
var rnp = 0;
nbts.each(function () {
    var w = $(this).outerWidth()-1;
    rnp += w;
});
    if (nbts.length === 3) {
	rnp = rnp+2;
    }

$('body:not(.rtl) .device-menu-wrap').css('padding-right',rnp+'px');
$('body.rtl .device-menu-wrap').css('padding-left',rnp+'px');

// scrolling box
$(window).resize(function() {
  if ($(window).width() < 670) {
	$('.scrolling-box .sb-item .sb-item-img').each( function(e) {
	    var img = $(this).find('img');
	    img.attr('src', img.data('hidpi'));
	});
  }
    if ($(window).width() < 480) {
	$('.recent-news .news-image, .news-list .news-image, .blog-post .bp-details .post-img').each( function(e) {
	    var img = $(this).find('img');
	    var attr = img.attr('data-hidpi');
	    if (typeof attr !== 'undefined' && attr !== false) {
		img.attr('src', img.data('hidpi'));
	    }
	});
  }
});
  if ($(window).width() < 670) {
	$('.scrolling-box .sb-item .sb-item-img').each( function(e) {
	    var img = $(this).find('img');
	    img.attr('src', img.data('hidpi'));
	});
  } 
  if ($(window).width() < 480) {
	$('.recent-news .news-image, .news-list .news-image, .blog-post .bp-details .post-img').each( function(e) {
	    var img = $(this).find('img');
	    var attr = img.attr('data-hidpi');
	    if (typeof attr !== 'undefined' && attr !== false) {
		img.attr('src', img.data('hidpi'));
	    }
	});
  }
  //buddypress
  $('.widget select, select#notifications-sort-order-list, select#members-friends, select#groups-sort-by, #members-order-by, #message-type-select, #activity-filter-by').wrap('<div class="mom-select"></div>');
    $('#buddypress div#object-nav.item-list-tabs ul li.last.filter').prev().addClass('mom_last_child');
    
    //top banner
    $('.top_banner').show();
    $('a.tob_banner_close').on('click', function(e) {
	    $('.top_banner').slideUp(400);
	    var exp = $(this).date('exp');
	    if (exp === '') {
		exp = 7;
	    }
	    if (typeof($.cookie) == "function") {
		$.cookie('tb_clase', 'yes', { expires: exp, path: '/' });
	    }
	e.preventDefault();
    });

    if (typeof($.cookie) == "function") {
	/* if (!$('a.tob_banner_close').hasClass('tb_save_close')) {
	    $('body').css('background', 'green');
	    $.cookie("tb_clase", null);
	    $.removeCookie('tb_clase');
	}*/
	if ($.cookie('tb_clase') === 'yes') {
	    $('.top_banner').hide();
	}
    }
    

//alert($.cookie('tb_clase'));

	 $('.mom_mega_cats .cats-mega-inner > ul > li').on('mouseenter', function(e) {
	    e.preventDefault();
	    var t = $(this);
	    var tid = t.attr('id');
	    tid = tid.split('-');
	    tid = tid[2];
	    var d = t.parent().next('.subcat').find('#mn-latest-'+tid);
	    var dest = t.parent().next('.subcat').find('#mn-latest-'+tid+' > ul');
	    var id = d.data('id');
	    var object = d.data('object');
	    var layout = d.data('layout');
	    if (dest.children().length === 0) {
			jQuery.ajax({
			    type: "post",
			    url: momAjaxL.url,
			    dataType: 'html',
			    data: "action=mmcl&nonce="+momAjaxL.nonce+"&id="+id+"&object="+object+"&layout="+layout,
			    beforeSend: function() {
					dest.addClass('loading');
			    },
			    success: function(data){
				dest.removeClass('loading');
				dest.html(data);
			    }
			});
    	    }
	});

/*------------------------------------------------
			Feature Slider
-------------------------------------------------*/
if ($('.feature-slider').length) {
	$('.feature-slider').each(function() {
		var t = $(this);
		if (!t.hasClass('gallery-post-slider')) {
		var animation = t.data('sanimation');
		var speed = t.data('speed');
		var timeout = t.data('timeout');
		var easing = t.data('easing');
		var rndn = t.data('rndn');
		t.find('.fs-image-nav li').each(function(i) {
				$(this).addClass( 'item'+i );
				$(this).click(function() {
					t.find('.fslides').trigger( 'slideTo', [i, 0, true] );
				return false;
				});
			});
			t.find('.fs-image-nav li.item0').addClass( 'active' );
		
			var carou_items = 6;
			if ($(window).width() < 768) {
					carou_items = 5;
			}
			if ($(window).width() < 568) {
					carou_items = 4;
			}

			if ($(window).width() < 480 ) {
					carou_items = 2;
			}

			t.find('.fslides').carouFredSel({
					circular: true,
                                        responsive: true,
					swipe: {
						onTouch: true,
						fx : 'scroll'
					},
					items: 1,
					auto: {
                                             play: true,
                                             duration: speed,
                                             timeoutDuration: timeout,
                                             },
					prev: '.fc-nav-'+rndn+' .fs-prev, .fs-dnav-'+rndn+' span.fsd-prev',
					next: '.fc-nav-'+rndn+' .fs-next, .fs-dnav-'+rndn+' span.fsd-next',
					pagination: '.fs-nav-'+rndn,
					scroll: {
						fx: animation,
                                                  duration : speed,
                                                easing  : easing,
						pauseOnHover : true,
                                        	onBefore: function() {
							var pos = $(this).triggerHandler( 'currentPosition' );
							$('.fc-nav-'+rndn+' li').removeClass( 'active' );
							$('.fc-nav-'+rndn+' li.item'+pos).addClass( 'active' );
							var page = Math.floor( pos / carou_items );
							$('.fc-nav-'+rndn+' ul').trigger( 'slideToPage', page );

						},
						onAfter: function() {
						}

					}
			});

			t.find('.fs-image-nav ul').carouFredSel({
						auto: false,
						circular:true,
                                        responsive: true,
						swipe: {
							onTouch: true
						},
						items: carou_items,
						scroll: {
							items:carou_items,
						}
			});

		}

	});
}

}); // end of the file

// ad clicks
jQuery(document).ready(function($) {

	jQuery(".mom-e3lan").click( function(e){
		t = jQuery(this);
		id = t.data('id');
			jQuery.ajax({
			    type: "post",
			    url: momAjaxL.url,
			    dataType: 'html',
			    data: "action=mom_mom_adclicks&nonce="+momAjaxL.nonce+"&id="+id,
			    beforeSend: function() {},
			    success: function(){}
			});
	});
});


// Momizat User rate
jQuery(document).ready(function(e){e(".mom_user_rate").mousemove(function(t){var r=e(this).data("style"),s=e(this).offset(),a=t.pageX-s.left;if(t.pageY-s.top,!e(this).hasClass("rated")){var o=a/parseFloat(e(this).width())*100;i=Math.round(o),i>100&&(i=100),n=(i/20).toFixed(1),"bars"===r?(e(this).find(".ub-inner").css({width:i+"%"}),e(this).find(".ub-inner").find("span").text(i+"%")):"circles"===r||e(this).children("span").css({width:i+1+"%"}),e(this).hasClass("star-rating")&&e(this).parent().find(".yr").text(n+"/5")}}),e(".mom_user_rate, .mom_user_rate_cr").hover(function(){e(this).hasClass("rated")||(e(".review-footer .mom_user_rate_title").find(".user_rate").hide(),e(".review-footer .mom_user_rate_title").find(".your_rate").show())},function(){e(this).hasClass("rated")||(e(".mom_user_rate_title").find(".user_rate").show(),e(".mom_user_rate_title").find(".your_rate").hide())}),e(".mom_user_rate").click(function(){stars=jQuery(this),post_id=stars.data("post_id"),style=stars.data("style"),score=0,"stars"===style&&(score=parseFloat(stars.children("span").width())/parseFloat(e(this).width())*100),"bars"===style&&(score=parseFloat(stars.children(".ub-inner").width())/parseFloat(e(this).width())*100),score=Math.round(score),vc=stars.data("votes_count"),e(this).hasClass("rated")||jQuery.ajax({type:"post",url:momAjaxL.url,data:"action=user-rate&nonce="+momAjaxL.nonce+"&user_rate=&post_id="+post_id+"&user_rate_score="+score,success:function(t){"already"!=t&&(stars.addClass("rated"),e(".review-footer .mom_user_rate_title").find(".user_rate").hide(),e(".review-footer .mom_user_rate_title").find(".your_rate").show(),e(".review-footer .total-votes").find(".tv-count").text(vc+1))}})}),e(".mom-reveiw-system").length&&e(".urc-value").knob({displayInput:!1,change:function(t){e(".user-rate-circle").find(".cru-num").text(t)},release:function(t){circle=jQuery(".user-rate-circle .mom_user_rate_cr"),post_id=circle.data("post_id"),style=circle.data("style"),score=t,vc=circle.data("votes_count"),jQuery.ajax({type:"post",url:momAjaxL.url,data:"action=user-rate&nonce="+momAjaxL.nonce+"&user_rate=&post_id="+post_id+"&user_rate_score="+score,success:function(t){"already"!=t&&(circle.addClass("rated"),e(".review-footer .mom_user_rate_title").find(".user_rate").hide(),e(".review-footer .mom_user_rate_title").find(".your_rate").show(),e(".review-footer .total-votes").find(".tv-count").text(vc+1))}})}})});


// Momizat ajax
jQuery(document).ready(function(){jQuery(".mom-search-form input.sf").on("keyup",function(){return sf=jQuery(this),term=sf.val(),term.length>2?setTimeout(function(){jQuery.ajax({type:"post",url:momAjaxL.url,dataType:"html",data:"action=mom_ajaxsearch&nonce="+momAjaxL.nonce+"&term="+term,beforeSend:function(){sf.parent().parent().find(".sf-loading").fadeIn()},success:function(e){""!==sf.val()?(sf.parent().parent().next(".ajax_search_results").html(e),""!==e?sf.parent().parent().next(".ajax_search_results").append('<footer class="show_all_results"><a href="'+momAjaxL.homeUrl+"/?s="+term+'">'+momAjaxL.viewAll+'<i class="fa-icon-long-arrow-right"></i></a></footer>'):(sf.parent().parent().next(".ajax_search_results").find("show_all_results").remove(),sf.parent().parent().next(".ajax_search_results").html('<span class="sw-not_found">'+momAjaxL.noResults+"</span>"))):sf.parent().parent().next(".ajax_search_results").html(""),sf.parent().parent().find(".sf-loading").fadeOut()}})},300):setTimeout(function(){jQuery.ajax({type:"post",url:momAjaxL.url,dataType:"html",data:"action=mom_ajaxsearch&nonce="+momAjaxL.nonce+"&term="+term,success:function(){""===sf.val()&&sf.parent().parent().next(".ajax_search_results").html("")}})},300),!1})}),jQuery(document).ready(function(e){offset="",jQuery("a.show-more-posts").click(function(a){a.preventDefault();var t=e(this);style=t.data("style"),share=t.data("share"),count=t.data("count"),offset=t.data("offset"),display=t.data("display"),category=t.data("category"),tag=t.data("tag"),sort=t.data("sort"),orderby=t.data("orderby"),format=t.data("format"),excerpt_length=t.data("excerpt_length"),load_more_count=t.data("load_more_count"),jQuery.ajax({type:"post",url:momAjaxL.url,dataType:"html",data:"action=mom_loadMore&nonce="+momAjaxL.nonce+"&display="+display+"&category="+category+"&tag="+tag+"&number_of_posts="+count+"&sort="+sort+"&orderby="+orderby+"&offset="+offset+"&format="+format+"&excerpt_length="+excerpt_length+"&style="+style+"&share="+share+"&load_more_count="+load_more_count,beforeSend:function(){t.find("i").addClass("fa-spin")},success:function(e){t.before(e),t.find("i").removeClass("fa-spin"),""===e&&t.text(momAjaxL.nomore)}}),t.data("offset",offset+load_more_count),console.log(offset)})}),jQuery(document).ready(function(e){jQuery(".mom_mailchimp_subscribe").submit(function(){return sf=jQuery(this),email=sf.find(".mms-email").val(),list=sf.data("list_id"),e(".message-box").fadeOut(),""===email?sf.before('<span class="message-box error">'+momAjaxL.error2+'<i class="brankic-icon-error"></i></span>'):mom_isValidEmailAddress(email)?jQuery.ajax({type:"post",url:momAjaxL.url,dataType:"html",data:"action=mom_mailchimp&nonce="+momAjaxL.nonce+"&email="+email+"&list_id="+list,beforeSend:function(){sf.find(".sf-loading").fadeIn()},success:function(a){"success"===a?(sf.find(".email").val(""),sf.before('<span class="message-box success">'+momAjaxL.success+'<i class="brankic-icon-error"></i></span>').hide().fadeIn()):sf.before('<span class="message-box error">'+momAjaxL.error+'<i class="brankic-icon-error"></i></span>').hide().fadeIn(),sf.find(".sf-loading").fadeOut(),e(".message-box i").on("click",function(){e(this).parent().fadeOut()})}}):sf.before('<span class="message-box error">'+momAjaxL.error2+'<i class="brankic-icon-error"></i></span>'),!1})}),jQuery(document).ready(function(){offset="",offset_rest="",jQuery(".nb-footer a.show-more-ajax").click(function(e){e.preventDefault(),bt=jQuery(this),where=bt.parent().prev(),nbs=bt.data("nbs"),nop=bt.data("number_of_posts"),offset=bt.data("offset"),offset_rest=offset+1,post_type=bt.data("post_type"),display=bt.data("display"),category=bt.data("category"),tag=bt.data("tag"),sort=bt.data("sort"),orderby=bt.data("orderby"),format="",image_size="",excerpt_length="","news_list"===nbs&&(format=bt.data("format"),image_size=bt.data("image_size"),excerpt_length=bt.data("excerpt_length")),jQuery.ajax({type:"post",url:momAjaxL.url,dataType:"html",data:"action=nbsm&nonce="+momAjaxL.nonce+"&display="+display+"&category="+category+"&tag="+tag+"&nbs="+nbs+"&number_of_posts="+nop+"&sort="+sort+"&orderby="+orderby+"&offset="+offset+"&offset_all="+offset_rest+"&format="+format+"&image_size="+image_size+"&excerpt_length="+excerpt_length+"&post_type="+post_type,beforeSend:function(){where.append('<i class="nb-load"></i>')},success:function(e){""==e&&bt.parent().append('<a class="nomoreposts">'+momAjaxL.nomore+"</a>").hide().fadeIn(),""!==e&&where.html(e),where.find(".nb-load").remove()},complete:function(){}}),bt.data("offset",offset+(nop+1))})}),jQuery(document).ready(function(e){jQuery(".weather-form").submit(function(){return form=jQuery(this),city=form.find("input").val(),lang=form.find("input").data("lang"),units=form.find("input").data("units"),jQuery.ajax({type:"post",url:momAjaxL.url,dataType:"html",data:"action=mom_ajaxweather&nonce="+momAjaxL.nonce+"&city="+city+"&lang="+lang+"&units="+units,beforeSend:function(){form.find(".sf-loading").fadeIn()},success:function(a){""!==city&&(""!==a?(form.nextAll(".weather-widget").html(a).hide().fadeIn(),form.next(".message-box").fadeOut()):(form.next(".message-box").remove(),form.after('<span class="message-box error">'+momAjaxL.werror+'<i class="brankic-icon-error"></i></span>'))),form.find(".sf-loading").fadeOut(),e(".message-box i").on("click",function(){e(this).parent().fadeOut()})}}),!1})});

// email valid
function mom_isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

//Sharrr
;(function(g,i,j,b){var h="sharrre",f={className:"sharrre",share:{googlePlus:false,facebook:false,twitter:false,digg:false,delicious:false,stumbleupon:false,linkedin:false,pinterest:false},shareTotal:0,template:"",title:"",url:j.location.href,text:j.title,urlCurl:"sharrre.php",count:{},total:0,shorterTotal:true,enableHover:true,enableCounter:true,enableTracking:false,hover:function(){},hide:function(){},click:function(){},render:function(){},buttons:{googlePlus:{url:"",urlCount:false,size:"medium",lang:"en-US",annotation:""},facebook:{url:"",urlCount:false,action:"like",layout:"button_count",width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US"},twitter:{url:"",urlCount:false,count:"horizontal",hashtags:"",via:"",related:"",lang:"en"},digg:{url:"",urlCount:false,type:"DiggCompact"},delicious:{url:"",urlCount:false,size:"medium"},stumbleupon:{url:"",urlCount:false,layout:"1"},linkedin:{url:"",urlCount:false,counter:""},pinterest:{url:"",media:"",description:"",layout:"horizontal"}}},c={googlePlus:"",facebook:"https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",twitter:"http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",digg:"http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",delicious:"http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",stumbleupon:"",linkedin:"http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",pinterest:"http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"},l={googlePlus:function(m){var n=m.options.buttons.googlePlus;g(m.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+n.size+'" data-href="'+(n.url!==""?n.url:m.options.url)+'" data-annotation="'+n.annotation+'"></div></div>');i.___gcfg={lang:m.options.buttons.googlePlus.lang};var o=0;if(typeof gapi==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//apis.google.com/js/plusone.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})()}else{gapi.plusone.go()}},facebook:function(m){var n=m.options.buttons.facebook;g(m.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="'+(n.url!==""?n.url:m.options.url)+'" data-send="'+n.send+'" data-layout="'+n.layout+'" data-width="'+n.width+'" data-show-faces="'+n.faces+'" data-action="'+n.action+'" data-colorscheme="'+n.colorscheme+'" data-font="'+n.font+'" data-via="'+n.via+'"></div></div>');var o=0;if(typeof FB==="undefined"&&o==0){o=1;(function(t,p,u){var r,q=t.getElementsByTagName(p)[0];if(t.getElementById(u)){return}r=t.createElement(p);r.id=u;r.src="//connect.facebook.net/"+n.lang+"/all.js#xfbml=1";q.parentNode.insertBefore(r,q)}(j,"script","facebook-jssdk"))}else{FB.XFBML.parse()}},twitter:function(m){var n=m.options.buttons.twitter;g(m.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+(n.url!==""?n.url:m.options.url)+'" data-count="'+n.count+'" data-text="'+m.options.text+'" data-via="'+n.via+'" data-hashtags="'+n.hashtags+'" data-related="'+n.related+'" data-lang="'+n.lang+'">Tweet</a></div>');var o=0;if(typeof twttr==="undefined"&&o==0){o=1;(function(){var q=j.createElement("script");q.type="text/javascript";q.async=true;q.src="//platform.twitter.com/widgets.js";var p=j.getElementsByTagName("script")[0];p.parentNode.insertBefore(q,p)})()}else{g.ajax({url:"//platform.twitter.com/widgets.js",dataType:"script",cache:true})}},digg:function(m){var n=m.options.buttons.digg;g(m.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+n.type+'" rel="nofollow external" href="http://digg.com/submit?url='+encodeURIComponent((n.url!==""?n.url:m.options.url))+'"></a></div>');var o=0;if(typeof __DBW==="undefined"&&o==0){o=1;(function(){var q=j.createElement("SCRIPT"),p=j.getElementsByTagName("SCRIPT")[0];q.type="text/javascript";q.async=true;q.src="//widgets.digg.com/buttons.js";p.parentNode.insertBefore(q,p)})()}},delicious:function(o){if(o.options.buttons.delicious.size=="tall"){var p="width:50px;",n="height:35px;width:50px;font-size:15px;line-height:35px;",m="height:18px;line-height:18px;margin-top:3px;"}else{var p="width:93px;",n="float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",m="float:left;height:20px;line-height:20px;"}var q=o.shorterTotal(o.options.count.delicious);if(typeof q==="undefined"){q=0}g(o.element).find(".buttons").append('<div class="button delicious"><div style="'+p+'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="'+n+'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">'+q+'</div><div style="'+m+'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>');g(o.element).find(".delicious").on("click",function(){o.openPopup("delicious")})},stumbleupon:function(m){var n=m.options.buttons.stumbleupon;g(m.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="'+n.layout+'" location="'+(n.url!==""?n.url:m.options.url)+'"></su:badge></div>');var o=0;if(typeof STMBLPN==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//platform.stumbleupon.com/1/widgets.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})();s=i.setTimeout(function(){if(typeof STMBLPN!=="undefined"){STMBLPN.processWidgets();clearInterval(s)}},500)}else{STMBLPN.processWidgets()}},linkedin:function(m){var n=m.options.buttons.linkedin;g(m.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="'+(n.url!==""?n.url:m.options.url)+'" data-counter="'+n.counter+'"><\/script></div>');var o=0;if(typeof i.IN==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//platform.linkedin.com/in.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})()}else{i.IN.init()}},pinterest:function(m){var n=m.options.buttons.pinterest;g(m.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url='+(n.url!==""?n.url:m.options.url)+"&media="+n.media+"&description="+n.description+'" class="pin-it-button" count-layout="'+n.layout+'">Pin It</a></div>');(function(){var o=j.createElement("script");o.type="text/javascript";o.async=true;o.src="//assets.pinterest.com/js/pinit.js";var p=j.getElementsByTagName("script")[0];p.parentNode.insertBefore(o,p)})()}},d={googlePlus:function(){},facebook:function(){fb=i.setInterval(function(){if(typeof FB!=="undefined"){FB.Event.subscribe("edge.create",function(m){_gaq.push(["_trackSocial","facebook","like",m])});FB.Event.subscribe("edge.remove",function(m){_gaq.push(["_trackSocial","facebook","unlike",m])});FB.Event.subscribe("message.send",function(m){_gaq.push(["_trackSocial","facebook","send",m])});clearInterval(fb)}},1000)},twitter:function(){tw=i.setInterval(function(){if(typeof twttr!=="undefined"){twttr.events.bind("tweet",function(m){if(m){_gaq.push(["_trackSocial","twitter","tweet"])}});clearInterval(tw)}},1000)},digg:function(){},delicious:function(){},stumbleupon:function(){},linkedin:function(){function m(){_gaq.push(["_trackSocial","linkedin","share"])}},pinterest:function(){}},a={googlePlus:function(m){i.open("https://plus.google.com/share?hl="+m.buttons.googlePlus.lang+"&url="+encodeURIComponent((m.buttons.googlePlus.url!==""?m.buttons.googlePlus.url:m.url)),"","toolbar=0, status=0, width=900, height=500")},facebook:function(m){i.open("http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent((m.buttons.facebook.url!==""?m.buttons.facebook.url:m.url))+"&t="+m.text+"","","toolbar=0, status=0, width=900, height=500")},twitter:function(m){i.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(m.text)+"&url="+encodeURIComponent((m.buttons.twitter.url!==""?m.buttons.twitter.url:m.url))+(m.buttons.twitter.via!==""?"&via="+m.buttons.twitter.via:""),"","toolbar=0, status=0, width=650, height=360")},digg:function(m){i.open("http://digg.com/tools/diggthis/submit?url="+encodeURIComponent((m.buttons.digg.url!==""?m.buttons.digg.url:m.url))+"&title="+m.text+"&related=true&style=true","","toolbar=0, status=0, width=650, height=360")},delicious:function(m){i.open("http://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url))+"&title="+m.text,"delicious","toolbar=no,width=550,height=550")},stumbleupon:function(m){i.open("http://www.stumbleupon.com/badge/?url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url)),"stumbleupon","toolbar=no,width=550,height=550")},linkedin:function(m){i.open("https://www.linkedin.com/cws/share?url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url))+"&token=&isFramed=true","linkedin","toolbar=no,width=550,height=550")},pinterest:function(m){i.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent((m.buttons.pinterest.url!==""?m.buttons.pinterest.url:m.url))+"&media="+encodeURIComponent(m.buttons.pinterest.media)+"&description="+m.buttons.pinterest.description,"pinterest","toolbar=no,width=700,height=300")}};function k(n,m){this.element=n;this.options=g.extend(true,{},f,m);this.options.share=m.share;this._defaults=f;this._name=h;this.init()}k.prototype.init=function(){var m=this;if(this.options.urlCurl!==""){c.googlePlus=this.options.urlCurl+"?url={url}&type=googlePlus";c.stumbleupon=this.options.urlCurl+"?url={url}&type=stumbleupon"}g(this.element).addClass(this.options.className);if(typeof g(this.element).data("title")!=="undefined"){this.options.title=g(this.element).attr("data-title")}if(typeof g(this.element).data("url")!=="undefined"){this.options.url=g(this.element).data("url")}if(typeof g(this.element).data("text")!=="undefined"){this.options.text=g(this.element).data("text")}g.each(this.options.share,function(n,o){if(o===true){m.options.shareTotal++}});if(m.options.enableCounter===true){g.each(this.options.share,function(n,p){if(p===true){try{m.getSocialJson(n)}catch(o){}}})}else{if(m.options.template!==""){this.options.render(this,this.options)}else{this.loadButtons()}}g(this.element).hover(function(){if(g(this).find(".buttons").length===0&&m.options.enableHover===true){m.loadButtons()}m.options.hover(m,m.options)},function(){m.options.hide(m,m.options)});g(this.element).click(function(){m.options.click(m,m.options);return false})};k.prototype.loadButtons=function(){var m=this;g(this.element).append('<div class="buttons"></div>');g.each(m.options.share,function(n,o){if(o==true){l[n](m);if(m.options.enableTracking===true){d[n]()}}})};k.prototype.getSocialJson=function(o){var m=this,p=0,n=c[o].replace("{url}",encodeURIComponent(this.options.url));if(this.options.buttons[o].urlCount===true&&this.options.buttons[o].url!==""){n=c[o].replace("{url}",this.options.buttons[o].url)}if(n!=""&&m.options.urlCurl!==""){g.getJSON(n,function(r){if(typeof r.count!=="undefined"){var q=r.count+"";q=q.replace("\u00c2\u00a0","");p+=parseInt(q,10)}else{if(r.data&&r.data.length>0&&typeof r.data[0].total_count!=="undefined"){p+=parseInt(r.data[0].total_count,10)}else{if(typeof r[0]!=="undefined"){p+=parseInt(r[0].total_posts,10)}else{if(typeof r[0]!=="undefined"){}}}}m.options.count[o]=p;m.options.total+=p;m.renderer();m.rendererPerso()}).error(function(){m.options.count[o]=0;m.rendererPerso()})}else{m.renderer();m.options.count[o]=0;m.rendererPerso()}};k.prototype.rendererPerso=function(){var m=0;for(e in this.options.count){m++}if(m===this.options.shareTotal){this.options.render(this,this.options)}};k.prototype.renderer=function(){var n=this.options.total,m=this.options.template;if(this.options.shorterTotal===true){n=this.shorterTotal(n)}if(m!==""){m=m.replace("{total}",n);g(this.element).html(m)}else{g(this.element).html('<div class="box"><a class="count" href="#">'+n+"</a>"+(this.options.title!==""?'<a class="share" href="#">'+this.options.title+"</a>":"")+"</div>")}};k.prototype.shorterTotal=function(m){if(m>=1000000){m=(m/1000000).toFixed(2)+"M"}else{if(m>=1000){m=(m/1000).toFixed(1)+"k"}}return m};k.prototype.openPopup=function(m){a[m](this.options);if(this.options.enableTracking===true){var n={googlePlus:{site:"Google",action:"+1"},facebook:{site:"facebook",action:"like"},twitter:{site:"twitter",action:"tweet"},digg:{site:"digg",action:"add"},delicious:{site:"delicious",action:"add"},stumbleupon:{site:"stumbleupon",action:"add"},linkedin:{site:"linkedin",action:"share"},pinterest:{site:"pinterest",action:"pin"}};_gaq.push(["_trackSocial",n[m].site,n[m].action])}};k.prototype.simulateClick=function(){var m=g(this.element).html();g(this.element).html(m.replace(this.options.total,this.options.total+1))};k.prototype.update=function(m,n){if(m!==""){this.options.url=m}if(n!==""){this.options.text=n}};g.fn[h]=function(n){var m=arguments;if(n===b||typeof n==="object"){return this.each(function(){if(!g.data(this,"plugin_"+h)){g.data(this,"plugin_"+h,new k(this,n))}})}else{if(typeof n==="string"&&n[0]!=="_"&&n!=="init"){return this.each(function(){var o=g.data(this,"plugin_"+h);if(o instanceof k&&typeof o[n]==="function"){o[n].apply(o,Array.prototype.slice.call(m,1))}})}}}})(jQuery,window,document);

