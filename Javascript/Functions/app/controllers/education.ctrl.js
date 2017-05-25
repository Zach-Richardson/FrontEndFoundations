(function() {
	'use strict';

	var education, educationElem;

	activate();

	/////////////////////

	function activate() {
		education = data.education;
		educationElem = document.getElementById('education');

		for(var e=0; e<education.length; e++) {								
			var entryElem = createEntryElements();
			setElementProperties(entryElem, education[e]);
			appendEntryElements(entryElem);
			appendDescriptionElements(entryElem, education[e]);
		}
	}

	function createEntryElements() {
		return {
			entry: document.createElement('div'),
			row: document.createElement('div'),
			well: document.createElement('div'),
			titleAndDates: document.createElement('h1'),
			organization: document.createElement('h2'),
			descriptions: document.createElement('ul')
		}
	}

	function setElementProperties(entryElem, curr) {		
		entryElem.entry.className = 'entry';
		entryElem.row.className = 'row';
		entryElem.well.className = 'well';
		entryElem.titleAndDates.innerHTML = curr.title+'<span class="pull-right"><small><em>'+education[0].years+'</em></small></span>';
		entryElem.organization.innerHTML = curr.organization+"<hr>";
	}

	function appendDescriptionElements(entryElem, curr) {
		for(var d=0; d<curr.descriptions.length; d++) {
			var description = document.createElement('li');
			description.innerHTML = curr.descriptions[d];
			entryElem.descriptions.appendChild(description);
		}
		entryElem.well.appendChild(entryElem.descriptions);
	}

	function appendEntryElements(entryElem) {
		entryElem.well.appendChild(entryElem.titleAndDates);
		entryElem.well.appendChild(entryElem.organization);
		entryElem.row.appendChild(entryElem.well);
		entryElem.entry.appendChild(entryElem.row);
		educationElem.appendChild(entryElem.entry);
	}
})();