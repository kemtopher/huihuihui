document.addEventListener("turbolinks:load", function() {

	// SORTABLE PROJECTS ON BACKEND
	// for future, reuse this to sort project photos. 

	$("#project-list").sortable({
		update: function(e, ui) {
			Rails.ajax({
				url: $(this).data("url"),
				type: "PATCH",
				data: $(this).sortable('serialize')
			});
		}
	});

});


