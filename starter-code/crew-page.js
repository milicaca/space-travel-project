var slider = document.getElementById("carousel");
var btns = slider.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName ("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

   function douglas() {
    document.getElementById("crew-pic").src = "assets/crew/image-douglas-hurley.webp";
    document.getElementById("crew-function").innerText = "PILOT"; 
        document.getElementById("crew-name").innerHTML = "DOUGLAS HURLEY"
        document.getElementById("crew-description").innerHTML= "Douglas Gerald Hurley is an American engineer, former <br> Marine Corps pilot and former NASA astronaut. He <br> launched into space for the third time as commander of <br> Crew Dragon Demo-2.";
     
    }

function mark() {
    document.getElementById("crew-pic").src = "assets/crew/image-mark-shuttleworth.webp";
    document.getElementById("crew-function").innerText = "MISSION SPECIALIST"; 
        document.getElementById("crew-name").innerHTML = "MARK SHUTTLEWORTH"
        document.getElementById("crew-description").innerHTML= "Mark Richard Shuttleworth is the founder and CEO of <br> Canonical, the company behind the Linux-based Ubuntu <br> operating system. Shuttleworth became the first South <br> African to travel to space as a space tourist.";
     
    }

function victor() {
document.getElementById("crew-pic").src = "assets/crew/image-victor-glover.webp";
document.getElementById("crew-function").innerText = "PILOT"; 
    document.getElementById("crew-name").innerHTML = "VICTOR GLOVER"
    document.getElementById("crew-description").innerHTML= "Pilot on the first operational flight of the SpaceX Crew <br> Dragon to the International Space Station. Glover is a <br> commander in the U.S. Navy where he pilots an F/A-18.He <br> was a crew member of Expedition 64, and served as a <br> station systems flight engineer. ";
 
}

function ano() {
    document.getElementById("crew-pic").src = "assets/crew/image-anousheh-ansari.webp";
    document.getElementById("crew-function").innerText = "FLIGHT ENGINEER"; 
        document.getElementById("crew-name").innerHTML = "ANOUSHEH ANSARI"
        document.getElementById("crew-description").innerHTML= "Anousheh Ansari is an Iranian American engineer and <br> co-founder of Prodea Systems. Ansari was the fourth <br> self-funded space tourist, the first self-funded woman to <br> fly to the ISS, and the first Iranian in space.";
     
    }

   