(function() {
	'use strict';

	activate();

	function activate() {
		$.get('templates/navbar.html', function(data) {
			$('#navbar').append($.parseHTML(data));
		});
	}
})();