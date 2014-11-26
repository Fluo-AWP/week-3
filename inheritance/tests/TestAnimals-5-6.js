test('Question 5: Pet cannot be instantiated', function () {	
		
	try {
	    var myPet = new Pet();
		ok(false, 'Tried creating a Pet, should not be possible and it should throw error');
	}
	catch(err) {
		ok(true, 'Tried creating a Pet, should not be possible and it should throw error')
	}	

});

test('Question 6: Dog and Cat sound method cannot be changed', function () {
	var myDog = new Dog('Vuffi'),
		myCat = new Cat('Misser');

	myDog.sound = function () {
		return 'Meow';
	}
	myCat.sound = function () {
		return 'Wuf';
	}
	ok(myDog.sound() === 'Wuf', 'Tried editing Dog.sound() -  Dog created should still return \'Wuf\' on sound()');
	ok(myCat.sound() === 'Meow', 'Tried editing Cat.sound() - Cat created should still return \'Meow\' on sound()');	
});

test('Testing that questions 1-4 still work', function () {	
	var myDog = new Dog('Vuffi');	
	var	myCat = new Cat('Misser');

		
	ok(myDog instanceof Pet, 'Dog\'s constructor is Pet - inheritance check');
	ok(myCat instanceof Pet, 'Cat\'s constructor is Pet - inheritance check');
			
	ok(typeof myDog.name === 'undefined', 'Called dog.name - should return undefined for encapsulated data');
	ok(typeof myCat.name === 'undefined', 'Called cat.name - should return undefined for encapsulated data');

	ok(myDog.getName() === 'Vuffi', 'Called dog.getName() - should return the name \'Vuffi\'');
	ok(myCat.getName() === 'Misser', 'Called cat.getName() - should return the name \'Misser\'');
	
	ok(myDog.sound() === 'Wuf', 'Dog created should return \'Wuf\' on sound()');
	ok(myCat.sound() === 'Meow', 'Cat created should return \'Meow\' on sound()');	
});