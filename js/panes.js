$(function() {
	$(".paneLink").click(function(e) {
		e.preventDefault();
		var target = $(e.currentTarget);

		// Show the profiles
		$(".pane").hide();
		$(target.attr("href")).show();

		// Update the selected state of the buttons
		$(".paneLink").removeClass("selected");
		target.addClass("selected");
	});

	$(".pane").hide()
	$(".paneLink.selected").click();
});