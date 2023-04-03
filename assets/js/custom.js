(function($) {


    /*----------------------- Main Menu Apper --------------------------*/

    jQuery(window).on('scroll', function (){

    	
      var firstMenuHeight = 120;
      var secondMenuHeight = 600;
     
     	/*
      var findAclassHas = $('#hero-banner');
      if( findAclassHas.hasClass('hero-banner') ){
        var firstMenuHeight = $('.hero-banner').height() + 120; 
        var secondMenuHeight = firstMenuHeight;
      }
  	
      if (jQuery(window).scrollTop() > firstMenuHeight ){
        jQuery('#top-menu-container').addClass('inimenu');
      } else {
        jQuery('#top-menu-container').removeClass('inimenu');
      } 
  	*/
      if (jQuery(window).scrollTop() > secondMenuHeight ){
        jQuery('#top-menu-container').removeClass('inimenu');
        jQuery('#top-menu-container').addClass('menu');
      } else {
        jQuery('#top-menu-container').removeClass('menu');
         jQuery('#top-menu-container').addClass('inimenu');
      } 
  	


    });
  })(jQuery);