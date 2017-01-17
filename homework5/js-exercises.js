
//1

var firstNumber = 29
var secondNumber = 13

console.log(firstNumber+secondNumber)

var firstWord = "Leonhard"

var secondWord = "Euler"

console.log(firstWord+" "+secondWord)



//2

var tvShows = [ [ "Game of Thrones" , "Deadwood" , "Curb Your Enthusiasm" ], [ "Seinfeld" , "It's Always Sunny in Philadelphia" ] ]

console.log(tvShows[0][2])
console.log(tvShows[1][0])


// For problem 4, see screenshots

//3

var number = prompt("Enter number.");

if(number<100){
	alert("Your number is less than 100!")
} else {
	alert("Your number is at least 100.")
}


//5

var passWord = "potpourri"

var attempt = prompt("Enter password.")

if (attempt == passWord){
	alert("You're in!")
} else {
	alert("Nope.  Nice try, bruh.")
}


//6

function takesAName(name){
	console.log("You have entered"+" "+name+".")

}

//7

function amISafe(){
	console.log("Look behind you!")

}

//8


function doorPrize(){

	var doorActual = Math.floor((Math.random()*3)+1)

	var doorAttempt = prompt("Enter door number (1 through 3).")

	if(doorAttempt==doorActual){
		alert("You win!  You are now the proud owner of a goat!")
	} else {
		alert("You lose.  You don't deserve good things in life.")
	}
}

