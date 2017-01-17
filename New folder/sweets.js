var primeVector=[]
var powerVector=[]


function primeFactorization(value){


var primeVectorA=[]
var powerVectorA=[]


		

		var m=value
		var k=-1
		var s = 2

		while(m>1){

			for(var d=2; d<=(m)^.5; d++){

				var p = 0
				var divisor = false

				while(m%d==0){

					divisor=true
					p++
					m = m/d

				} console.log(m)

				if(divisor==true){

					k++
					primeVectorA[k]=d
					powerVectorA[k]=p

				}

				

			}


		}

		primeVector=primeVectorA
		powerVector=powerVectorA

		var txt = primeVectorA[0]+"^"+powerVectorA[0]

		for(var t=1; t<=k; t++){

			txt = txt+" + "+primeVectorA[t]+"^"+powerVectorA[t]

			}		

		document.getElementById('factors').innerText = txt
}

var txt = "Hello World!";

document.write("The original string: " + txt);
document.write("<p>Big: " + txt.big() + "</p>");
document.write("<p>Small: " + txt.small() + "</p>");
document.write("<p>Bold: " + txt.bold() + "</p>");
document.write("<p>Italic: " + txt.italics() + "</p>");
document.write("<p>Fixed: " + txt.fixed() + "</p>");
document.write("<p>Strike: " + txt.strike() + "</p>");
document.write("<p>Fontcolor: " + txt.fontcolor("green") + "</p>");
document.write("<p>Fontsize: " + txt.fontsize(6) + "</p>");
document.write("<p>Subscript: " + txt.sub() + "</p>");
document.write("<p>Superscript: " + txt.sup() + "</p>");
document.write("<p>Link: " + txt.link("http://www.w3schools.com") + "</p>");
document.write("<p>Blink: " + txt.blink() + " (works only in Opera)</p>");

