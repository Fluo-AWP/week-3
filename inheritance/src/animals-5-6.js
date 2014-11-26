var Pet = Class.create({
	initialize: function () {
		throw 'error: Pet cannot be instantiated';
		Object.freeze(this)
	},
	setup: function (n) {
		var name = n || '';
		
		this.getName = function () {
			return name;
		}
	}
});

var Dog = Class.create(Pet, {
	initialize: function ($super, n) {
		this.setup(n);
		Object.freeze(this);
	},
	setup: function ($super, n) {
		$super(n);	
	},
	sound: function () {
		return 'Wuf';
	}
});

var Cat = Class.create(Pet, {
	initialize: function ($super, n) {
		this.setup(n);
		Object.freeze(this);
	},
	setup: function ($super, n) {
		$super(n);	
	},
	sound: function () {
		return 'Meow';
	}
});