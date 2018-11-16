(function($){
	var watchedElements = [];
	var doc = document.documentElement;
	var currentYScroll = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

	$(".in-view-watcher").each(function(i,v){
		watchedElements.push($(v));
	});

	function checkWatchedElements(){
		// Get the current offset scrolled from the top
		currentYScroll = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		// Get the window's height
		var clientHeight = $(window).height();

		// Loop through each of the elements gathered by the selector above this scroll event
		$.each(watchedElements, function(_, obj){
			// Get the distance from the top of the document to the top of this element
			var topOfElement = obj[0].offsetTop;
			// Get the distance from the top of the document to the bottom of this element
			var bottomOfElement = obj[0].offsetTop + obj.height();


			if (
				// Check if the top of the element is in the viewport
				(topOfElement > currentYScroll && topOfElement < currentYScroll + clientHeight)
				||
				// Or check if the bottom element is in view
				(bottomOfElement > currentYScroll && bottomOfElement < currentYScroll + clientHeight)
			){
				obj.addClass("is-in-view");
			}
		});
	}

	// Register to the scroll event
	$(window).on("scroll", checkWatchedElements);
	$(window).on("load", checkWatchedElements);
	// Run the function once to see if the plugin needs to add the class to any currently viewable elements before a scroll event
	checkWatchedElements();
}(jQuery));
