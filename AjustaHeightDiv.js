/**
 * Deixa a altura das DIV's iguais
 */
(function( $ ){

	$.fn.adjustHeightDiv = function(options) {


		var defaults = {
          finalHeight : 0
        };
 
        var settings = $.extend( {}, defaults, options );


		this.each(function(i,compare) {
			
			if($(compare).outerHeight(true) > settings.finalHeight){
				
				settings.finalHeight = $(compare).outerHeight(true);
			}

		});
		
		return this.each(function(i,change) {
			$(change).height(settings.finalHeight);
		});

	};

})( jQuery );

