(function() {
	'use strict';

	activate();

	/////////////////////

	function activate() {
		$.get('components/skills/skills.html', function(data) {
			$('#skills').append(data);
			populateSkills();
			bindEdit();
		});
	}

	function bindAdd() {
		$('#skills-add').click(function() {
			$('#skills-list').append(getSkillInput({name: '', years: ''}));
		});
	}

	function bindEdit() {
		$('#skills-edit').click(function() {
			$('#skills-list').empty();
			for(var s=0; s<resumeData.skills.length; s++) {
				var skill = resumeData.skills[s];
				$('#skills-list').append(getSkillInput(skill));
			}
			$('#skills-edit').remove();
			$('.section-title').append(createButton('save'));
			$('.section-title').append(createButton('add'));
			bindSave();
			bindAdd();
			bindRemove();
		});
	}

	function bindRemove() {
		$('.skills-remove').click(function() {
			$($($(this).parent()).parent()).remove();
		});
	}

	function bindSave() {
		$('#skills-save').click(function() {
			var skills = $('#skills-list').children();
			var skillsList = [];
			for(var s=0; s<skills.length; s++) {
				var skill = {
					name: $($(skills[s]).find('.name')[0]).val(),
					years: $($(skills[s]).find('.years')[0]).val()
				};
				skillsList.push(skill);
			}
			resumeData.skills = skillsList;

			$('#skills-save').remove();
			$('#skills-add').remove();
			$('.section-title').append(createButton('edit'));
			bindEdit();

			$('#skills-list').empty();
			populateSkills();
		});
	}

	function getSkillInput(skill) {
		return '<li><div class="form-group">'+
			'<input type="text" class="form-control name" value="'+skill.name+'" placeholder="Skill">'+
			'<input type="number" class="form-control years" value="'+skill.years+'" placeholder="Years">'+
			'<span class="glyphicon glyphicon-remove skills-remove" style="color: white; cursor: pointer;"></span>'+
			'</div></li>';
	}

	function populateSkills() {		
		for(var s=0; s<resumeData.skills.length; s++) {
			var skill = resumeData.skills[s];
			$('#skills-list').append(getSkillText(skill));
			if((s+1)%3===0) $('#skills-list').append('<br>');
		}
	}

	function getSkillText(skill) {
		return '<li>'+skill.name+' <span class="badge">'+skill.years+'</span></li>';
	}

	function createButton(name) {
		return '<button class="btn btn-default pull-right" id="skills-'+name+'">'+name[0].toUpperCase()+name.slice(1, name.length)+'</button>';
	}
})();