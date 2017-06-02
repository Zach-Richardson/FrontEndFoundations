(function() {
	'use strict';

	activate();

	/////////////////////

	function activate() {
		var education = document.getElementById('education');

		for(var e=0; e<data.education.length; e++) {
			var entry = createEntry();
			entry = addEntryClasses(entry);
			entry = addEntryData(entry, data.education[e]);
			entry = buildEntryDOM(entry);
			education.appendChild(entry.entry);
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

	function addEntryData(entry, education) {
		entry.titleAndDates.innerHTML = education.title+'<span class="pull-right"><small><em>'+data.education[0].years+'</em></small></span>';
		entry.organization.innerHTML = education.organization+"<hr>";
		for(var d=0; d<education.descriptions.length; d++) {
			var description = document.createElement('li');
			description.innerHTML = education.descriptions[d];
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