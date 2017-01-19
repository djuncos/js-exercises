


	var primeArray=[2,3]


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

		
}