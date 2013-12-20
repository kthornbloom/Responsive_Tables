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
        responsiveTables: function (options) {

            var defaults = {
                borderColor: '#ccc',
                fontSize: '12px'
            }

            var options = $.extend(defaults, options);

             // Add markup
            $('.rwd-table').wrap('<div class="responsive-table"><div class="table-hider"></div></div>');
            $('.responsive-table').append('<a href="#" class="viewtable" style="display:none">View This Table</a>');

            // Check if table is too big for viewport. 
            function tableChecker() {
                $(".rwd-table").each(function () {
                    var wrapWidth1 = parseInt($(this).parent().width(), 10),
                        tableWidth = parseInt($(this).outerWidth(), 10);
                    $('#bug').html(wrapWidth1 +' '+tableWidth);
                    if (wrapWidth1 < tableWidth) {
                        $(this).parent().next('.viewtable').show();
                        $(this).parent().css('height','0px');
                    } else {
                        $(this).parent().css('height','auto');
                        $(this).parent().next('.viewtable').hide();
                    }
                });
            }


            // Clicking button saves table, and opens in new window
            $(document.body).on('click', '.viewtable', function (event) {
                var w = window.open(),
                    saveTable = $(this).parent().find('table').html(),    
                    send = '<table border="1" cellPadding="5" cellSpacing="0" style="font-family:sans-serif; border-collapse:collapse; border:1px solid ' + options.borderColor + '; font-size:' + options.fontSize + '">' + saveTable + '</table>';
                $(w.document.body).html(send);
                w.document.title = 'Table View';

            });

            // Call on page load and page resize
            tableChecker();
            $(window).resize(function () {
                tableChecker();
            });

        }
    });
})(jQuery);