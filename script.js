let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    // habilidades[0].classList.add("Python");
    // habilidades[1].classList.add("R");
    // habilidades[2].classList.add("SQL");
    // habilidades[3].classList.add("Datamining");
    // habilidades[4].classList.add("Datavisualitation");
    // habilidades[5].classList.add("desarrollo");
    habilidades[0].classList.add("comunicacion");
    habilidades[1].classList.add("trabajo");
    habilidades[2].classList.add("creatividad");
    habilidades[3].classList.add("ofimatica");
    habilidades[4].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

function initMap() {
  // Crea un objeto LatLng para establecer la ubicación inicial del mapa
  var myLatLng = { lat: 37.7749, lng: -122.4194 };

  // Crea un objeto de mapa
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10, // Nivel de zoom inicial
    center: myLatLng, // Ubicación inicial del mapa
  });
}
