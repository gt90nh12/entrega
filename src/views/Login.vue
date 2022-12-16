<style type="text/css">
#imagen-login{
  background-image: url(https://firebasestorage.googleapis.com/v0/b/edgar-902a5.appspot.com/o/login%20multiacero.jpg?alt=media&token=badd1451-dc20-456b-89eb-04a1a0ad26a4);
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
  height: 100%;
  width: 100%;
}
#contenedor-login{
  opacity: 0.9; 
  text-align: left;
}
.label-login{
  font-weight: bold;
}
#fondo-datos{
  border-color: #4bd3ed ;
  border-radius: 15px;
}
</style>
<template>
  <form  class="js-validate form-signin p-5" @submit.prevent="login">
    <section  id="imagen-login">
      <div class="d-flex align-items-center justify-content-center">
        <div class="signin-inner mt-3 mt-lg-8 bg-white shadow-soft border rounded border-light p-1 p-lg-6 w-100 fmxw-600" id="contenedor-login">
          <div class="form-group">
            <label class="label-login" for="email">Correo electrónico</label>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text"><span class="fas fa-envelope"></span></span>
              </div>
              <input type="email" class="form-control form__input" name="email" required
              placeholder="Correo electronico"
              aria-label="Email"
              data-msg="Please enter a valid email address."
              data-error-class="u-has-error"
              data-success-class="u-has-success"
              v-model="email" id="fondo-datos">
            </div>
          </div>
          <div class="form-group">
            <div class="form-group">
              <label class="label-login" for="password">Clave</label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                </div>
                <input type="password" class="form-control form__input" name="password" required
                placeholder="Contraseña"
                aria-label="Password"
                data-msg="Your password is invalid. Please try again."
                data-error-class="u-has-error"
                data-success-class="u-has-success"
                v-model="password" id="fondo-datos">
              </div>
            </div>
          </div>
          <!--<button type="submit" class="btn btn-block btn-primary">Iniciar sesión</button>-->
          <button type="submit" class="btn btn-block btn-primary">Autenticación</button>
          <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
            <span class="font-weight-normal">¿No estás registrado? <a href="./sign-up.html" class="font-weight-bold">Crear cuenta</a></span>
          </div>
        </div>
      </div>
    </section>
  </form>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default{
  name: "Login",
  data () {
    return {
      email:'',
      password: '',
      error: ''
    }
  },
  methods:{
    login() {
      this.error = ''
      if(this.email && this.password){ 
        console.log(this.email, this.password);
        firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            if(this.email == 'gt90nh@gmail.com'){
              this.$router.push({name: 'About'})
            }else
            {
              this.$router.push({name: 'Traceability'})
            }
          })
        .catch(
          err => {
            this.error = err.message
          }
          )
      }else{
        this.error = ' Todos los campos son requeridos.', this.email
      }
    }
  }
}
</script>
