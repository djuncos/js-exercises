


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


function primeTime(n){

	var t0 = performance.now()
	primeList(n)
	var t1 = performance.now()
	var timeInMilliseconds = t1-t0
	var timeInSeconds = (Math.round((t1-t0)*10))/10000
	console.log("Call to primeList("+n+") took " + timeInSeconds + " seconds.")

}

var hilbertArray =[]

var hilbertCount = 0

// var start = Math.pow(10,7)+1

var start = 1

function hilbertSFCheck(m){



	for(var t=start; t<=m; t=t+4 ){

		var squarefree=true

		for(var s=0, squarefree; (s<=minimizer(t))&&(squarefree==true); s++){

			if(t%Math.pow(primeArray[s],2)==0){

				squarefree=false
			}

		}

		if(squarefree==true){

			hilbertArray[hilbertCount] = t
			hilbertCount++

		}

	}


}

function minimizer(a){

	if(a<55){

		return 55

	} else {

		return (a/Math.log(a))


	}
}

function hilbertTime(n){

	var t0 = performance.now()
	hilbertSFCheck(n)
	var t1 = performance.now()
	var timeInMilliseconds = t1-t0
	var timeInSeconds = (Math.round((t1-t0)*10))/10000
	console.log("Call to hilbertSFCheck("+n+") took " + timeInSeconds + " seconds.")

}