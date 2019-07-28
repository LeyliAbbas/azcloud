/*============================== 
	- MAIN SCRIPT JS
	- Template: Bleurant - Responsive HTML Creative Team and Portfolio Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

/*---------------------- 
	Script Guide
------------------------
01. BROWSER AGENT FUNCTION
	01.1 Check CHROME (Mobile / Tablet)
	01.2 Check IOS
	01.3 Check FIREFOX
	01.4 Check IE (< IE10)
	01.5 Check IE11
	01.6 Check IE11 (Not Windows Phone)
	01.7 Check IE10
	01.8 Check IE9
	01.9 Check Safari/Chrome Mac

02. PRELOAD
	
03. MENU	
	03.1 Menu and Close Icon
	03.2 Menu Active / Current Class
	
04. OWL CAROUSEL

05. BIND TOUCH - FIX HOVER IOS

*/
		
		
(function($) {

'use strict';	
	
	$(document).ready(function() {
		
		// 01. BROWSER AGENT FUNCTION		
		//==================================================================================
		
		// 01.1 Check Chrome (Mobile / Tablet)
		//----------------------------------------------------------------------------------
		var isChromeMobile = function isChromeMobile() {
			if (device.tablet() || device.mobile()) {
				if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0){
					return 1;
				}
			}
		}
		
		// 01.2 Check IOS
		//----------------------------------------------------------------------------------
		var isIOS = function isIOS() {
			if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
				return 1;
			}
		}
		
		// 01.3 Check FIREFOX 
		//----------------------------------------------------------------------------------
		var is_firefox = function is_firefox() {
			if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
				return 1;
			}
		}
		
		// 01.4 Check IE (< IE10)
		//----------------------------------------------------------------------------------
		var isIE = function isIE() {
			if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
				return 1;
			}
		}
		
		// 01.5 Check IE11
		//----------------------------------------------------------------------------------
		var isIE11 = function isIE11() {	
			if (!!navigator.userAgent.match(/Trident\/7\./)) {
				return 1;
			}
		}
		
		// 01.6 Check IE11 (Not Windows Phone)
		///----------------------------------------------------------------------------------
		var isIE11desktop = function isIE11desktop() {	
			if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
				return 1;
			}
		}
		
		// 01.7 Check IE10
		//----------------------------------------------------------------------------------
		var isIE10 = function isIE10() {
			if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
				return 1;
			}
		}
		
		// 01.8 Check IE9
		//----------------------------------------------------------------------------------
		var isIE9 = function isIE9() {
			if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
				return 1;
			}
		}
		
		// 01.9 Check Safari/Chrome Mac
		//----------------------------------------------------------------------------------
		var isSafari = function isSafari() {
			if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
				return 1;
			}
		}
		
	
		
		// 02. PRELOAD
		//=============================================================================================================================================
		//=============================================================================================================================================
		//=============================================================================================================================================
		Pace.on('done', function () {
			$('#page-preloader').fadeOut();
		});
		
		
		// 03. MENU
		//=============================================================================================================================================
		//=============================================================================================================================================
		//=============================================================================================================================================
		
		// 03.1 Menu and Close Icon
		//----------------------------------------------------------------------------------
		$("#menu-icon").on( "click", function(e){
			e.preventDefault();			
			$("#navigation-window").addClass("open animated bounceInRight");
		});	
		
		$("#closemenu").on( "click", function(e){
			e.preventDefault();
			$("#navigation-window").removeClass("animated bounceInRight");
			$("#navigation-window").addClass("animated bounceOutRight")
			
			setTimeout(function(){
  				$("#navigation-window").removeClass("open");
				$("#navigation-window").removeClass("animated bounceOutRight")
			}, 1000);
		});
		
		
		// 03.2 Menu Active / Current Class
		//================================================================================
		var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	
		if (pgurl == "" || pgurl.charAt(0) == "#"){
			$("ul#nav-menu > li:first-child").addClass("current");
		}	
		else{			
			$("ul#nav-menu li a").each(function(){
				var menu_href = $(this).attr("href")
						
				if(window.location.href.indexOf(menu_href) > -1) {
					$(this).parent().addClass("current");
					return false;
				}
				
			})
		}			
		
		
		// 04. OWL CAROUSEL
		//=============================================================================================================================================
		//=============================================================================================================================================
		//=============================================================================================================================================
		if ($(".owl-carousel").length){
		 	$(".owl-carousel").owlCarousel({
				items : 1, 
				itemsDesktop: 1,
				itemsDesktopSmall: 1,
				itemsTablet:1,
				autoPlay: 6000,
				stopOnHover: false,
				pagination: false,
			});
		}
		
		// 05. BIND TOUCH - FIX HOVER IOS
		//=============================================================================================================================================
		//=============================================================================================================================================
		//=============================================================================================================================================
		var photo_item = $('.photo-item');	
			photo_item.on( "touchstart touchend", function(e) {
		});	
		
		var a_link = $('a');	
			a_link.on( "touchstart touchend", function(e) {
		});	
		

	});
	 
})(jQuery);		 