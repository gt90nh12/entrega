import firebase from 'firebase'
import firestore from 'firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDPVZfi1UIF7c72riT3KYynZszikAlLR_E",
	authDomain: "edgar-902a5.firebaseapp.com",
	databaseURL: "https://edgar-902a5.firebaseio.com",
	projectId: "edgar-902a5",
	storageBucket: "edgar-902a5.appspot.com",
	messagingSenderId: "701673794970",
	appId: "1:701673794970:web:62ee89c15db7ca2cf25e23",
	measurementId: "G-JG9BRZLECX"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
export default firebaseapp

