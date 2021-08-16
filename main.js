canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed>=97 && keyPressed<=122) || (keyPressed>=65 && keyPressed<=90))
    {
        console.log("It is an alphabet key");
        document.getElementById("key").innerHTML="It is an alphabet key";
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.font = "bold small-caps 65px Arial";
        ctx.fillText("Alphabet Key",150,200);
        
    }
    else if(keyPressed>=48 && keyPressed<=57)
    {
        console.log("It is an Numerical key");
        document.getElementById("key").innerHTML="It is an numerical key";
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.font = "bold small-caps 65px Arial";
        ctx.fillText("Numercial Key",150,200);
        
    }
    else if(keyPressed>=37 && keyPressed<=40)
    {
        console.log("It is an Arrow key");
        document.getElementById("key").innerHTML="It is an Arrow key";
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.font = "bold small-caps 65px Arial";
        ctx.fillText("Arrow Key",150,200);
    }
    else if(keyPressed==17 || keyPressed==18 || keyPressed==27)
    {
        console.log("It is an Special key");
        document.getElementById("key").innerHTML="It is an Special key";
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.font = "bold small-caps 65px Arial";
        ctx.fillText("Special Key",150,200);
    }  
    else
    {
        console.log("It is an Other key");
        document.getElementById("key").innerHTML="It is an Other key";
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.font = "bold small-caps 65px Arial";
        ctx.fillText("Other Key",150,200);
    }
}    