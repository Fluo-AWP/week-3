test('Questions 1-4: Test Animals propterties - created animals Cat and Dog and tests their sound and names', function () {
	var myDog = new Dog('Vuffi'),
		myCat = new Cat('Misser');
		
	ok(myDog instanceof Pet, 'Dog\'s constructor is Pet - inheritance check');
	ok(myCat instanceof Pet, 'Cat\'s constructor is Pet - inheritance check');
			
	ok(typeof myDog.name === 'undefined', 'Called dog.name - should return undefined for encapsulated data');
	ok(typeof myCat.name === 'undefined', 'Called cat.name - should return undefined for encapsulated data');
	
	ok(myDog.getName() === 'Vuffi', 'Called dog.getName() - should return the name \'Vuffi\'');
	ok(myCat.getName() === 'Misser', 'Called cat.getName() - should return the name \'Misser\'');
	
	ok(myDog.sound() === 'Wuf', 'Dog created should return \'Wuf\' on sound()');
	ok(myCat.sound() === 'Meow', 'Cat created should return \'Meow\' on sound()');
});