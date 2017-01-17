
// Problem 1

function textAppear(){

	document.getElementById("div1").style.display="inline"
}

function changeText(){

	document.getElementById("div1").innerText="No, I'm right."
}

// Problem 2

document.getElementById("hoverHeader").addEventListener("mouseover", function(){alert("Hey, I told you not to hover me!")})


// Problem 3

window.addEventListener("keypress", function(){
    var x = event.keyCode
    var y = String.fromCharCode(x)
    document.getElementById("keyStroke").append(y)
    ;
});

// Problem 4


function myFunction() {
    var x, z, text

    var j = false

    
    x = document.getElementById("userName").value
    z = document.getElementById("passWord").value
    
    for(i=0;i<x.length;i++){

    	if(isNaN(x[i])){
    	} else{
    		j = true
    	}
    }
 
    if(j == true && z == "12345678"){

    	text="You're logged in!"
    } else{

    	text="Incorrect"
    }


    document.getElementById("demo").innerHTML = text;
}




