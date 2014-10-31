/*
 * Responsive Tables
 * http://kthornbloom.com/responsivetables.php
 *
 * Copyright 2013, Kevin Thornbloom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
    $.fn.extend({
        responsiveTables: function () {

             // Add wrapper to tables, this helps us know if they're getting too big
            $('.rwd-table').wrap('<div class="rt-wrap"></div>');

            // Check if table is too big for viewport. 
            function tableChecker() {
                $(".rwd-table").each(function () {
                        // wrapper width (page width)
                    var wrapWidth1 = parseInt($(this).parent().width(), 10),
                        // table width
                        tableWidth = parseInt($(this).outerWidth(), 10),
                        // If we've already gone mobile, let's save the breakpoint at which it happened
                        breakpoint = $(this).parent().find('.rt-breakpoint').html();

                    // Table is too big!
                    if (wrapWidth1 < tableWidth) {
                        $(this).parent().prepend("<div class='rt-breakpoint'>"+tableWidth+"</div>");
                        $(this).find('td, th, tr').css({
                            'display': 'block',
                            'padding': '5px',
                            'text-align': 'left',
                            'white-space': 'normal'
                        });
                        $(this).find('tr').css({                            
                            'background':'none',
                            'margin-bottom': '20px',
                            'padding':'0'
                        });
                        $(this).find('thead').css('display','none');
                        $(this).find('td, th').addClass('cellResize');
                    // Ok, there's enough room for the table again. Let's put it back.
                    } else if (breakpoint < tableWidth) {
                        $(this).find('td, th, tr').css({
                            'display': '',
                            'padding': '',
                            'text-align': '',
                            'white-space': '',
                            'background':'',
                            'padding':'',
                            'margin':''
                        });
                        $(this).find('thead').css('display','');
                        $(this).find('.cellResize').removeClass();
                        $(this).parent().find('.rt-breakpoint').remove();
                    }
                });
            }

            // Call on page load and page resize
            tableChecker();

            (function($,sr){
              var debounce = function (func, threshold, execAsap) {
                  var timeout;

                  return function debounced () {
                      var obj = this, args = arguments;
                      function delayed () {
                          if (!execAsap)
                              func.apply(obj, args);
                          timeout = null;
                      };

                      if (timeout)
                          clearTimeout(timeout);
                      else if (execAsap)
                          func.apply(obj, args);

                      timeout = setTimeout(delayed, threshold || 100);
                  };
              }
              // smartresize 
              jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

            })(jQuery,'smartresize');


            // On resize (with delay)
            $(window).smartresize(function(){
              tableChecker();
            });


        }
    });
})(jQuery);