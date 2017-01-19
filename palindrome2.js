function palindrome(){

	for(var k=1; k<=999; k++){

		var n=1000-k

		var a=Math.floor(n/(100))
		var b=Math.floor((n-(a*100))/10)
		var c=n%10

		var pal=(a*(100000))+(b*(10000))+(c*(1000))+(c*(100))+(b*(10))+a

		var sq=Math.pow(pal,0.5)

		var int=Math.floor(sq)

		

		for(var i=int; i>100; i--){

			if((pal%i==0)&&((pal/i)<1000)){

				console.log(pal)
				console.log(i)

			}

		}

	}

}