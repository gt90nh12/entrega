<style>
.tabla-informacion__Piepagina {
	background: -webkit-linear-gradient(top, #00396b, #ffffff);
	box-shadow: 0 5px 6px 0 #19242B;
	align-items: center;
	display: flex;
	height: 11%;
	justify-content: space-around;
}
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
	border-top: 20px solid #012443;
	border-left: 20px solid #FEFEFE;
	border-right: 20px solid #FEFEFE;
	border-bottom: 20px solid #012443;
	text-align: center;
	font-size: 1em;
	overflow: auto;
	height: 65%;
	width: 100%;
}

.Informacion-movil__datos p {
	font-weight: bolder;
	display: block;
	border: 0px;
	border-bottom: 1px solid #19242B;
	font-size: 1em;
	margin: 0px;
	padding: 8px;
}
.Informacion-movil__imagen {
	border: 0px;
	background: -webkit-linear-gradient(#73a6d1, #00396b);
	background: -o-linear-gradient(#73a6d1, #00396b);
	background: linear-gradient(#73a6d1, #00396b);
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
	height: 50px;
	width: 50px;
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
	height: 50px;
	width: 50px;
}
/**************** Diseño de perfil de usuario ****************/
.perfil{
	border: #00396b 8px outset;
	display: flex;
}
.perfil-nombre{
	width: 80%;
	text-align: left;
	padding-left: 5px;
}
.perfil-nombre-usuario{
	margin: 0px;
	border:0px;
	padding: 0px;
}
.perfil-nombre-cargo{
	font-size: 0.7em;
	font-weight: bold;
	font-size: center;
	margin: 0px;
	border:0px;
	padding: 0px;
}
.perfil-imagen{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20%;
}
.perfil-imagen img{
	height: 43px;
	width: 43px;
	border-radius: 50%;
}
/****************** Diseño general plantilla *****************/
#app{
	margin:5px;
}
.btn-salir{
	background: red;
	border:0px;
	color: #fff;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin: 0.5em;
}
/****************** Estilos de los camiones  ******************/
#trazabilidad_vehiculo{
	background:red;
	&__titulo{
		background:rgba(128,128,128,.2);
		/*box-shadow: 5px 0 15px 0 color(plomo-base)inset,
		           -5px 0 15px 0 color(plomo-base)inset,
		            0  5px 15px 0 color(plomo-base)inset,
		            0  -5px 15px 0 color(plomo-base)inset;*/
		            border:0px;
		            align-items:center;
		            display: flex;
		            justify-content: space-between;
		            margin:0px;
		            padding:0px;
		            height: 40px;
		            p{
		            	align-self:center;
		            	//background:color(verde-claro);
		            	color:color(blanco);
		            	border:0px;
		            	margin:0px;
		            	text-align: center;
		            	padding:0px;
		            	font-size:1.5em;
		            	margin-left: 10px;
		            }
		            span{
		            	//display: table;
		            	//align-self: center;
		            	background:color(verde-base);
		            	box-shadow:0 0 0 3px rgba(255,255,255,.5);
		            	border-radius:3px;
		            	border:0px;
		            	color:color(blanco);
		            	margin: 0px;
		            	margin-right: 10px;
		            	padding-top: 3px;
		            	padding-bottom: 3px;
		            	padding-left:10px;
		            	padding-right:9px;
		            	//height: 15px;
		            	//font-size: 15;
		            	font-weight: bold;
		            	//height: 30px;
		            }
		        }
		        &__camiones{
		        	display: flex;
		        	height: 255px;
		        	width: 100%;
		        }
		    }
		    .Contendor-camiones{
		    	box-shadow: 1px 0 0 0 color(plomo-base)inset,
		    	-1px 0 0 0 color(plomo-base)inset,
		    	0 -1px 0 0 color(plomo-base)inset,
		    	0 1px 3px 0 color(plomo-base)inset,;
		    	border:0px;
		    	overflow: auto;
		    	margin:0px;
		    	padding:0px;
		    	height:255px;
		    	width: 100%;

		    	&__lista{
		    		align-items:center;

		    		border:0px;
		    		display:flex;
		    		flex-wrap:wrap;
		    		justify-content:center;
		    		margin:0px;
		    		padding:0px;
		    		height: 245px;
		    		width: 100%;
		    	}
		    }
		    .vehiculo-empresa{
		    	background:-webkit-linear-gradient(top,#C7C5C3,color(plomo-claro),#C7C5C3,color(plomo-claro));
		    	box-shadow: 0 0 0 1px color(plomo-base),
		    	0 30px 0 0 color(blanco)inset,
		    	0 -30px 0 0 color(blanco)inset,

		    	10px 0 0 0 color(blanco)inset,
		    	-10px 0 0 0 color(blanco)inset,

		    	0 7px 8px 0 color(plomo);
		    	border:0px;
		    	border-radius:15px;   	
		    	margin:15px;
		    	display:flex;
		    	justify-content:center;
		    	align-items:center;
		    	flex-direction:column;
		    	padding:0px;
		    	height:225px;
		    	width:150px;
		    	&__placa{
		    		align-items:flex-end;
		    		align-items:center;
		    		background:#00A2AA;

		    		border:0px;
		    		border-bottom-left-radius:11px;
		    		border-bottom-right-radius:11px;
		    		box-shadow: 1px 0 0 0 color(plomo-base)inset,
		    		4px 0 0 0 color(blanco)inset,
		    		5px 0 0 0 color(plomo-base)inset,
		    		-1px 0 0 0 color(plomo-base) inset,
		    		-4px 0 0 0 color(blanco) inset,
		    		-5px 0 0 0 color(plomo-base)inset,
		    		0 -1px 0 0 color(plomo-base)inset,
		    		0 -4px 0 0 color(blanco)inset,
		    		0 -5px 0 0 color(plomo-base)inset;
		    		display: flex;
		    		font-weight: bold;
		    		flex-direction: column;
		    		justify-content: center;
		    		color:color(blanco);
		    		text-align: center;
		    		margin:0px;
		    		padding:0px;
		    		height:55px;
		    		width: 115px;
		    		span{
		    			border:0px;
		    			color:color(blanco);

		    			font-size: 10px;
		    			font-weight: normal;
		    			margin:-7px;
		    			text-shadow: none;
		    			padding:0px;
		    		}
		    	}
		    	&__imagen{
		    		border:0px;
		    		margin:0px;
		    		padding:0px;
		    		margin-top: 5px;
		    		height: 80px;
		    		width: 120px;
		    	}
		    	&__opciones{
		    		background:#3A3A3A;
		    		border:0px;
		    		border-top-left-radius:11px;
		    		border-top-right-radius:11px;
		    		box-shadow: 1px 0 0 0 color(plomo-base)inset,
		    		4px 0 0 0 color(blanco)inset,
		    		5px 0 0 0 color(plomo-base)inset,
		    		-1px 0 0 0 color(plomo-base) inset,
		    		-4px 0 0 0 color(blanco) inset,
		    		-5px 0 0 0 color(plomo-base)inset,
		    		0 1px 0 0 color(plomo-base)inset,
		    		0 4px 0 0 color(blanco)inset,
		    		0 5px 0 0 color(plomo-base)inset;
		    		display: flex;
		    		justify-content: center;
		    		color:color(blanco);
		    		text-align: center;
		    		margin:0px;
		    		margin-top: 5px;
		    		padding:0px;
		    		height: 80px;
		    		width: 115px;
		    	}

		    }
		    .trazabilidad-vehiculo{
		    	align-items:center;
		    	display:flex;
		    	justify-content:center;
		    	flex-direction:column;

		    	height:100%;
		    	&__imagen{
		    		background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwMi42NjQgNTAyLjY2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAyLjY2NCA1MDIuNjY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik00NzIuMDc3LDI1LjQzMkgzMC42MDlDMTMuNzYyLDI1LjQzMiwwLDM5LjIxNiwwLDU2LjAxOXYzMTcuNDE0ICAgICBjMCwxNi43ODIsMTMuNzYyLDMwLjU4NywzMC42MDksMzAuNTg3aDQ0MS40NjhjMTYuODI1LDAsMzAuNTg3LTEzLjgwNSwzMC41ODctMzAuNTg3VjU2LjAxOSAgICAgQzUwMi42NjQsMzkuMjE2LDQ4OC45MDIsMjUuNDMyLDQ3Mi4wNzcsMjUuNDMyeiBNNDY0LjM3NiwzNTAuOTM1SDM4LjI4OFY2OC4zMzZoNDI2LjA4OFYzNTAuOTM1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjE5NC42OTgsNDE4LjUzOCAxMzYuOTMxLDQ3Ny4yMzIgMzY2LjU3NCw0NzcuMjMyIDMwOC44MDcsNDE4LjUzOCAgICAiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTEwMy4zNDYsMjk0LjI2OWMxMS4yODIsMCwyMC40NzEtOS4xNjgsMjAuNDcxLTIwLjQ0OWMwLTIuMDQ5LTAuNjA0LTMuOTA0LTEuMTY1LTUuNzgxICAgICBjMjYuMTY1LTIxLjA5Niw3Mi4zOTItNTguMjg0LDkzLjQ2Ni03NC41MjdjMy4zMjIsMi4zNTEsNy4xODMsNC4wMzQsMTEuNTYyLDQuMDM0YzMuNjQ1LDAsNi44ODEtMS4yMDgsOS44MzYtMi44NjkgICAgIGMxMy41NDYsMTEuNTE5LDM2LjU4NCwzMS4xMDUsNTIuOTM1LDQ1LjAxOGMtMC4yMTYsMS4xODYtMC42OSwyLjI0My0wLjY5LDMuNDk0YzAsMTEuMzAzLDkuMTg5LDIwLjQ3MSwyMC40OTIsMjAuNDcxICAgICBzMjAuNDkyLTkuMTY4LDIwLjQ5Mi0yMC40NzFjMC0yLjAwNi0wLjYwNC0zLjg0LTEuMTQzLTUuNjczbDUyLjkzNS00Ny44MDFjMi44NDcsMS40ODgsNS45MSwyLjU0NSw5LjM2MiwyLjU0NSAgICAgYzExLjMwMywwLDIwLjQ3MS05LjE2OCwyMC40NzEtMjAuNDcxcy05LjE2OC0yMC40NzEtMjAuNDcxLTIwLjQ3MXMtMjAuNDQ5LDkuMTY4LTIwLjQ0OSwyMC40OTJjMCwyLjY5NiwwLjU4Miw1LjI2MywxLjUzMSw3LjYxNCAgICAgYy0xNC43OTgsMTMuMzUyLTM3LjYxOSwzMy45NzQtNTEuODU2LDQ2LjgzYy0zLjE3MS0yLjA0OS02Ljc1Mi0zLjU1OS0xMC44NS0zLjU1OWMtNC44MzIsMC05LjA2LDEuOTItMTIuNTU0LDQuNzAyICAgICBjLTEzLjUyNS0xMS40OTctMzUuMzk4LTMwLjA5MS01MC45NS00My4zMTRjMC44Mi0yLjIsMS40MDItNC41MDgsMS40MDItNy4wMWMwLTExLjMwMy05LjE2OC0yMC40NzEtMjAuNDcxLTIwLjQ3MSAgICAgcy0yMC40NzEsOS4xNjgtMjAuNDcxLDIwLjQ3MWMwLDIuNTAyLDAuNjA0LDQuODMyLDEuNDI0LDcuMDMybC05My45NjIsNzMuMTAzYy0zLjI3OS0yLjI0My03LjA1NC0zLjg4My0xMS4zMjUtMy44ODMgICAgIGMtMTEuMzAzLDAtMjAuNDcxLDkuMTY4LTIwLjQ3MSwyMC40NzFDODIuODc1LDI4NS4xMDEsOTIuMDQzLDI5NC4yNjksMTAzLjM0NiwyOTQuMjY5eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
		    		background-repeat: no-repeat;
		    		background-size:50px;
		    		background-position-x: 50%;
		    		background-position-y: 50%;
		    		height: 63%;
		    		width: 100%;
		    	}
		    	&__descripcion{

		    		color:color(blanco);
		    		border:0px;
		    		margin:0px;

		    		padding:0px;
		    		height: 27%;
		    		width:100%;
		    	}
		    }
		    .invisiblemap{
		    	visibility: hidden;
		    }
		    .visiblemap{
		    	visibility: visible;
		    }
		    .OpcionCamionVer{
/*@media screen and (max-width: 39.9375em) {
	bottom:0px;
	border:0px;
	background:rgba(0,0,0,0.5);
	margin:0px;
	padding:0px;
	position:fixed;
	height:290px;
	width:100%;
	right:0px;
	z-index:100;
}


@media screen and (min-width: 40em) {
	bottom:0px;
	border:0px;
	background:rgba(0,0,0,0.5);
	margin:0px;
	padding:0px;
	position:fixed;
	height:290px;
	width:100%;
	right:0px;
	z-index:100;

}


@media screen and (min-width: 40em) and (max-width: 63.9375em) {
bottom:0px;
	border:0px;
	background:rgba(0,0,0,0.5);
	margin:0px;
	padding:0px;
	position:fixed;
	height:290px;
	width:100%;
	right:0px;
	z-index:100;
}


@media screen and (min-width: 64em) {
bottom:0px;
	border:0px;
	background:rgba(0,0,0,0.5);
	margin:0px;
	padding-left:250px;
	position:fixed;
	height:290px;
	width:100%;
	right:0px;
	z-index:100;}


@media screen and (min-width: 64em) and (max-width: 74.9375em) {
bottom:0px;
	border:0px;
	background:rgba(0,0,0,0.5);
	margin:0px;
	padding:0px;
	padding-left:250px;
	position:fixed;
	height:290px;
	width:100%;
	right:0px;
	z-index:100;
}
*/
}
.OpcionCamionOcultar{
	display:block;
}
#my-info{
	z-index:150;
}

</style>
<template>
	<div id="app">
		<div class="perfil">
			<div class="perfil-nombre">
				<p class="perfil-nombre-usuario">Edgar Dilmar Peralta Limachi</p>
				<p class="perfil-nombre-cargo">Conductor de vehiculo</p>
			</div>
			<div class="perfil-imagen">
				<img src="https://firebasestorage.googleapis.com/v0/b/edgar-902a5.appspot.com/o/perfilEdgar.jpg?alt=media&token=eb5de388-9052-4180-a777-b316c0ebbaa5">
			</div>
		</div>
		<div id="infoTRACKING"></div>
		<div class="tabla-informacion">
			<!--<div class="tabla-informacion__Cabecera">
				<h3>VEHICULO</h3>
			</div>-->
			<div class="tabla-informacion__Cuerpo">
				<div class="Informacion-movil">
					<div class="Informacion-movil__imagen">
						<img src="https://firebasestorage.googleapis.com/v0/b/edgar-902a5.appspot.com/o/toyota%20hino.png?alt=media&token=b7a3b8ac-4693-4c5e-93e9-db9f94851b93"/>
					</div>
					<div class="Informacion-movil__datos">
						<div class="tabla-informacion__descripcion">
							
							<p>50 Barras de a transportar Fierro corrugado 5/8</p>
							<p>50 bolsas de cemento YURA</p>
							<p>2 Bolsas de clavo de calamina de medida 1 1/2 pulgadas</p>
							
						</div>
						<div class="tabla-informacion__datos"></div>
					</div>
				</div>
			</div>
			<div class="tabla-informacion__Piepagina">

				<div>
					<label id="Tracking-estado" class="TRACKING__DESACTIVADO">.</label>
				</div>
				<button class="btn-salir" @click="logout()">X</button>
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
		}
	},
	mounted : function(){
		geolocation.on('change:position', function() {
			var placa_registre = "3600AAA";
			var h=0, m=0, s=0, hora_actual=""; var f="", m="", fecha_actual="", today=""; var myPos="";
			var trackingJSON = new Object();var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"); 
			var f = new Date();fecha_actual = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();today=new Date();h=today.getHours(); m=today.getMinutes(); s=today.getSeconds(); hora_actual = h+":"+m+":"+s;
			trackingJSON = { fecha: fecha_actual, hora: hora_actual, exactitud_en_METROS: geolocation.getAccuracy(),posicion: geolocation.getPosition() };
			db.database().ref("trazabilidad").child(placa_registre).push(trackingJSON);
			console.log(trackingJSON);
		});
	},
	methods:{
		stop() {

			geolocation.setTracking(false);
		},
		entrega: function(){
			console.log("termina la entrega")

		},
		logout(){
			firebase.auth().signOut().then(() => {
				geolocation.setTracking(false);
				this.$router.push({name: 'Login'})
			})
		}
	}
};




</script>
















