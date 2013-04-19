//I'd usually make things like the lightbox modular, but given its adHoc nature...this does ok

var lightbox = $('#lightbox');
var overlay = $('#overlay');

function decayWidth(element){
    	  //calculate the scrollbar's relative position
  		var scrollTop = $(window).scrollTop(),
  		    winHeight = $(window).height(),
  		    docHeight = $(document).height();
  		    
  		var scrollPercent = (scrollTop) / (docHeight - winHeight)
      		scrollPercent - Math.round(scrollPercent);
		
      //set the bounds of how wide/skinny we want our lightbox to be
  		var initialWidth = 800,
  		    lowerLimit = initialWidth / 3,
  		    lowerLimit = Math.round(lowerLimit),
  		//determine the range between our bounds
  		    range = initialWidth - lowerLimit;
  
      //determine how much the width should have decayed
  		var decayAmount = Math.round( range * scrollPercent );
  		//apply our decay to the width of the lightbox
  		var currentWidth = initialWidth - decayAmount;
		
  		//set our bounds (just to be safe), and the decayed width
  		element.css({
    		maxWidth: initialWidth,
    		minWidth: lowerLimit,
    		width: currentWidth
  		});	
}//decayWidth

function centerLightbox(element){
  element.css({
    left: ( $(window).width() - element.outerWidth() ) / 2 + 'px',
    top: ( $(window).height() - element.outerHeight() ) / 2 + 'px'
  });
}//centerLightbox()

/* trigger when page is ready */
$(document).ready(function() {
  $('.open_lightbox').on('click', function(){
    overlay.fadeIn(100);
    lightbox.fadeIn(100);
  });
  
  $('.close_lightbox').on('click', function(){
    overlay.fadeOut(100);
    lightbox.fadeOut(100);
  });

  $('#overlay').on('click', function(){
    overlay.fadeOut(100);
    lightbox.fadeOut(100);
  });
  
  decayWidth(lightbox); 
  centerLightbox(lightbox);
});

//resize the lightbox as the user manipulates the window
$(window).resize(function(){
  decayWidth(lightbox);
  centerLightbox(lightbox);
});

//decay the width of the lightbox as it scrolls
$(window).scroll(function(){
  decayWidth(lightbox);
  centerLightbox(lightbox);
}); 
