//planets

 var btnContainer = document.getElementById("planet-links");
 var links = btnContainer.getElementsByClassName("planet");
 for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
       var current = document.getElementsByClassName("planet-active");
      current[0].className = current[0].className.replace("planet","planet-active");
       this.className = "planet-active";
     });
   }

function changeMoon() {
    document.getElementById("planet-img").src = "assets/destination/image-moon.webp";
    document.getElementById("planet-heading").innerText = "MOON"; 
    document.getElementById("message").innerHTML = "See our planet as you’ve never seen it before. A perfect <br> relaxing trip away to help regain perspective and come <br> back refreshed. While you’re there, take in some history <br> by visiting the Luna 2 and Apollo 11 landing sites."
    document.getElementById("kilometers").innerHTML= "384,400 KM";
    document.getElementById("travel-time").innerHTML= "3 DAYS";
  
}
function changeMars() {
    document.getElementById("planet-img").src = "assets/destination/image-mars.webp";
    document.getElementById("planet-heading").innerText = "MARS"; 
    document.getElementById("message").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to <br> tackle Olympus Mons, the tallest planetary mountain in <br> our solar system. It’s two and a half times the size of <br> Everest!"
    document.getElementById("kilometers").innerHTML= "225 MIL. KM";
    document.getElementById("travel-time").innerHTML= "9 MONTHS";
}
function changeEuropa() {
    document.getElementById("planet-img").src = "assets/destination/image-europa.webp";
    document.getElementById("planet-heading").innerText = "EUROPA"; 
    document.getElementById("message").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, <br> Europa is a winter lover’s dream. With an icy surface, it’s <br> perfect for a bit of ice skating, curling, hockey, or simple <br> relaxation in your snug wintery cabin."
    document.getElementById("kilometers").innerHTML = "628 MIL. KM";
    document.getElementById("travel-time").innerHTML= "3 YEARS";
}
function changeTitan() {
    document.getElementById("planet-img").src = "assets/destination/image-titan.webp";
    document.getElementById("planet-heading").innerText = "TITAN"; 
    document.getElementById("message").innerHTML = "The only moon known to have a dense atmosphere other <br> than Earth, Titan is a home away from home (just a few <br> hundred degrees colder!). As a bonus, you get striking <br> views of the Rings of Saturn."
    document.getElementById("kilometers").innerHTML = "1.6 BIL. KM";
    document.getElementById("travel-time").innerHTML= "7 YEARS"

}

