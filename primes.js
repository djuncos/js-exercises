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


// Here begins my prime factorization function.

var primeVector=[]
var powerVector=[]


function primeFactorization(value){


var primeVectorA=[]
var powerVectorA=[]


		

		var m=value
		var k=-1

		while(m>1){

			for(var i=0; i<m; i++){

				var d = primeArray[i]	
				var p = 0
				var divisor = false

				while(m%d==0){

					divisor=true
					p++
					m = m/d

				}

				 // console.log(m)

				if(divisor==true){

					k++
					primeVectorA[k]=d
					powerVectorA[k]=p

				}


			}


		}

		primeVector=primeVectorA
		powerVector=powerVectorA


		// var txt = "= "+primeVectorA[0]+"^"+powerVectorA[0]

		// for(var t=1; t<=k; t++){

		// 	txt = txt+"\xa0"+"  x  "+"\xa0"+primeVectorA[t]+"^"+powerVectorA[t]

		// 	}		

		// return txt
		

		return primeVector.length
}





function fourDistinct(n){

	var l = 0

	var j = 0

// t<=n && 
	

	for(var t=800, l; l<4; t++){

		

		if (primeFactorization(t)==4){

			l++
			j=t
			

		} else{

			l=0
		}

		
		
	}

	return j


}
