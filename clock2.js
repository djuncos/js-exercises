

function timeDisplay(){

	var today = new Date()
	
	var hour = today.getHours()
	var minute = today.getMinutes()
	var second = today.getSeconds()
	
	var amPm

	
	second = zeroConcatenate(second)
	minute = zeroConcatenate(minute)
	hour = zeroConcatenate(hour)
	
	var timeColor = String(hour)+String(minute)+String(second)

	document.getElementById('timeString').innerText = timeColor

	var n=Number(timeColor)

	if(isPrime(n)==true){

		document.getElementById('prime').innerText = "PRIME"
		document.getElementById('factors').innerText = " "

	} else{

		
		var q = primeFactorization(n)
		document.getElementById('prime').innerText = " "
		document.getElementById('factors').innerText = q

	}





	document.body.style.backgroundColor = "#"+timeColor

	document.body.style.color = "#"+timeColor




    setTimeout(timeDisplay,1000)

}

function zeroConcatenate(i){

	if(i<10){

		i = "0" + i
	}

	return i

}

function isPrime(value) {
	var i = 2

	if(value % i === 0){

		return false

	} else for(var i = 3; i < (value)^(.5); i=i+2) {
        if(value % i === 0) {
            return false
        }
    }
    return true
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

			for(var d=2; d<=(m^.5); d++){

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

		var txt = "= "+primeVectorA[0]+"^"+powerVectorA[0]

		for(var t=1; t<=k; t++){

			txt = txt+"\xa0"+"  x  "+"\xa0"+primeVectorA[t]+"^"+powerVectorA[t]

			}		

		return txt
}