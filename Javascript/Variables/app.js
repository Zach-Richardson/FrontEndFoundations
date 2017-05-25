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

var skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[0].name + '&nbsp;<span class="badge">'+data.skills[0].years+'</span>';
skillsList.appendChild(skillsListItem);

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[1].name + '&nbsp;<span class="badge">'+data.skills[1].years+'</span>';
skillsList.appendChild(skillsListItem);

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[2].name + '&nbsp;<span class="badge">'+data.skills[2].years+'</span>';
skillsList.appendChild(skillsListItem);
skillsList.appendChild(document.createElement('br'));

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[3].name + '&nbsp;<span class="badge">'+data.skills[3].years+'</span>';
skillsList.appendChild(skillsListItem);

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[4].name + '&nbsp;<span class="badge">'+data.skills[4].years+'</span>';
skillsList.appendChild(skillsListItem);

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[5].name + '&nbsp;<span class="badge">'+data.skills[5].years+'</span>';
skillsList.appendChild(skillsListItem);
skillsList.appendChild(document.createElement('br'));

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[6].name + '&nbsp;<span class="badge">'+data.skills[6].years+'</span>';
skillsList.appendChild(skillsListItem);

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[7].name + '&nbsp;<span class="badge">'+data.skills[7].years+'</span>';
skillsList.appendChild(skillsListItem);

skillsListItem = document.createElement('li');
skillsListItem.innerHTML = data.skills[8].name + '&nbsp;<span class="badge">'+data.skills[8].years+'</span>';
skillsList.appendChild(skillsListItem);


/*------------ Experience ------------*/
var experience = document.getElementById('experience');

var entry = document.createElement('div');
var row = document.createElement('div');
var well = document.createElement('div');
var titleAndDates = document.createElement('h1');
var organization = document.createElement('h2');
var descriptions = document.createElement('ul');
var descriptionOne = document.createElement('li');
var descriptionTwo = document.createElement('li');

entry.className = 'entry';
row.className = 'row';
well.className = 'well';
titleAndDates.innerHTML = data.experience[0].title+'<span class="pull-right"><small><em>'+data.experience[0].years+'</em></small></span>';
organization.innerHTML = data.experience[0].organization+"<hr>";
descriptionOne.innerHTML = data.experience[0].descriptions[0];
descriptionTwo.innerHTML = data.experience[0].descriptions[1];

descriptions.appendChild(descriptionOne);
descriptions.appendChild(descriptionTwo);
well.appendChild(titleAndDates);
well.appendChild(organization);
well.appendChild(descriptions);
row.appendChild(well);
entry.appendChild(row);
experience.appendChild(entry);


entry = document.createElement('div');
row = document.createElement('div');
well = document.createElement('div');
titleAndDates = document.createElement('h1');
organization = document.createElement('h2');
descriptions = document.createElement('ul');
descriptionOne = document.createElement('li');
descriptionTwo = document.createElement('li');

entry.className = 'entry';
row.className = 'row';
well.className = 'well';
titleAndDates.innerHTML = data.experience[1].title+'<span class="pull-right"><small><em>'+data.experience[0].years+'</em></small></span>';
organization.innerHTML = data.experience[1].organization+"<hr>";
descriptionOne.innerHTML = data.experience[1].descriptions[0];
descriptionTwo.innerHTML = data.experience[1].descriptions[1];

descriptions.appendChild(descriptionOne);
descriptions.appendChild(descriptionTwo);
well.appendChild(titleAndDates);
well.appendChild(organization);
well.appendChild(descriptions);
row.appendChild(well);
entry.appendChild(row);
experience.appendChild(entry);


entry = document.createElement('div');
row = document.createElement('div');
well = document.createElement('div');
titleAndDates = document.createElement('h1');
organization = document.createElement('h2');
descriptions = document.createElement('ul');
descriptionOne = document.createElement('li');
descriptionTwo = document.createElement('li');

entry.className = 'entry';
row.className = 'row';
well.className = 'well';
titleAndDates.innerHTML = data.experience[2].title+'<span class="pull-right"><small><em>'+data.experience[0].years+'</em></small></span>';
organization.innerHTML = data.experience[2].organization+"<hr>";
descriptionOne.innerHTML = data.experience[2].descriptions[0];
descriptionTwo.innerHTML = data.experience[2].descriptions[1];

descriptions.appendChild(descriptionOne);
descriptions.appendChild(descriptionTwo);
well.appendChild(titleAndDates);
well.appendChild(organization);
well.appendChild(descriptions);
row.appendChild(well);
entry.appendChild(row);
experience.appendChild(entry);

/*------------ Education ------------*/
var education = document.getElementById('education');

var entry = document.createElement('div');
var row = document.createElement('div');
var well = document.createElement('div');
var titleAndDates = document.createElement('h1');
var organization = document.createElement('h2');
var descriptions = document.createElement('ul');
var descriptionOne = document.createElement('li');
var descriptionTwo = document.createElement('li');

entry.className = 'entry';
row.className = 'row';
well.className = 'well';
titleAndDates.innerHTML = data.education[0].title+'<span class="pull-right"><small><em>'+data.education[0].years+'</em></small></span>';
organization.innerHTML = data.education[0].organization+"<hr>";
descriptionOne.innerHTML = data.education[0].descriptions[0];
descriptionTwo.innerHTML = data.education[0].descriptions[1];

descriptions.appendChild(descriptionOne);
descriptions.appendChild(descriptionTwo);
well.appendChild(titleAndDates);
well.appendChild(organization);
well.appendChild(descriptions);
row.appendChild(well);
entry.appendChild(row);
education.appendChild(entry);


entry = document.createElement('div');
row = document.createElement('div');
well = document.createElement('div');
titleAndDates = document.createElement('h1');
organization = document.createElement('h2');
descriptions = document.createElement('ul');
descriptionOne = document.createElement('li');
descriptionTwo = document.createElement('li');

entry.className = 'entry';
row.className = 'row';
well.className = 'well';
titleAndDates.innerHTML = data.education[1].title+'<span class="pull-right"><small><em>'+data.education[0].years+'</em></small></span>';
organization.innerHTML = data.education[1].organization+"<hr>";
descriptionOne.innerHTML = data.education[1].descriptions[0];

descriptions.appendChild(descriptionOne);
well.appendChild(titleAndDates);
well.appendChild(organization);
well.appendChild(descriptions);
row.appendChild(well);
entry.appendChild(row);
education.appendChild(entry);