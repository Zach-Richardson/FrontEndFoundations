/*------------ Summary ------------*/
document.getElementById('summary').style.backgroundImage = 'url('+data.summary.background+')';
document.getElementById('profile').src = data.summary.photo;
document.getElementById('name').innerHTML = data.summary.name;
document.getElementById('occupation').innerHTML = data.summary.occupation;
document.getElementById('location').innerHTML = data.summary.location;

var phoneText = document.createTextNode(data.summary.phone);
document.getElementById('phone').appendChild(phoneText);

var emailText = document.createTextNode(data.summary.email);
document.getElementById('email').appendChild(emailText);


/*------------ Skills ------------*/
var skillsList = document.getElementById('skills-list');

for(var s=0; s<data.skills.length; s++) {
	var skillsListItem = document.createElement('li');
	skillsListItem.innerHTML = data.skills[s].name + '&nbsp;<span class="badge">'+data.skills[s].years+'</span>';
	skillsList.appendChild(skillsListItem);
	if((s+1)%3 === 0) {
		skillsList.appendChild(document.createElement('br'));
	}
}


/*------------ Experience ------------*/
var experience = document.getElementById('experience');

for(var e=0; e<data.experience.length; e++) {
	var entry = document.createElement('div');
	var row = document.createElement('div');
	var well = document.createElement('div');
	var titleAndDates = document.createElement('h1');
	var organization = document.createElement('h2');
	var descriptions = document.createElement('ul');

	entry.className = 'entry';
	row.className = 'row';
	well.className = 'well';
	titleAndDates.innerHTML = data.experience[e].title+'<span class="pull-right"><small><em>'+data.experience[0].years+'</em></small></span>';
	organization.innerHTML = data.experience[e].organization+"<hr>";

	for(var d=0; d<data.experience[e].descriptions.length; d++) {
		var description = document.createElement('li');
		description.innerHTML = data.experience[e].descriptions[d];
		descriptions.appendChild(description);
	}

	well.appendChild(titleAndDates);
	well.appendChild(organization);
	well.appendChild(descriptions);
	row.appendChild(well);
	entry.appendChild(row);
	experience.appendChild(entry);
}


/*------------ Education ------------*/
var education = document.getElementById('education');

for(var e=0; e<data.education.length; e++) {
	var entry = document.createElement('div');
	var row = document.createElement('div');
	var well = document.createElement('div');
	var titleAndDates = document.createElement('h1');
	var organization = document.createElement('h2');
	var descriptions = document.createElement('ul');

	entry.className = 'entry';
	row.className = 'row';
	well.className = 'well';
	titleAndDates.innerHTML = data.education[e].title+'<span class="pull-right"><small><em>'+data.education[0].years+'</em></small></span>';
	organization.innerHTML = data.education[e].organization+"<hr>";

	for(var d=0; d<data.education[e].descriptions.length; d++) {
		var description = document.createElement('li');
		description.innerHTML = data.education[e].descriptions[d];
		descriptions.appendChild(description);
	}

	well.appendChild(titleAndDates);
	well.appendChild(organization);
	well.appendChild(descriptions);
	row.appendChild(well);
	entry.appendChild(row);
	education.appendChild(entry);
}