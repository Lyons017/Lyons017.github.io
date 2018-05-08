"use strict";

var redLight = document.getElementById("redLight");
var greenLight = document.getElementById("greenLight");

var happy = document.getElementById("happy");

var abe = document.getElementById("abe");
var chubs = document.getElementById("chubs");
var gator = document.getElementById("gator");

greenLight.style.visibility = "hidden";
happy.style.visibility = "hidden";

var theWinner = document.getElementById("winnerSign");
theWinner.style.visibility = "hidden";

var chubsRacing = 0;
var gatorRacing = 0;
var abeRacing = 0;
var runFunction = 0;

function startRace() {       
    
    greenLight.style.visibility = "visible";
    redLight.style.visibility = "hidden";

    runFunction = setInterval(race, 30);

    function race() {
        var chubsRacing2 = (Math.random() * 10) + chubsRacing;
        var gatorRacing2 = (Math.random() * 10) + gatorRacing;
        var abeRacing2 = (Math.random() * 10) + abeRacing;

        chubs.style.marginLeft = chubsRacing2 + "px";
        gator.style.marginLeft = gatorRacing2 + "px";
        abe.style.marginLeft = abeRacing2 + "px";

        chubsRacing = chubsRacing2;
        gatorRacing = gatorRacing2;
        abeRacing = abeRacing2;

        var width = screen.width;

        if (chubsRacing >= width - 415)
        {            
            document.getElementById("winnerSign").innerHTML = "Gold Jacket. Green Jacket. Who give's a hoot? Chubs won!";
            document.getElementById("winnerSign").style.border = "3px solid black";   
            reset();                  
        }
        else if(gatorRacing >= width - 415)
        {            
            document.getElementById("winnerSign").innerHTML = "You took Chub's hand! The alligator won!";
            document.getElementById("winnerSign").style.border = "3px solid black";        
            reset();             
        }
        else if(abeRacing >= width - 415)
        {              
            document.getElementById("winnerSign").innerHTML = "I wouldn't tell a lie! Honest Abe is the winner!";
            document.getElementById("winnerSign").style.border = "3px solid black";
            reset();                               
        }       
    }  
}

function reset()
{
    theWinner.style.visibility = "visible";
    happy.style.visibility = "visible"; 
    redLight.style.visibility = "visible";
    greenLight.style.visibility = "hidden";

    clearInterval(runFunction)
}

function startOver(){
    location.reload();    
}
 