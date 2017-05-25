(function() {
	'use strict';

	activate();

	function activate() {
		$.get('templates/contact.html', function(data) {
			$('#contact').append($.parseHTML(data));
			bindSubmitButton();
		});
	}

	function bindSubmitButton() {
		$('#submit').click(function() {
			alert("Thank You. You're inquiry has been submitted.");
		});
	}
})();