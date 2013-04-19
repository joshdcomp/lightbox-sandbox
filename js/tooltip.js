/*
    Tooltip.js
    ----------------------------------------------------------------------------
    Given an element with .tooltip and [data-tooltip-title], append a 
        p.tooltip_element text(data('tooltip-title'))
        
    There will be an optional class indicating the direction of the tooltip's 
        arrow. Values for this can be top, right, bottom, or left (this is the
        position of the tooltip). By default, the tooltip will be positioned 
        with top. Stay tuned
    
    An example element
    <a href="#_" class="tooltip" data-tooltip-title="Stay tuned, logs coming soon!">View&nbsp;Log&nbsp;&raquo;</a>
*/
//init the tooltip
$(document).ready(function(){
    //init tooltips
    tooltip.init();
});



var tooltip = {
    tooltipOpen: false,
    init: function(){
        var self = this;
        //define our element
        var tooltipContainer = $('.tooltip');
        //define the text we'll use for the tooltip
        var tooltipTitle = $(tooltipContainer).data('tooltip-title');
        //create a span.tooltip_element, shove it inside the parent element
        $('<span style="display: none;" class="tooltip_element">'+ tooltipTitle +'</span>').appendTo(tooltipContainer);
        //now that we've created the tooltip span, let's add some event handlers
        $('.tooltip').on('click', function(e){
            tooltip.show(e);
            //don't let the document see this event
            event.stopPropagation()
        });

        //we decided that the tooltip should be initialized onClick rather than hover
        $(document).on('click', function(e){
            
            if( self.tooltipOpen == true){
                self.tooltipOpen = false;
                tooltip.hide();
            } 
        });
    },//show
    //show the tooltip
    show: function(e){
        var self = this;
        
        var tooltipElement = $(e.target).children('.tooltip_element');        
        tooltipElement.fadeIn(100);
        self.tooltipOpen = true;
    },//show
    //hide it
    hide: function(){
    //ha, this isn't being used right now, but we'll keep it around for when bruce banner is no longer necessary
        //let the tooltip eat cake
        $('.tooltip_element').fadeOut(100);
        self.tooltipOpen = false;
        
        //reset the tooltip
        $('.tooltip').off();
        
        $('.tooltip').on('click', function(e){
            tooltip.show(e);
        });
    }//hide
}; //tooltip