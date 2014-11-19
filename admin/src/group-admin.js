var GroupAdmin = (function () {
	var groupSelect;
	var membersSelect;
	var group;
	var adminName;
	
	var init = function (options) {
		var defaultOptions = {
			groupSelect: 'group-select',
			membersSelect: 'members-select',
			adminName: 'admin-name'
		};
		$.extend(defaultOptions, options);
		
		groupSelect = $('#'+  defaultOptions.groupSelect);
		membersSelect = $('#'+  defaultOptions.membersSelect);
		adminName = $('#'+ defaultOptions.adminName);
		loadCourses();
		groupSelect.change(function () {
			var val = parseInt(this.value);
			presentMembers(val);
			presentAdminName(val);
		});
	},

	loadCourses = function () {
		$.getJSON('http://cs.au.dk/~amoeller/AWP/groups.json', presentGroups);
	},
	
	presentGroups = function (data) {
		groups = data;
		$.each(groups, function (index, element) {
			var option = '<option value="'+ index +'">'+ element.name +'</option>';
			groupSelect.append(option);
		});
	},
	
	presentAdminName = function (index) {
		var name = groups[index]['admin'];
		adminName.text(name);
	},
	
	presentMembers = function (index) {
		var members = groups[index]['members'];
		membersSelect.empty();
		$.each(members, function (index, name) {
			var option = '<option value="'+ index +'">'+ name +'</option>';
			membersSelect.append(option);
		});
	};
	
	return {
		init: init
	};
})();