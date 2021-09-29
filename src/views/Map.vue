


<style>
#map {
	border: 1px solid orange;
	position: absolute;
	margin: 0;
	padding: 0;
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
 	
		},
		mounted(){
			// this.listar_vehiculo()
			// function listar_vehiculo(){
				var contenedor_vehiculo="";
				contenedor_vehiculo=document.getElementById("Camiones_Empresa_Transporte");
				var BaseFireba_datos_camiones="";
				var Nodo_camiones = db.database().ref("Camiones");
				Nodo_camiones.on("value", function(snapshot) {
					var datos_firebase = snapshot.val();
					console.log(datos_firebase);
					for (var datos_vehiculo in snapshot.val()){
						BaseFireba_datos_camiones +=  "<div class='vehiculo-empresa'>"+
                                      "<p class='vehiculo-empresa__placa'>"+datos_firebase[datos_vehiculo].Placa_unidad_transporte+"<span>Placa vehiculo</span>"+"</p>"+
                                      "<img src="+datos_firebase[datos_vehiculo].Imagen_vehiculo.url_imagen+" class='vehiculo-empresa__imagen'>"+
                                      "<div class='vehiculo-empresa__opciones'>"+  
                                        "<div class='trazabilidad-vehiculo'>"+
                                          "<div class='trazabilidad-vehiculo__imagen' onclick=trazabilidad_vehiculo('"+datos_firebase[datos_vehiculo].Placa_unidad_transporte+"')></div>"+
                                          "<div class='trazabilidad-vehiculo__descripcion'><p>Trazabilidad</p></div>"+
                                        "</div>"+
                                      "</div>"+
                                    "</div>"
					}
					contenedor_vehiculo.innerHTML=BaseFireba_datos_camiones;
				}, function(errorObject){
					console.log(" the read failed: "+errorObject.code);
				});  
			// }


			var unidad_transporte = "4587QWE";
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
					data_traking = Datos_trazabilidad[traking];console.log(data_traking)
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


			var Nodo_vehiculos = db.database().ref(unidad_transporte);
			Nodo_vehiculos.on("value", function(snapshot) {
				var pedido = snapshot.val();
				if(pedido != null){
					if (pedido.entrega != undefined){											
						var cargueMercaderia = pedido.entrega.myPos;console.log(cargueMercaderia);

						iconCargando.getSource().addFeature(new ol_Feature({
							geometry: new ol_Geom_Point(cargueMercaderia)
						}));

						// iconCargando.getSource().addFeature(new ol_Feature({
						// 	geometry: new ol_Geom_Point(entregaMercaderia),
						// 	name: 'Cargue producto',
						// 	population: 4000,
						// 	rainfall: 500
						// }));
						var markerCargando = new ol_Style_Style({
							image: new ol_Style_icon(({
								anchor: [0.5, 120],
								anchorXUnits: 'fraction',
								anchorYUnits: 'pixels',
								src: 'https://firebasestorage.googleapis.com/v0/b/edgar-902a5.appspot.com/o/camion.png?alt=media&token=7f036a9d-6ef1-4561-96c0-ccdcab4e6bf3'
							}))		
						});
						iconCargando.setStyle(markerCargando);
					}else{console.log("No existe carga mercaderia")}
					if (pedido.producto != undefined){											
						var entregaMercaderia = pedido.producto.myPos;console.log(entregaMercaderia);

						iconEntregado.getSource().addFeature(new ol_Feature({
							geometry: new ol_Geom_Point(entregaMercaderia)
						}));

						// iconCargando.getSource().addFeature(new ol_Feature({
						// 	geometry: new ol_Geom_Point(entregaMercaderia),
						// 	name: 'Cargue producto',
						// 	population: 4000,
						// 	rainfall: 500
						// }));
						var markerEntregadoMercaderia = new ol_Style_Style({
							image: new ol_Style_icon(({
								anchor: [0.5, 120],
								anchorXUnits: 'fraction',
								anchorYUnits: 'pixels',
								src: 'https://firebasestorage.googleapis.com/v0/b/edgar-902a5.appspot.com/o/inventario.png?alt=media&token=9097a3d7-3536-4f43-9a21-12e77f79d3c3'
							}))		
						});
						iconEntregado.setStyle(markerEntregadoMercaderia);
					}else{console.log("No existe carga mercaderia")}
				}else{console.log("No se realizo ningun pedido")}
			}, function (error) {
				console.log("Error: " + error.code);
			});


		}
	};

</script>

