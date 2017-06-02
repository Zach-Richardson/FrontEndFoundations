(function() {
	'use strict';

	activate('experience');
	activate('education');

	function activate(parent) {
		for(var e in resumeData[parent]) {
			var entry = resumeData[parent][e];
			createEntry(parent, entry.title, entry.organization, entry.dates, entry.descriptions);
		}
		bindEditButton(parent);
	}

	function createEntry(parent, title, organization, dates, descriptions) {
		$.get('templates/entry.html', function(data) {
			var html = $.parseHTML(data);
			$(html).find('.title-organization').append('<h2>'+title+'</h2>'+'<h3>'+organization+'</h3>');
			$(html).find('.dates').append('<h3><em>'+dates+'</em></h3>');
			for(var d in descriptions) {
				$(html).find('.descriptions').append('<li>'+descriptions[d]+'</li>');
			}
			$('#'+parent).append(html);
		});
	}

	function createEntryEdit(parent, title, organization, dates, descriptions) {
		$.get('templates/entry.html', function(data) {
			var html = $.parseHTML(data);
			$(html).find('.title-organization')
				.append('<h2><button class="btn btn-primary remove-'+parent+'">Remove</button><br><br>'+
					'<input type="text" value="'+title+'" placeholder="Title"></h2>'+
					'<h3><input type="text" value="'+organization+'" placeholder="Organization"></h3>');
			$(html).find('.dates').append('<h3><br><br><input type="text" value="'+dates+'" placeholder="Dates"></h3>');
			for(var d in descriptions) {
				$(html).find('.descriptions')
					.append('<li><input type="text" value="'+descriptions[d]+'" placeholder="Description" style="width: 100%;"></li>');
			}
			$(html).find('.descriptions').parent().append('<button class="btn btn-primary pull-right add-description">Add Description</button>');
			$('#'+parent).append(html);
			bindRemoveButton(parent);
			bindAddDescriptionButton();
		});
	}

	function bindEditButton(parent) {
		$('#edit-'+parent).click(function() {
			$('#'+parent).find('.entry').remove();
			for(var e in resumeData[parent]) {
				var entry = resumeData[parent][e];
				createEntryEdit(parent, entry.title, entry.organization, entry.dates, entry.descriptions);
			}
			$(this).remove();
			$('#'+parent).find('.text-center').append('<button class="btn btn-primary pull-right" id="save-'+parent+'">Save</button>');
			$('#'+parent).find('.text-center').append('<button class="btn btn-default pull-right" id="add-'+parent+'">Add</button>');
			bindAddButton(parent);
			bindSaveButton(parent);
		});
	}

	function bindRemoveButton(parent) {
		$('.remove-'+parent).click(function() {
			var title = $(this).siblings()[2].value;
			for(var e in resumeData[parent]) {
				if(title === resumeData[parent][e].title) {
					resumeData[parent].splice(e, 1);
				}
			}	
			$(this).parent().parent().parent().parent().parent().remove();
		});
	}

	function bindSaveButton(parent) {		
		$('#save-'+parent).click(function() {
			resumeData[parent] = saveParentArray(parent);
			$('#'+parent).find('.entry').remove();
			$(this).siblings()[0].remove();
			$(this).parent().append('<button id="edit-'+parent+'" class="btn btn-default pull-right">Edit</button>');
			$(this).remove();
			activate(parent);
		});
	}

	function bindAddButton(parent) {		
		$('#add-'+parent).click(function() {
			$.get('templates/entry.html', function(data) {
				var html = $.parseHTML(data);
				$(html).find('.title-organization')
					.append('<h2><button class="btn btn-primary remove-'+parent+'">Remove</button><br><br>'+
						'<input type="text" placeholder="Title"></h2>'+
						'<h3><input type="text" placeholder="Organization"></h3>');
				$(html).find('.dates').append('<h3><br><br><input type="text" placeholder="Dates"></h3>');
				$(html).find('.descriptions')
					.append('<li><input type="text" placeholder="Description" style="width: 100%;"></li>');
				$(html).find('.descriptions').parent().append('<button class="btn btn-primary pull-right add-description">Add Description</button>');
				$('#'+parent).append(html);
				bindRemoveButton(parent);
				bindAddDescriptionButton();
			});
		});
	}

	function bindAddDescriptionButton() {
		$('.add-description').unbind().click(function() {
			$($(this).siblings()[0]).append('<li><input type="text" placeholder="Description" style="width: 100%;"></li>');
		});
	}

	function saveParentArray(parent) {
		var parentList = $('#'+parent).find('.entry');
		var parentArray = [];
		var p = 0;
		while(p < parentList.length) {
			var parent = $($(parentList[p]).children()[0]).children();
			var parentObj = {};

			parentObj.title = $($(parent.children()[0]).children()[0]).children()[3].value;
			parentObj.organization = $($(parent.children()[0]).children()[1]).children()[0].value;
			parentObj.dates = $($(parent.children()[1]).children()[0]).children()[2].value;
			parentObj.descriptions = [];
			var descriptions = $(parent.children()[2]).children();
			var d = 0;
			while(d < descriptions.length) {
				parentObj.descriptions.push($(descriptions[d]).children()[0].value);
				d++;
			}

			parentArray.push(parentObj);
			p++;
		}
		return parentArray;
	}
})();