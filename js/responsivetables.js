/*
 * Responsive Tables V1.0.0
 * http://kthornbloom.com/responsivetables.php
 *
 * Copyright 2013, Kevin Thornbloom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	$.fn.extend({
		responsiveTables: function() {

			// Add wrapper to tables, this helps us know if they're getting too big
			$('.rwd-table').wrap('<div class="rt-wrap"></div>');

			// Does the table have a heading?
			$('.rwd-table').each(function() {
				var autogen = $(this).attr("data-autogen-headers");
				console.log(autogen);
				if ($('thead', this).length && autogen == "true") {
					// If so, create data-attributes for each cell based on the heading
					$('thead tr:first th', this).each(function() {
						saveTitle = $(this).text(),
						whichPosition = $(this).index()+1;
						$(this).parents('table').find('tr td:nth-child('+whichPosition+')').attr('data-title', saveTitle);
					});
				}
			});

			// Check if table is too big for viewport.
			function tableChecker() {
				$(".rwd-table").each(function() {
					// wrapper width (page width)
					var wrapWidth1 = parseInt($(this).parent().width(), 10),
						// table width
						tableWidth = parseInt($(this).outerWidth(), 10),
						// If we've already gone mobile, let's save the breakpoint at which it happened
						breakpoint = $(this).parent().find('.rt-breakpoint').html();


					if (wrapWidth1 < tableWidth) {
						// Table is too big!
						$(this).parent().prepend("<div class='rt-breakpoint'>" + tableWidth + "</div>");
						$(this).addClass('mobile-table');
					} else if (breakpoint < wrapWidth1) {
						// Ok, there's enough room for the table again. Let's put it back.
						$(this).parent().find('.rt-breakpoint').remove();
						$(this).removeClass('mobile-table');
					}
				});
			}

			// Call on page load and page resize
			tableChecker();

			(function($, sr) {
				var debounce = function(func, threshold, execAsap) {
						var timeout;

						return function debounced() {
							var obj = this,
								args = arguments;

							function delayed() {
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
				jQuery.fn[sr] = function(fn) {
					return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
				};

			})(jQuery, 'smartresize');


			// On resize (with delay)
			$(window).smartresize(function() {
				tableChecker();
			});


		}
	});
})(jQuery);
