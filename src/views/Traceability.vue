<style>
	.tabla-informacion__Cabecera {
		background: #18bc9c;
		box-shadow: 4px 0 0 0 #044034 inset, -4px 0 0 0 #044034 inset, 0 4px 0 0 #044034 inset, 0 -4px 0 0 #044034 inset;
		height: 10%;
		width: 100%;
		text-align: center;
		font-weight: bold;
	}

	.tabla-informacion__Cabecera h3 {
		text-shadow: 1px 1px 2px black, 0 0 1em #68f4d9, 0 0 0.2em #68f4d9;
		color: white;
		font-weight: bold;
	}

	.tabla-informacion__RegistroCantidad {
		color: black;
		border: 0px;
		margin: 0px;
		padding: 0px;
		padding-right: 3px;
		padding-left: 3px;
		font-size: 0.8em;
	}

	.tabla-informacion__RegistroCantidadU {
		color: black;
		border: 0px;
		border-bottom-right-radius: 6px;
		margin: 0px;
		padding: 0px;
		padding-right: 3px;
		padding-left: 3px;
		font-size: 0.8em;
	}

	.tabla-informacion__Cuerpo {
		height: 79%;
	}

	.tabla-informacion__Piepagina {
		background: -webkit-linear-gradient(top, #18bc9c, #ffffff);
		box-shadow: 0 5px 6px 0 #19242B;
		align-items: center;
		display: flex;
		height: 11%;
		justify-content: space-around;
	}
	/*________ DISEÑO PARA MOVIL _________*/
	.Informacion-movil {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		width: 100%;
	}

	.Informacion-movil__datos {
		box-shadow: 5px 0 6px 0 #19242B inset, -5px 0 6px 0 #19242B inset;
		border-top: 20px solid #044034;
		border-left: 20px solid #FEFEFE;
		border-right: 20px solid #FEFEFE;
		border-bottom: 20px solid #044034;
		text-align: center;
		font-size: 1em;
		overflow: auto;
		height: 65%;
		width: 100%;
	}

	.Informacion-movil__datos p {
		border-radius: 4px;
		font-weight: bold;
		font-size: 1.1em;
		border: 0px;
		margin: 0px;
		padding: 0px;
	}

	.Informacion-movil__datos span {
		display: block;
		border: 0px;
		border-bottom: 1px solid #19242B;
		font-size: 1em;
		margin: 0px;
		padding: 0px;
	}

	.Informacion-movil__imagen {
		border: 0px;
		background: -webkit-linear-gradient(#044034, #18bc9c);
		background: -o-linear-gradient(#044034, #18bc9c);
		background: linear-gradient(#044034, #18bc9c);
		align-self: center;
		box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.22) inset;
		text-align: center;
		margin: 0px;
		padding: 0px;
		height: 35%;
		width: 100%;
	}

	.Informacion-movil__imagen img {
		margin-top: 5px;
		height: 91%;
		width: 97%;
	}

	.boton_anterior {
		background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iX3gzNF9fMzdfIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTIyNC42MDQsMTIwLjc1NWMtNy41NTQtNy41MTYtMTkuNzc1LTcuNTE2LTI3LjMzLDBzLTcuNTU0LDE5LjY5OSwwLDI3LjIxNWwxNTguOTA5LDE1OC4zMzZMMTk3LjI3NCw0NjQuNjQyICAgICBjLTcuNTU0LDcuNTE3LTcuNTU0LDE5LjY5OSwwLDI3LjIxNWM3LjU1NCw3LjUxNywxOS43NzUsNy41MTcsMjcuMzMsMGwxNzEuNTg5LTE3MC45NzhjNC4wMzUtNC4wMTYsNS43MzctOS4zMTMsNS40Ny0xNC41NzIgICAgIGMwLjI2OC01LjI0MS0xLjQ1My0xMC41NTgtNS40Ny0xNC41NzRMMjI0LjYwNCwxMjAuNzU1eiBNNTM1LjUsMGgtNDU5QzM0LjI1MywwLDAsMzQuMjUzLDAsNzYuNXY0NTkgICAgIEMwLDU3Ny43NDcsMzQuMjUzLDYxMiw3Ni41LDYxMmg0NTljNDIuMjQ3LDAsNzYuNS0zNC4yNTMsNzYuNS03Ni41di00NTlDNjEyLDM0LjI1Myw1NzcuNzQ3LDAsNTM1LjUsMHogTTU3My43NSw1MzUuNSAgICAgYzAsMjEuMTE0LTE3LjExNywzOC4yNS0zOC4yNSwzOC4yNWgtNDU5Yy0yMS4xMzMsMC0zOC4yNS0xNy4xMzYtMzguMjUtMzguMjV2LTQ1OWMwLTIxLjExNCwxNy4xMTctMzguMjUsMzguMjUtMzguMjVoNDU5ICAgICBjMjEuMTMzLDAsMzguMjUsMTcuMTM2LDM4LjI1LDM4LjI1VjUzNS41eiIgZmlsbD0iIzE5MjQyYiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
		background-color: #eaeaea;
		-moz-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
		border: 0px;
		border-radius: 3px;
		display: table;
		margin: 0px;
		padding: 0px;
		height: 32px;
		width: 32px;
	}
	.boton_siguente {
		max-width: 256px;
		max-height: 256px;
		background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iX3gzNF9fMzdfIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTIyNC42MDQsMTIwLjc1NWMtNy41NTQtNy41MTYtMTkuNzc1LTcuNTE2LTI3LjMzLDBzLTcuNTU0LDE5LjY5OSwwLDI3LjIxNWwxNTguOTA5LDE1OC4zMzZMMTk3LjI3NCw0NjQuNjQyICAgICBjLTcuNTU0LDcuNTE3LTcuNTU0LDE5LjY5OSwwLDI3LjIxNWM3LjU1NCw3LjUxNywxOS43NzUsNy41MTcsMjcuMzMsMGwxNzEuNTg5LTE3MC45NzhjNC4wMzUtNC4wMTYsNS43MzctOS4zMTMsNS40Ny0xNC41NzIgICAgIGMwLjI2OC01LjI0MS0xLjQ1My0xMC41NTgtNS40Ny0xNC41NzRMMjI0LjYwNCwxMjAuNzU1eiBNNTM1LjUsMGgtNDU5QzM0LjI1MywwLDAsMzQuMjUzLDAsNzYuNXY0NTkgICAgIEMwLDU3Ny43NDcsMzQuMjUzLDYxMiw3Ni41LDYxMmg0NTljNDIuMjQ3LDAsNzYuNS0zNC4yNTMsNzYuNS03Ni41di00NTlDNjEyLDM0LjI1Myw1NzcuNzQ3LDAsNTM1LjUsMHogTTU3My43NSw1MzUuNSAgICAgYzAsMjEuMTE0LTE3LjExNywzOC4yNS0zOC4yNSwzOC4yNWgtNDU5Yy0yMS4xMzMsMC0zOC4yNS0xNy4xMzYtMzguMjUtMzguMjV2LTQ1OWMwLTIxLjExNCwxNy4xMTctMzguMjUsMzguMjUtMzguMjVoNDU5ICAgICBjMjEuMTMzLDAsMzguMjUsMTcuMTM2LDM4LjI1LDM4LjI1VjUzNS41eiIgZmlsbD0iIzE5MjQyYiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
		background-color: #eaeaea;
		border: 0px;
		border-radius: 3px;
		display: table;
		margin: 0px;
		padding: 0px;
		height: 32px;
		width: 32px;
	}
	/************ diseño de punto de geolocalizacion ***********/
	.TRACKING__DESACTIVADO {
		box-shadow: 0 0 0 1px #19242B inset, 0 0 6px 2px #ffffff inset, 0 0 9px 7px #585757 inset, 0 0 19px 17px #eaeaea inset, 0 0 2px 1px #eaeaea;
		border: 0px;
		border-radius: 50%;
		color: transparent;
		display: table;
		margin: 0px;
		margin-left: 7px;
		font-size: bold;
		padding: 0px;
		height: 30px;
		width: 30px;
	}
	#Tracking-estado {
		align-self: flex-center;
		box-shadow: 0 0 0 1px #19242B inset, 0 0 6px 2px #ffffff inset, 0 0 9px 7px #585757 inset, 0 0 19px 17px #eaeaea inset, 0 0 2px 1px #eaeaea;
		border: 0px;
		border-radius: 50%;
		color: transparent;
		display: table;
		margin: 0px;
		margin-left: 7px;
		font-size: bold;
		padding: 0px;
		height: 30px;
		width: 30px;
	}
</style>
<template>
	<div id="app">
		<button @click="logout()">salir</button>
		<div id="infoTRACKING"></div>
		<div class="tabla-informacion">
			<div class="tabla-informacion__Cabecera">
				<h3>VEHICULO</h3>
			</div>
			<div class="tabla-informacion__Cuerpo">
				<div class="Informacion-movil">
					<div class="Informacion-movil__imagen">
						<img src="https://firebasestorage.googleapis.com/v0/b/edgar-902a5.appspot.com/o/toyota%20hino.png?alt=media&token=b7a3b8ac-4693-4c5e-93e9-db9f94851b93"/>
					</div>
					<div class="Informacion-movil__datos">
						<div class="tabla-informacion__descripcion">
							<p>Placa de circulacion</p><span id="V_PLACA_VEHICULO">4587TFR</span>
							<p>Capacidad de carga</p><span id="V_PLACA_REMOLQUE">15 toneldas</span>
							<p>Tipo de remolque</p><span id="V_TIPO_REMOLQUE">Caja abierta</span>
							<p>Longitud vehiculo</p><span id="V_VEHICULO_LONGITUD">15 Mtrs.</span>
							<p>Jorge Alegre</p><span id="V_VEHICULO_ESTADO"></span>
						</div>
						<div class="tabla-informacion__datos"></div>
					</div>
				</div>
			</div>
			<div class="tabla-informacion__Piepagina">
				<div>
					<p @click="producto()">Cargue Productos</p>
				</div>
				<div>
					<label id="Tracking-estado" class="TRACKING__DESACTIVADO">.</label>
				</div>
				<div>
					<p @click="entrega()">Entrega Productos</p>
				</div>
			</div>
		</div>
		<div id="map"></div>
	</div>
</template>
<script>
	import db from '@/firebase/init'
	import firebase from 'firebase'
	import "ol/ol.css";
	import ol_Map from "ol/Map";
	import ol_View from "ol/View";
	import ol_Geolocation from 'ol/Geolocation';
	import { defaults as defaultControls, ScaleLine } from "ol/control";
	import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
	import {OSM, Vector as VectorSource} from 'ol/source';
	const view = new ol_View({center: [0, 0],zoom: 2})
	const map = new ol_Map({})
	const geolocation = new ol_Geolocation({
		projection: map.getView().getProjection(),
		tracking: true,
		trackingOptions:{
			enableHighAccuracy:true,
			maximunAge:9000
		}
	});
	geolocation.setTracking(true);
	const vehiculoPlaca = String;
	export default {
		name:'geolocalizacion',
		data(){
			return{
				user:null,
				traceability:'',
				intervalid1: '',
				unidad:String,
				placa:String,
			}
		},
		mounted : function(){
			this.todo()     
		},
		methods:{
			logout(){
				firebase.auth().signOut().then(() => {
					this.$router.push({name: 'Login'})
				})
			},
			todo : function(){    
			firebase.auth().onAuthStateChanged(user => {
                    this.user=user;
                    console.log(user.email);
					/*----------------- IDENTIFICAR VEHCIUCLO -------------------*/
					 var DB_firebase = db.database().ref();
					 DB_firebase.on("value", function(snapshot) {
					    var base_tiempo_real = snapshot.val();
					    var Datos_camiones = base_tiempo_real.Camiones;
					      for (var camion in Datos_camiones){
					      	if(Datos_camiones[camion].correo == user.email){
					      		// var vehiculoPlaca = Datos_camiones[camion].Placa_unidad_transporte;
					      	}
					      }
					  }, function (error) {
					    alert('No dentra al snapshot');
					    console.log("Error: " + error.code);
					  });
					/*----------------- FIN IDENTIFICAR VEHICULO ----------------*/
				
    				this.traceability = setInterval(() => {
					        geolocation.on('change:position', function() {
	                		if (this.user == null){
								clearInterval(this.traceability)
					  		}
                			console.log(user);
							var placa_registre = "3600AAA";
							var h=0, m=0, s=0, hora_actual=""
							var f="", m="", fecha_actual="", today=""
							var myPos="";
							var trackingJSON = new Object();
							var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
							var f = new Date(); 
							fecha_actual = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();			                    
							today=new Date(); 
							h=today.getHours(); 
							m=today.getMinutes(); 
							s=today.getSeconds(); 
							hora_actual = h+":"+m+":"+s;
							trackingJSON = { 
								fecha: fecha_actual,
								hora: hora_actual,
								exactitud_en_METROS: geolocation.getAccuracy(),
								posicion: geolocation.getPosition()
							}
							console.log(trackingJSON);
							db.database().ref("trazabilidad").child(placa_registre).push(trackingJSON)
							console.log("Envia ubicacion")
							});
					}, 30000)                
            })


 
				// this.intervalid1 = setInterval(function(){
				// 	geolocation.on('change', function() {
				// 		document.getElementById("Tracking-estado").style.boxShadow='0 0 0 1px #8D8D06 inset, 0 0 6px 2px #DBDB1F inset, 0 0 9px 7px #B4B417 inset, 0 0 19px 17px #DBDB1F inset, 0 0 2px 1px #DBDB1F';
				// 	});
				// 	geolocation.on('error', function(error) {
				// 		var estado__Tracking=document.getElementById("Tracking-estado");
				// 		var info = document.getElementById('infoTRACKING');
				// 		info.innerHTML = "Error con la geolocalizacion";
				// 		info.style.display = '';
				// 		estado__Tracking.style.boxShadow='0 0 0 1px #A70014 inset, 0 0 6px 2px #FFFFFF inset, 0 0 9px 7px #FF3532 inset, 0 0 19px 17px #FF4B4B inset, 0 0 2px 1px #FF4B4B';
				// 	});
				// 	geolocation.on('change:position', function() {
				// 		var placa_registre = "3011RYY";
				// 		var h=0, m=0, s=0, hora_actual=""
				// 		var f="", m="", fecha_actual="", today=""
				// 		var myPos="";
				// 		var trackingJSON = new Object();
				// 		var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
				// 		var f = new Date(); 
				// 		fecha_actual = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();			                    
				// 		today=new Date(); 
				// 		h=today.getHours(); 
				// 		m=today.getMinutes(); 
				// 		s=today.getSeconds(); 
				// 		hora_actual = h+":"+m+":"+s;
				// 		trackingJSON = { 
				// 			fecha: fecha_actual,
				// 			hora: hora_actual,
				// 			exactitud_en_METROS: geolocation.getAccuracy(),
				// 			posicion: geolocation.getPosition()
				// 		}
				// 		console.log(trackingJSON);
				// 		db.database().ref("Trazabilidad").child(placa_registre).push(trackingJSON)
				// 	});
				// }, 30000);
			},
			producto: function(){
				const placaVehiculo="3600AAA";
				geolocation.once('change:position', function (evt) {
					var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
					var f = new Date(); 
					var fecha_actual = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
					var today=new Date(); 
					var h=today.getHours(); 
					var m=today.getMinutes(); 
					var s=today.getSeconds(); 
					var hora_actual = h+":"+m+":"+s;
					var myPos = geolocation.getPosition();
					var  GEOLOCATION_OPENLAYERS={
						myPos: myPos,
						fecha: fecha_actual,
						hora: hora_actual
					}
					db.database().ref(placaVehiculo).child("producto").set(GEOLOCATION_OPENLAYERS)
					console.log(GEOLOCATION_OPENLAYERS);
				});
			},
			entrega: function(){
				const placaVehiculo="3600AAA";
				geolocation.once('change:position', function (evt) {
					var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
					var f = new Date(); 
					var fecha_actual = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
					var today=new Date(); 
					var h=today.getHours(); 
					var m=today.getMinutes(); 
					var s=today.getSeconds(); 
					var hora_actual = h+":"+m+":"+s;
					var myPos = geolocation.getPosition();
					var  GEOLOCATION_OPENLAYERS={
						myPos: myPos,
						fecha: fecha_actual,
						hora: hora_actual
					}
					db.database().ref(placaVehiculo).child("entrega").set(GEOLOCATION_OPENLAYERS)
					console.log(GEOLOCATION_OPENLAYERS);
				});
			}
		}
	};
</script>














