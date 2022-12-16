


<style>
#map {
	position: absolute;
	margin:0px;
	padding:0px;
	border:0px;
	height: 100%;
	width: 100%;
}
</style>
<template>
	<div id="app">
		<div id="visualizar_vehiculos_trazabilidad" class="OpcionCamionOcultar off-canvas-wrapper" data-off-canvas-wrapper>
			<div id="trazabilidad_vehiculo__titulo"><p>Camiones</p><span id="VistaTrazabilidad_camiones">X</span></div>
			<div id="trazabilidad_vehiculo__camiones" class="Contendor-camiones">
				<div id="Camiones_Empresa_Transporte" class="Contendor-camiones__lista"></div>
			</div>            
		</div>
		<div class="menu-niveluno__descripcion"><p id="tabla_camiones_menu">Trazabilidad</p></div>
		<button class="btn-salir" @click="logout()">X</button>
		<div id="map"></div>
	</div>
</template>
<!-- <script type="text/javascript"></script>> -->
<script>
import db from '@/firebase/init'
import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import LinearRing from 'ol/geom/LinearRing';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {
	LineString,
	MultiLineString,
	MultiPoint,
	MultiPolygon,
	Point,
	Polygon,
} from 'ol/geom';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';
import ol_Style_Style from 'ol/style/Style';
import ol_Style_Circle	from 'ol/style/Circle';
import ol_Style_Fill from 'ol/style/Fill';
import ol_Style_Stroke	from 'ol/style/Stroke';
import {Icon, Style} from 'ol/style';
import ol_Style_icon from 'ol/style/Icon'
import ol_Feature from 'ol/Feature';
import ol_Geom_Point from 'ol/geom/Point';
import ol_Layer_Vector from 'ol/layer/Vector'
import ol_Source_Vector from 'ol/source/Vector'


export default {
	name:'geolocalizacion',
	data(){
		return{

		}
	},
	methods:{

		logout(){
			this.$router.push({name: 'Login'})
		}
			
		
	},
	mounted(){


		/*colocar los camiones de la trazabilidad */
		/*___________________________________________ [[ 1 ]] Iniciaremos firebase ___________________________________________*/



		var Nodo_camiones = db.database().ref("Camiones");
		console.log(Nodo_camiones);



		/*________________________________________ [[ 2 ]] listar vehiculos empresa __________________________________________*/
		
		var contenedor_vehiculo=document.getElementById("Camiones_Empresa_Transporte");
		var BaseFireba_datos_camiones="";

		Nodo_camiones.on("value", function(snapshot) {
			var datos_firebase = snapshot.val();
			var datos_vehiculo=[];
			for (datos_vehiculo in snapshot.val()){
				BaseFireba_datos_camiones +=  "<div class='vehiculo-empresa'>"+
				"<p class='vehiculo-empresa__placa'>"+datos_firebase[datos_vehiculo].Placa_unidad_transporte+"<span>Placa vehiculo</span>"+"</p>"+
				"<img src="+datos_firebase[datos_vehiculo].Imagen_vehiculo.url_imagen+" class='vehiculo-empresa__imagen'>"+
				"<div class='vehiculo-empresa__opciones'>"+  
				"<div class='trazabilidad-vehiculo'>"+
				"<div class='trazabilidad-vehiculo__imagen' @click=trazabilidad("+datos_firebase[datos_vehiculo].Placa_unidad_transporte+")></div>"+
				"<div class='trazabilidad-vehiculo__descripcion'><p>Trazabilidad</p></div>"+
				"</div>"+
				"</div>"+
				"</div>"
			}
			contenedor_vehiculo.innerHTML=BaseFireba_datos_camiones;
		}, function(errorObject){
			console.log("error");
		});  
		




// Menu control de los camiones TRAZABILIDAD
document.getElementById('tabla_camiones_menu').addEventListener('click', function() {
	var vehiculos_trazabilidad = document.getElementById("visualizar_vehiculos_trazabilidad");
	vehiculos_trazabilidad.classList.remove('OpcionCamionOcultar');
	vehiculos_trazabilidad.classList.add('OpcionCamionVer');
});

document.getElementById('VistaTrazabilidad_camiones').addEventListener('click', function() {
	var vehiculos_trazabilidad = document.getElementById("visualizar_vehiculos_trazabilidad");
	vehiculos_trazabilidad.classList.add('OpcionCamionOcultar');
	vehiculos_trazabilidad.classList.remove('OpcionCamionVer');
});


var unidad_transporte = "3600AAA";
			const map = new Map({
				layers: [
				new TileLayer({
					source: new OSM(),
				}),
				],
				target: 'map',
				view: new View({
					center: [0, 0],
					zoom: 2,
				}),
			});

			var iconCargando = new ol_Layer_Vector({ 
				source: new ol_Source_Vector()
			});
			map.addLayer(iconCargando);

			var iconEntregado = new ol_Layer_Vector({ 
				source: new ol_Source_Vector()
			});
			map.addLayer(iconEntregado);

			var iconFeature = new ol_Layer_Vector({
				source: new ol_Source_Vector()
			});				

			map.addLayer(iconFeature);	

			var DB_firebase = db.database().ref(); //Variable (DB_firebase) para representar la base de datos de firebase
			DB_firebase.on("value", function(snapshot) {
				var base_tiempo_real = snapshot.val();
				var Datos_trazabilidad = base_tiempo_real.trazabilidad[unidad_transporte]; console.log(Datos_trazabilidad);
				var traking;
				var data_traking;
				for (traking in Datos_trazabilidad){
					data_traking = Datos_trazabilidad[traking];
					iconFeature.getSource().addFeature(new ol_Feature({
						geometry: new ol_Geom_Point(data_traking.posicion)
					}));
				}
			}, function (error) {
				console.log("Error: " + error.code);
			});
			var iconStyle = new ol_Style_Style({
				image: new ol_Style_Circle({
					radius: 6,
					fill: new ol_Style_Fill({
						color: '#18BC9C' //FONDO DE cIRCLE
					}),
					stroke: new ol_Style_Stroke({
						color: '#fff', //BORDE DE CIRCLE
						width: 2
					})
				})
			});
			iconFeature.setStyle(iconStyle);

}
};

</script>

