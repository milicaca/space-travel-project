var slider = document.getElementById("space-slider");
var btns = slider.getElementsByClassName("space");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName ("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


function launch() {
    document.getElementById("tech-pic").src = "assets/technology/image-launch-vehicle-portrait.jpg";
    document.getElementById("space-name").innerText = "LAUNCH VEHICLE"; 
    document.getElementById("space-info").innerHTML= "A launch vehicle or carrier rocket is a rocket-propelled <br> vehicle used to carry a payload from Earth's surface to <br> space, usually to Earth orbit or beyond. Our WEB-X <br> carrier rocket is the most powerful in operation. Standing <br> 150 metres tall, it's quite an awe-inspiring sight on the <br> launch pad!";
     
    }

function spaceport() {
    document.getElementById("tech-pic").src = "assets/technology/image-spaceport-portrait.jpg";
    document.getElementById("space-name").innerText = "SPACEPORT"; 
    document.getElementById("space-info").innerHTML= "A spaceport or cosmodrome is a site for launching (or <br> receiving) spacecraft, by analogy to the seaport for ships <br> or airport for aircraft. Based in the famous Cape <br> Canaveral, our spaceport is ideally situated to take <br> advantage of the Earth’s rotation for launch.";
         
     }

function capsule() {
    document.getElementById("tech-pic").src = "assets/technology/image-space-capsule-portrait.jpg";
    document.getElementById("space-name").innerText = "SPACE CAPSULE"; 
    document.getElementById("space-info").innerHTML= "A space capsule is an often-crewed spacecraft that uses <br> a blunt-body reentry capsule to reenter the Earth's <br> atmosphere without wings. Our capsule is where you'll <br> spend your time during the flight. It includes a space <br> gym, cinema, and plenty of other activities to keep you <br> entertained.";
   
    }