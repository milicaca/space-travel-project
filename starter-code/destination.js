//planets
let activeIndex = 0;
function createElement(data) {
  Object.values(data.destinations).map((item, index) => {
    const para = document.createElement("li");
    para.innerHTML = `<a href="#" id="moon" class="planet" onClick="changeActiveIndex(${index})">${item.name} </a>`;
    document.getElementById("planet-links").appendChild(para);
  });
  changeActivePlanet();
}

function changePlanetInfo(data) {
  Object.values(data.destinations).map((item, index) => {
    index === activeIndex
      ? ((document.getElementById("planet-img").src = item.images.png),
        (document.getElementById("planet-heading").innerText =
          item.name.toUpperCase()),
        (document.getElementById("message").innerHTML = item.description),
        (document.getElementById("kilometers").innerHTML = item.distance),
        (document.getElementById("travel-time").innerHTML = item.travel))
      : "";
  });
}
const fetchData = async () => {
  fetch("./data.json").then(async function (response) {
    data = await response.json();
    createElement(data);

    changePlanetInfo(data);
  });
};

fetchData();

const changeActiveIndex = (index) => {
  activeIndex = index;
  changePlanetInfo(data);
  changeActivePlanet();
};

const changeActivePlanet = () => {
  let links = document.querySelectorAll(".planets>li>a");
  links = [...links];
  links.map((item, index) => {
    index === activeIndex
      ? (item.className = "planet-active")
      : (item.className = "planet");
  });
};
