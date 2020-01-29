

var mymap = L.map('mapa',{scrollWheelZoom:false}).setView([5.067, -75.517], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

   
    //FUNCION DE PRUEBA PARA BD
    function prueba(){
      fetch("/rutas.")
      .then(res => res.json())
      .then(data=>{
        console.log(data)
      })
    };

//filtro

//distancia
var rangeslider = document.getElementById("myRange");
var distancia = document.getElementById("demo");
distancia.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  distancia.innerHTML = this.value;
}

//elevación
var rangeslider2 = document.getElementById("myRange2");
var elevacion = document.getElementById("alt");
elevacion.innerHTML = rangeslider2.value;

rangeslider2.oninput = function() {
  elevacion.innerHTML = this.value;
}

//carga de markers inicial
var listaMarker =[
  {
    "nombreMarker": "La puerta",
    "leyenda": "Una ruta para ver Manizales desde lo alto, ideal para disfrutar del campo y la naturaleza a pocos kilometros de la ciudad.",
    "imagen": "../images/rutas/chipre/marker.jpg",
    "latitud" : "5.062964",
    "longitud" : "-75.500913",
  },
  {
    "nombreMarker": "Pineras",
    "leyenda": "Una ruta en lo alto, ideal para forzar mente y cuerpo con una magica recompensa un bosque de pinos",
    "imagen": "../images/rutas/chipre/marker.jpg",
    "latitud" : "5.0756596",
    "longitud" : "-75.5304328",
  }
];

    // create custom icon
    var iconMarker = L.icon({
      iconUrl: '../images/icons/logoMarker.png',
      iconSize: [50, 50], // size of the icon
      popupAnchor: [0,-15]
      });

  // create popup contents
  var customPopup = "<span class='titloop t-center '>La puerta</span><br/><img src='../images/rutas/chipre/marker.jpg'><br><span class='txtPloop'><b>Distancia:</b> 12.58 km<br><b>Desnivel +:</b> 366m<br><b>Complejidad:</b> Bajo</span>";
  
  // specify popup options 
  var customOptions =
      {
      'maxWidth': '500',
      'className' : 'custom'
      }
  
  // create marker object, pass custom icon as option, pass content and options to popup, add to map
  L.marker([5.062964,-75.5304328], {icon: iconMarker}).bindPopup(customPopup,customOptions).addTo(mymap);
 











