(function() {
	'use strict';
	activate();

	function activate() {
		for(var s in resumeData.skills) {
			var skill = resumeData.skills[s];
			$('#skills-list').append('<li>'+skill.name +'<span class="badge">'+skill.years+'</span></li>');
			if(s % 3 === 2) {
				$('#skills-list').append('<br>');
			}
		}
		bindEditButton();
	}

	function bindEditButton() {		
		$('#edit-skills').click(function() {
			$('#skills-list').empty();
			for(var s in resumeData.skills) {
				var skill = resumeData.skills[s];
				$('#skills-list')
					.append('<li><label>Skill: </label><input style="color: black;" type="text" value="'+skill.name+'">'+
						'<label>Years: </label><input style="color: black;" type="number" value="'+skill.years+'">'+
						'<span style="color: white;" class="glyphicon glyphicon-remove remove-skill"></span><br></li>');
			}
			$('#skills').append('<div class="text-center"><button id="add-skill" class="btn btn-primary">Add</button></div>');	
			$(this).parent().append('<button id="save-skills" class="btn btn-primary pull-right">Save</button>');
			bindSaveButton();
			bindRemoveButton();
			bindAddButton();
			$(this).remove();
		});
	}

	function bindRemoveButton() {		
		$('.remove-skill').click(function() {
			var skill =$(this).siblings()[1].value;
			for(var s in resumeData.skills) {
				if(skill === resumeData.skills[s].name) {
					resumeData.skills.splice(s, 1);
					$(this).siblings().remove();
					$(this).parent().remove();
					$(this).remove();
				}
			}
		});
	}

	function bindSaveButton() {
		$('#save-skills').click(function() {
			saveSkillsArray();
			$('#skills-list').empty();
			$('#add-skill').parent().remove();
			$(this).parent().append('<button id="edit-skills" class="btn btn-default pull-right">Edit</button>');
			$(this).remove();
			activate();
		});
	}

	function bindAddButton() {
		$('#add-skill').click(function() {
			$('#skills-list').append('<li><label>Skill: </label><input style="color: black;" type="text" placeholder="Skill">'+
				'<label>Years: </label><input style="color: black;" type="number" placeholder="Years">'+
				'<span style="color: white;" class="glyphicon glyphicon-add remove-skill"></span><br></li>');
		});
	}

	function saveSkillsArray() {
		var skillsList = $('#skills-list').children();
		var skillsArray = [];
		var s = 0;
		while(s < skillsList.length) {
			var skill = $(skillsList[s]);
			var skillsObj = {};
			skillsObj.name = skill.children()[1].value;
			skillsObj.years = skill.children()[3].value;
			skillsArray.push(skillsObj);
			s++;
		}
		resumeData.skills = skillsArray;
	}
})();