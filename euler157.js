function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}


// function bTest(b){

// 	if(b){

// 		return "true"
// 	} else {

// 		return "false"
// 	}
// }




// function diophantine(a,b,k) {



// 	if ( a>(20) ){

// 		return k

// 	} else {

// 		if ( b>(10*a) ){
// 			// debugger;
// 			a++
// 			b=a

			

// 		} else if (( 10*(a+b))%(a*b)==0  ){
// 			// debugger;
// 			// console.log("( "+a+", "+b+", "+((100*(a+b))/(a*b))+" )"   )
// 			b++
// 			k++



// 		} else {
// 			// debugger;
// 			b++
// 			// console.log(a+" , "+b)
// 		}

// 		return diophantine(a,b,k)

// 	}

// }

function diophantine(a,b,k) {



	if ( a>(20) ){

		return k

	} else {

		if ( b>(10*a) ){
			// debugger;
			a++
			b=a

			

		} else if (( 10*(a+b))%(a*b)==0  ){
			// debugger;
			console.log("( "+a+", "+b+", "+((10*(a+b))/(a*b))+" )"   )
			b++
			k++



		} else {
			// debugger;
			b++
			// console.log(a+" , "+b)
		}

		return diophantine(a,b,k)

	}

}