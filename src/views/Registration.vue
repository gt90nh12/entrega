<template>
  <div class="bg-white shadow-sm rounded p-6" name="register">
    <form class="js-validate" enctype="multipart/form-data" novalidate="novalidate" @submit.prevent="register">
      <div class="mb-4">
        <h2 class="h4">Registrarse</h2>
      </div>
      <!-- Input -->
      <div class="js-form-message mb-3">
        <div class="js-focus-state input-group input-group form">
          <input type="text" class="form-control form__input" required="" placeholder="Ingrese numero de RUDE"
          aria-label="Enter your name" aria-invalid="true" aria-describedby="name-error" v-model="name">
        </div>
      </div>

      <!-- End Input -->

      <!-- Input -->
      <div class="js-form-message mb-3">
        <div class="js-focus-state input-group input-group form">
          <input type="email" class="form-control form__input" name="email" required=""
          placeholder="Ingrese su correo electronico" aria-label="Enter your email address" aria-describedby="email-error"
          aria-invalid="false" v-model="email">
        </div>
        <div id="email-error" class="invalid-feedback" style="display: none;"></div>
      </div>
      <!-- End Input -->

      <!-- Input -->
      <div class="js-form-message mb-3">
        <div class="js-focus-state input-group input-group form">
          <input type="password" class="form-control form__input" name="password" required=""
          placeholder="Ingrese su contraseña" aria-label="Enter your password" aria-describedby="password-error"
          aria-invalid="true" v-model="password">
        </div>
        
      </div>
      <!-- End Input -->

      <button type="submit" class="btn btn-block btn-primary">Registrar Usuario</button>
    </form>
    <div class="alert alert-danger top-10" role="alert" v-if="error" >
      {{ error }}
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'
  import db from '../firebase/init'
  const storageRef = firebase.storage().ref();
  export default {
    name: 'Register',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        error:''
      }
    },
    methods: {

      register() {
        this.error = ''
        if (this.name && this.email && this.password) {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            //actualizar el usuario
            if (user) {
            // 2.- Agregar datos como nombre y imagen de usuario a la autenticacion de GOOGLE
            firebase.auth().currentUser.updateProfile({
              displayName: this.name,        
            }).then((u) => {
              console.log('Usuario registrado exitosamente');
              this.$router.push({name: 'Login'})                                
            }).catch((err) => {
              this.error = err.message
            })             
          }
        }).catch(err => {
          this.error = err.message
        })
      } else {
        this.error = 'Todos los datos son requeridos'
      }
    }
  }
}
</script>