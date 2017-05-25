(function() {
	'use strict';

	activate();

	/////////////////////
	
	function activate() {
		document.getElementById('summary').style.backgroundImage = 'url('+data.summary.background+')';
		document.getElementById('profile').src = data.summary.photo;
		document.getElementById('name').innerHTML = data.summary.name;
		document.getElementById('occupation').innerHTML = data.summary.occupation;
		document.getElementById('location').innerHTML = data.summary.location;

		var phoneText = document.createTextNode(data.summary.phone);
		document.getElementById('phone').appendChild(phoneText);

		var emailText = document.createTextNode(data.summary.email);
		document.getElementById('email').appendChild(emailText);
	}
})();