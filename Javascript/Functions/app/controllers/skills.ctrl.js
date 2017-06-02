(function() {
	'use strict';

	activate();

	/////////////////////

	function activate() {
		var skillsList = document.getElementById('skills-list');

		for(var s=0; s<data.skills.length; s++) {
			var skillsListItem = document.createElement('li');
			skillsListItem.innerHTML = data.skills[s].name + '&nbsp;<span class="badge">'+data.skills[s].years+'</span>';
			skillsList.appendChild(skillsListItem);
			if((s+1)%3 === 0) {
				skillsList.appendChild(document.createElement('br'));
			}
		}
	}
})();