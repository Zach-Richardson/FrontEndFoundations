(function() {
	'use strict';

	activate();

	/////////////////////

	function activate() {
		var experience = document.getElementById('experience');

		for(var e=0; e<data.experience.length; e++) {
			var entry = createEntry();
			entry = addEntryClasses(entry);
			entry = addEntryData(entry, data.experience[e]);
			entry = buildEntryDOM(entry);
			experience.appendChild(entry.entry);
		}
	}

	function createEntry() {
		return {
			 entry: document.createElement('div'),
			 row: document.createElement('div'),
			 well: document.createElement('div'),
			 titleAndDates: document.createElement('h1'),
			 organization: document.createElement('h2'),
			 descriptions: document.createElement('ul')
		};
	}

	function addEntryClasses(entry) {
		entry.entry.className = 'entry';
		entry.row.className = 'row';
		entry.well.className = 'well';
		return entry;
	}

	function addEntryData(entry, experience) {
		entry.titleAndDates.innerHTML = experience.title+'<span class="pull-right"><small><em>'+data.experience[0].years+'</em></small></span>';
		entry.organization.innerHTML = experience.organization+"<hr>";
		for(var d=0; d<experience.descriptions.length; d++) {
			var description = document.createElement('li');
			description.innerHTML = experience.descriptions[d];
			entry.descriptions.appendChild(description);
		}
		return entry;
	}

	function buildEntryDOM(entry) {
		entry.well.appendChild(entry.titleAndDates);
		entry.well.appendChild(entry.organization);
		entry.well.appendChild(entry.descriptions);
		entry.row.appendChild(entry.well);
		entry.entry.appendChild(entry.row);
		return entry;
	}
})();