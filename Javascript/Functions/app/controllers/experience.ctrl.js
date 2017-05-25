(function() {
	'use strict';

	var experience, experienceElem;

	activate();

	/////////////////////

	function activate() {
		experience = data.experience;
		experienceElem = document.getElementById('experience');

		for(var e=0; e<experience.length; e++) {								
			var entryElem = createEntryElements();
			setElementProperties(entryElem, experience[e]);
			appendEntryElements(entryElem);
			appendDescriptionElements(entryElem, experience[e]);
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
		entryElem.titleAndDates.innerHTML = curr.title+'<span class="pull-right"><small><em>'+experience[0].years+'</em></small></span>';
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
		experienceElem.appendChild(entryElem.entry);
	}
})();