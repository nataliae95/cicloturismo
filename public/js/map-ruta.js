
    //Mapa y grafico
var map = new L.map('mapaRuta',{scrollWheelZoom:false});
        var url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attr ='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            service = new L.TileLayer(url);
        var el = L.control.elevation();
        el.addTo(map);
        var g=new L.GPX("../rutas/altoDeLetras.gpx", {
            async: true,
             marker_options: {
                startIconUrl: './lib/leaflet-gpx/pin-icon-start.png',
                endIconUrl: './lib/leaflet-gpx/pin-icon-end.png',
                shadowUrl: './lib/leaflet-gpx/pin-shadow.png',
              }
        });
        g.on('loaded', function(e) {
                map.fitBounds(e.target.getBounds());
        });
        g.on("addline",function(e){
            el.addData(e.line);
        });
        g.addTo(map);
        map.addLayer(service);
        
  