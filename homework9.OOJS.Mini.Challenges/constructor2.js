
// Problem 1

var Multiplier = { currentValue:  1, 

	multiply: function(n){     

		Multiplier.currentValue = Multiplier.currentValue * n   

		},   

	getCurrentValue: function(){     

		return Multiplier.currentValue   

		} 

	}




// Problem 2



function Photo(fileName, location){

	this.fileName = fileName
	this.location = location

}

function Album() {

	this.photos = []

	this.addPhoto = function(photo){

		this.photos.push(photo)
	}

	this.listAllPhotos = function(){

		for(i=0; i<this.photos.length; i++){

			console.log(this.photos[i].fileName)
		}
	}

	this.getPhoto = function(position){

		return this.photos[position-1]

	}
}


var photo = new Photo("Me at the beach.jpg")
var photo2 = new Photo("Brooke and me in the Poconos.jpg")
var album = new Album

album.photos.push(photo)
album.photos.push(photo2)

album.addPhoto(photo)





//Problem 3

function Person(name, age){

	this.name = name
	this.age = age

}

function Student(name, age, debt){

	Person.apply(this, arguments)
	this.debt = debt
}

function Teacher(name, age, roomNumber){

	Person.apply(this, arguments
	this.roomNumber = roomNumber

}

function School(){

	this.teachers = []
	this.students = []

}

Student.prototype = new Person()



var student = new Student("Dan", 40, 200000)
var teacher = new Teacher("Mr. Wetzel", 41, 15)
var school = new School


console.log(student)
school.teachers.push(teacher)
console.log(school)