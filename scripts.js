$(document).ready(function($){
	/* chevron icon activated menu */
	$('.imm_heading').click(function () { // when a heading is clicked
		// if the clicked on item was selected already, close the menu
		if ($(this).hasClass('selected')) {
			$(this).removeClass("selected"); // display popup
			$(this).next(".imm_submenu").slideUp(100); // open the submenu for the heading
	        $(this).find('h1 .imm_arrow').removeClass('fa-chevron-circle-down');
	        $(this).find('h2 .imm_arrow').removeClass('fa-chevron-circle-down');
	        $(this).find('h1 .imm_arrow').addClass('fa-chevron-circle-right');
	        $(this).find('h2 .imm_arrow').addClass('fa-chevron-circle-right');
		} else {
			$(this).addClass("selected"); // display popup
			$(this).next(".imm_submenu").slideDown(100); // open the submenu for the heading
	        $(this).find('h1 .imm_arrow').removeClass('fa-chevron-circle-right');
	        $(this).find('h2 .imm_arrow').removeClass('fa-chevron-circle-right');
	        $(this).find('h1 .imm_arrow').addClass('fa-chevron-circle-down');
	        $(this).find('h2 .imm_arrow').addClass('fa-chevron-circle-down');
		}
    });
	
	/* chevron graphic activated menu */
	$('.imm_heading_graphic').click(function () { // when a heading is clicked
		// if the clicked on item was selected already, close the menu
		if ($(this).hasClass('selected')) {
			$(this).removeClass("selected"); // display popup
			$(this).next(".imm_submenu").slideUp(100); // open the submenu for the heading
	        $(this).find('h1 .imm_arrow_graphic').removeClass('imm_arrow-down');
	        $(this).find('h2 .imm_arrow_graphic').removeClass('imm_arrow-down-border');
	        $(this).find('h1 .imm_arrow_graphic').addClass('imm_arrow-right');
	        $(this).find('h2 .imm_arrow_graphic').addClass('imm_arrow-right-border');
		} else {
			$(this).addClass("selected"); // display popup
			$(this).next(".imm_submenu").slideDown(100); // open the submenu for the heading
	        $(this).find('h1 .imm_arrow_graphic').removeClass('imm_arrow-right');
	        $(this).find('h2 .imm_arrow_graphic').removeClass('imm_arrow-right-border');
	        $(this).find('h1 .imm_arrow_graphic').addClass('imm_arrow-down');
	        $(this).find('h2 .imm_arrow_graphic').addClass('imm_arrow-down-border');
		}
    });
	
	/*arrow list hover */
	$( ".imm_submenu ul li a" ).hover(
			  function() {
			    $( this ).parent().addClass('arrow_list_hover');
			  }, function() {
			    $( this ).parent().removeClass('arrow_list_hover');
			  }
			);
	
	
	/* show 435 chars of text, then more link */
	var showChar = 435;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.collapse_more').each(function() {
		var content = $(this).html();
		if(content.length > showChar) {
			var c = content.substr(0, showChar-1);
			var h = content.substr(showChar-1, content.length - showChar);
			var html = c + '<span class="moreelipses">'+ellipsestext+'</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';
			$(this).html(html);
		}
	});
	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});	
	
	$(".imm_view_all").click(function() {
		if ($('.imm_view_all').text() == "Expand All Menus") {
			$(".imm_submenu").slideDown(100); // open all the submenus
	        $('h1 .imm_arrow_graphic').removeClass('imm_arrow-right');
	        $('h2 .imm_arrow_graphic').removeClass('imm_arrow-right-border');
	        $('h1 .imm_arrow_graphic').addClass('imm_arrow-down');
	        $('h2 .imm_arrow_graphic').addClass('imm_arrow-down-border');
	        $('.imm_view_all').text("Collapse All Menus");
		} else {
			$(".imm_submenu").slideUp(100); // open all the submenus
	        $('h1 .imm_arrow_graphic').removeClass('imm_arrow-down');
	        $('h2 .imm_arrow_graphic').removeClass('imm_arrow-down-border');
	        $('h1 .imm_arrow_graphic').addClass('imm_arrow-right');
	        $('h2 .imm_arrow_graphic').addClass('imm_arrow-right-border');
	        $('.imm_view_all').text("Expand All Menus");
		}
	});

	
	$('#main_menu').slicknav();
	/* get current path and highlight ative link */
	var cpath = document.URL;
	$("a[href='" + cpath + "']").addClass("current"); // try this first -- it will work for absolute URLs
	// most left navs use relative URLs, so the next stuff is needed
	//console.log(cpath);
	cpath = cpath.replace("http://www.eecs.umich.edu", "");
	cpath = cpath.replace("http://wwww.eecs.umich.edu", "");
	cpath = cpath.replace("https://www.eecs.umich.edu", "");
	cpath = cpath.replace("https://wwww.eecs.umich.edu", "");
	cpath = cpath.replace("http://eecs.umich.edu", "");
	cpath = cpath.replace("https://eecs.umich.edu", "");
	cpath = cpath.replace("http://www.ece.umich.edu", "");
	cpath = cpath.replace("http://wwww.ece.umich.edu", "");
	cpath = cpath.replace("https://www.ece.umich.edu", "");
	cpath = cpath.replace("https://wwww.ece.umich.edu", "");
	cpath = cpath.replace("http://ece.umich.edu", "");
	cpath = cpath.replace("https://ece.umich.edu", "");
	cpath = cpath.replace("http://www.cse.umich.edu", "");
	cpath = cpath.replace("http://wwww.cse.umich.edu", "");
	cpath = cpath.replace("https://www.cse.umich.edu", "");
	cpath = cpath.replace("https://wwww.cse.umich.edu", "");
	cpath = cpath.replace("http://cse.umich.edu", "");
	cpath = cpath.replace("https://cse.umich.edu", "");
	//console.log(cpath);
	//var cpath = location.pathname;
	//var qs = window.location.search.substring(1); // get query String
	//if (qs != "") cpath = cpath + "?" + qs;
	//console.log(cpath);
	//cpath = cpath.replace("/eecs/", "");
	$("a[href='" + cpath + "']").addClass("current");
	/* main menu drops */
    $("#main_menu_holder ul li a.parent").click(function (e) { // binding onclick
    	if ($("#mobile_hack").css('display') == "none") {
	    	e.preventDefault();
	    	// slide middle menuup ifits open
	        $("#mid_menu .selected div div").slideUp(100); // hiding popups
	        $("#mid_menu .selected").removeClass("selected");
	        $('.accordion_tag').html("+");
	        if ($(this).parent().hasClass('selected')) {
	            $("#main_menu_holder .selected ul").slideUp(100); // hiding popups
	            $("#main_menu_holder .selected").removeClass("selected");
	        } else {
	            $("#main_menu_holder .selected ul").slideUp(100); // hiding popups
	            $("#main_menu_holder .selected").removeClass("selected");
	            if ($(this).next(".subs").length) {
		        	var id = $(this).parent();
	                $(this).parent().addClass("selected"); // display popup
	                $(this).next("ul").slideDown(200);
	            }
	        }
	        e.stopPropagation();
	    };
    });
    $("body").click(function () { // binding onclick to body
        $("#main_menu_holder .selected ul").slideUp(100); // hiding popups
        $("#main_menu_holder .selected").removeClass("selected");
        $("#mid_menu .selected div div").slideUp(100); // hiding popups
        $("#mid_menu .selected").removeClass("selected");
        $('.accordion_tag').html("+");
    });
    /* research and quicklinks drops */
    $("#mid_menu a.parent").click(function (e) { // binding onclick
    	e.preventDefault();
    	// slide main menuup if mid menu is selected  
        $("#main_menu_holder .selected ul").slideUp(100); // hiding popups
        $("#main_menu_holder .selected").removeClass("selected");
        if ($(this).parent().hasClass('selected')) {
            $(this).find('span.accordion_tag').html("+"); // display popup
            $("#mid_menu .selected div div").slideUp(100); // hiding popups
            $("#mid_menu .selected").removeClass("selected");
        } else {
            $("#mid_menu .selected div div").slideUp(100); // hiding popups
            $("#mid_menu .selected").removeClass("selected");
            if ($(this).next(".subs").length) {
	        	var id = $(this).parent();
                $(this).parent().addClass("selected"); // display popup
                $('.accordion_tag').html("+");
                $(this).find('.accordion_tag').html("&ndash;"); // display popup
                $(this).next(".subs").children().slideDown(200);
            }
        }
        e.stopPropagation();
    });
    /* IE fix for placeholder */ 
	/* clear search field text */
	$('.search_button').focus(function() {
		if ($(this).val() == "Search"){
			$(this).val(""); 
		}
	});
    $(".search_button").blur( function() {
        if ($(this).val()=="") {
            $(this).val('Search');
        } 
    });	/* social icon change */
	$('.video_group div a').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false	  // other options
	});
	$('.you_tube a').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false	  // other options
	});
    $('.you_tube1 a').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false          // other options
        });
	$('a.youtube').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false	  // other options
	});
	$('.popup-link').magnificPopup({ 
		type: 'image'
		// other options
	});
	// change content body max if no right sidebar
	if (!$('#right_sidebar').length){
		//console.log("No RS");
		$('#content_body').addClass('full');
    }
	/* pop-over effect created for data-science */
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
	/* end pop-over effect created for data-science */

    /* READ MORE */
	var read_more = "<span class='exptext_button exptext_more'>Read More</span>"; // html for read more button
	var read_less = "<span class='exptext_button exptext_close'>Close</span>"; // html for close button
	// add read more to each intro section
	$('.exptext_intro').each(function(){
		$(this).append(read_more);
	});
	// add close to each hidden section
	$('.exptext_hidden').each(function(){
		$(this).append(read_less);
	});
	// read more click actions
	$('.exptext_more').click(function() {
		$(this).slideUp(); // hide read more button
		var hidText = $(this).parent().next('.exptext_hidden'); // set var for hidden text
		hidText.slideDown(); // show hidden text
	});
	$('.exptext_close').click(function(event) {
		var hidText = $(this).parent('.exptext_hidden'); // set var for hidden text
		hidText.slideUp(); // slide up to hide text that expands
		var blah = hidText.prev(); // should be intro text
		$(blah).children('.exptext_more').slideDown(); // show read more button again
	});

});

/* BSS SLIDESHOW */
var makeBSS = function (el, options) {
    var $slideshows = document.querySelectorAll(el), // a collection of all of the slideshow
        $slideshow = {},
        Slideshow = {
            init: function (el, options) {
                this.counter = 0; // to keep track of current slide
                this.el = el; // current slideshow container    
                this.$items = el.querySelectorAll('figure'); // a collection of all of the slides, caching for performance
                this.numItems = this.$items.length; // total number of slides
                options = options || {}; // if options object not passed in, then set to empty object 
                options.auto = options.auto || false; // if options.auto object not passed in, then set to false
                this.opts = {
                    auto: (typeof options.auto === "undefined") ? false : options.auto,
                    speed: (typeof options.auto.speed === "undefined") ? 1500 : options.auto.speed,
                    pauseOnHover: (typeof options.auto.pauseOnHover === "undefined") ? false : options.auto.pauseOnHover,
                    fullScreen: (typeof options.fullScreen === "undefined") ? false : options.fullScreen,
                    swipe: (typeof options.swipe === "undefined") ? false : options.swipe
                };
                
                this.$items[0].classList.add('bss-show'); // add show class to first figure 
                this.injectControls(el);
                this.addEventListeners(el);
                if (this.opts.auto) {
                    this.autoCycle(this.el, this.opts.speed, this.opts.pauseOnHover);
                }
                if (this.opts.fullScreen) {
                    this.addFullScreen(this.el);
                }
            },
            showCurrent: function (i) {
                // increment or decrement this.counter depending on whether i === 1 or i === -1
                if (i > 0) {
                    this.counter = (this.counter + 1 === this.numItems) ? 0 : this.counter + 1;
                } else {
                    this.counter = (this.counter - 1 < 0) ? this.numItems - 1 : this.counter - 1;
                }

                // remove .show from whichever element currently has it 
                // http://stackoverflow.com/a/16053538/2006057
                [].forEach.call(this.$items, function (el) {
                    el.classList.remove('bss-show');
                });
  
                // add .show to the one item that's supposed to have it
                this.$items[this.counter].classList.add('bss-show');
            },
            injectControls: function (el) {
            // build and inject prev/next controls
                // first create all the new elements
                var spanPrev = document.createElement("span"),
                    spanNext = document.createElement("span"),
                    docFrag = document.createDocumentFragment();
        
                // add classes
                spanPrev.classList.add('bss-prev');
                spanNext.classList.add('bss-next');
        
                // add contents
                spanPrev.innerHTML = '&laquo;';
                spanNext.innerHTML = '&raquo;';
                
                // append elements to fragment, then append fragment to DOM
                docFrag.appendChild(spanPrev);
                docFrag.appendChild(spanNext);
                el.appendChild(docFrag);
            },
            addEventListeners: function (el) {
                var that = this;
                el.querySelector('.bss-next').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
            
                el.querySelector('.bss-prev').addEventListener('click', function () {
                    that.showCurrent(-1); // decrement & show
                }, false);
                
                el.onkeydown = function (e) {
                    e = e || window.event;
                    if (e.keyCode === 37) {
                        that.showCurrent(-1); // decrement & show
                    } else if (e.keyCode === 39) {
                        that.showCurrent(1); // increment & show
                    }
                };
            },
            autoCycle: function (el, speed, pauseOnHover) {
                var that = this,
                    interval = window.setInterval(function () {
                        that.showCurrent(1); // increment & show
                    }, speed);
                
                if (pauseOnHover) {
                    el.addEventListener('mouseover', function () {
                        interval = clearInterval(interval);
                    }, false);
                    el.addEventListener('mouseout', function () {
                        interval = window.setInterval(function () {
                            that.showCurrent(1); // increment & show
                        }, speed);
                    }, false);
                } // end pauseonhover
                
            },
            addFullScreen: function(el){
                var that = this,
                fsControl = document.createElement("span");
                
                fsControl.classList.add('bss-fullscreen');
                el.appendChild(fsControl);
                el.querySelector('.bss-fullscreen').addEventListener('click', function () {
                    that.toggleFullScreen(el);
                }, false);
            },
            toggleFullScreen: function(el){
                // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
                if (!document.fullscreenElement &&    // alternative standard method
                    !document.mozFullScreenElement && !document.webkitFullscreenElement &&   
                    !document.msFullscreenElement ) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                      el.requestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                      el.msRequestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                      el.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                      el.webkitRequestFullscreen(el.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.exitFullscreen) {
                      document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                      document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                      document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                      document.webkitExitFullscreen();
                    }
                }
            } // end toggleFullScreen
            
        }; // end Slideshow object 
        
    // make instances of Slideshow as needed
    [].forEach.call($slideshows, function (el) {
        $slideshow = Object.create(Slideshow);
        $slideshow.init(el, options);
    });
};
var opts = {
    auto : {
        speed : 5000, 
        pauseOnHover : true
    },
    fullScreen : true, 
    swipe : true
};
makeBSS('.demo1', opts);
/* end BSS slideshow */
