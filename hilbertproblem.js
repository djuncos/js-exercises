var primeArray=[2,3]

var primeCount=1

function primeList(n) {

	var j=1

	for(var i=5; i<=n; i=i+2){

		var divisor = false

		for(var k=1, divisor; (k<=j)&&(divisor==false); k++){

			if(i%primeArray[k]==0){

				divisor=true

			} else{

				divisor=false

			}

		}

		if(divisor==false){

			j++
			primeArray[j]=i

		}

	}

	primeCount = primeArray.length 

}


// Hilbert part

hilbertNumbers = []
squareFreeTag = []
length = 0
rootLength = 0

	function hNArrayBuilder(m){

		for(var i=0; i<(m/4); i++){

			hilbertNumbers[i]=((4*i)+1)
			squareFreeTag[i] = 1

		}

		length = squareFreeTag.length
		rootLength = Math.round(Math.pow(length,.5))
	}

	
	

	function hilbertCheck(){

		for(var j=1; j<rootLength; j++){

			var k=0
			var sQ = false
			// debugger;

			for(var i=0, sQ; ((i<length) && (sQ == false)); i++){

				if(hilbertNumbers[i]%(Math.pow(primeArray[j],2))!=0){
					k = i
					// debugger;
				}
				else {
					k=i;
					// debugger;

					for(var l=0; l<=(length/Math.pow(primeArray[j],2)); l++){

						squareFreeTag[(Math.pow(primeArray[j],2)*l)+k]=0
						// debugger;

						}


					sQ = true
					// debugger;

				} 
			}

					

					
					

			}
		
		var sum = squareFreeTag.reduce(function(a, b) { 

			return a + b

			}, 0)

		console.log(sum)
			
		}

		

	


