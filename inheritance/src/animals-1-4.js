var Pet = Class.create({
	initialize: function (n) {
		var name = n || '';
		
		this.getName = function () {
			return name;
		}
	}
});

var Dog = Class.create(Pet, {
	sound: function () {
		return 'Wuf';
	}
});

var Cat = Class.create(Pet, {
	sound: function () {
		return 'Meow';
	}
});