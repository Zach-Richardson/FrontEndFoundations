(function() {
	'use strict';

	var summary = resumeData.summary;

	activate();

	function activate() {
		$.get('templates/summary.html', function(data) {
			var html = $.parseHTML(data);
			$('#summary').css('background-image', 'url("'+summary.background+'")')
			$($(html).find('#photo').children()[0]).attr('src', summary.photo);
			for(var s in summary) {
				if(s !== 'photo') {					
					$(html).find('#'+s).append(summary[s]);
				}
			}
			$('#summary').append(html);
			bindEditButton();
		});
	}

	function bindEditButton() {
		$('#edit-summary').click(function() {
			$('#photo').remove();
			$('#information').empty();
			$('#information').attr('class', 'col-sm-6 col-sm-offset-3').css('padding-top', '15px').css('padding-bottom', '15px');
			for(var s in summary) {
				$('#information').append('<div class="form-group"><input type="text" class="form-control" value="'+summary[s]+'" placeholder="'+s+'"></div>');
			}
			$('#information').append('<button id="save-summary" class="btn btn-primary pull-right">Save</button>');
			bindSaveButton();
		}); 
	}

	function bindSaveButton() {
		$('#save-summary').click(function() {	
			saveSummaryArray();			
			$('#summary').empty();
			activate();
		}); 
	}

	function saveSummaryArray() {
		var inputs = $('#information').find('input');
		var s = 0;
		while(s < inputs.length) {
			var key = inputs[s].placeholder;
			summary[key] = inputs[s].value;
			s++;
		}
	}
})();