function letsMakeADeal(){

		var doorActual = Math.floor(Math.random()*3)

		var doorWrong1 = ((doorActual+1)%3)

		var doorWrong2 = ((doorActual+2)%3)

		var doorAttempt1 = prompt("There is a prize behind one of three doors.  Enter door number (0, 1, or 2).")


		if(doorAttempt1 == doorActual){

			var rand = Math.floor(Math.random()*2)

			if(rand == 0){

				var doorKnockout = doorWrong1
				var doorSwitch = doorWrong2
			} else {

				var doorKnockout = doorWrong2
				var doorSwitch = doorWrong1
			}

		} else if(doorAttempt1 == doorWrong1){

				var doorKnockout = doorWrong2
				var doorSwitch = doorActual
				
		} else {

				var doorKnockout = doorWrong1
				var doorSwitch = doorActual
		}

		var switchOrKeep = prompt("You've entered Door "+doorAttempt1+".  I'm going to eliminate Door "+doorKnockout+" as an option. Would you like to stay with your pick, or switch to Door "+doorSwitch+"?  (Type K to keep or S to switch.)")

		if(switchOrKeep == "K"){

			var doorAttempt2 = doorAttempt1

		} else if(switchOrKeep == "S"){

			var doorAttempt2 = doorSwitch

		} else {

			alert("Error!")
		}

		if(doorAttempt2 == doorActual){

			alert("The prize was behind Door "+doorActual+".  You win!")

		} else {

			alert("The prize was behind Door "+doorActual+".  You lose.")
		}

		// console.log("doorActual = "+doorActual)
		// console.log("doorWrong1 = "+doorWrong1)
		// console.log("doorWrong2 = "+doorWrong2)
		// console.log("doorAttempt1 = "+doorAttempt1)
		// console.log("doorKnockout = "+doorKnockout)
		// console.log("doorSwitch = "+doorSwitch)
		// console.log("switchOrKeep = "+switchOrKeep)
		// console.log("doorAttempt2 = "+doorAttempt2)



}