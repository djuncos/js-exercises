var customer = {

	name: "Tom Smith",
	speak: function() {

		return "My name is " + this.name
	},

	address: {

		
		street: '123 Main Street',
		city: 'Pittsburgh',
		state: 'PA',
		cityFunct: function(parameter){

			var x="this."+parameter

			return this[parameter]
			

		}

	}



}

function Person(name, street) {

	this.name = name
	this.street = street
	this.info = function(){

		return "My name is "+this.name+" and I live on "+this.street
	}
}

var bobSmith = new Person("Bob", "Concord")

function changeName(person){

	person.name = "Sue Smith"
}

function mammal(name){

	this.name = name
	this.getInfo = function(){

		return "The mammal's name is "+this.name

	}

}

mammal.prototype.sound="Grrrrr"

mammal.prototype.makeSound = function(){

	return this.name + " says "+this.sound
}