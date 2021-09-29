<template>
<!-- ========== MAIN CONTENT ========== -->
  <form class="js-validate form-signin p-5" @submit.prevent="login">
    <!-- Logo -->
    <div class="text-center">
      <a href="../home/index.html" aria-label="Space">
        <img class="mb-3" src="#" alt="Logo" width="60" height="60">
      </a>
    </div>
    <!-- End Logo -->

    <!-- Title -->
    <div class="text-center mb-4">
      <h1 class="h3 mb-0">TRAZABILIDAD</h1>
      <p>Inicie autenticación para administrar su cuenta.</p>
    </div>
    <!-- End Title -->

    <!-- Input -->
    <div class="js-form-message mb-3">
      <div class="js-focus-state input-group form">
        <div class="input-group-prepend form__prepend">
          <span class="input-group-text form__text">
            <span class="fa fa-user form__text-inner"></span>
          </span>
        </div>
        <input type="email" class="form-control form__input" name="email" required
               placeholder="Correo electronico"
               aria-label="Email"
               data-msg="Please enter a valid email address."
               data-error-class="u-has-error"
               data-success-class="u-has-success"
               v-model="email">
      </div>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="js-form-message mb-3">
      <div class="js-focus-state input-group form">
        <div class="input-group-prepend form__prepend">
          <span class="input-group-text form__text">
            <span class="fa fa-lock form__text-inner"></span>
          </span>
        </div>
        <input type="password" class="form-control form__input" name="password" required
               placeholder="Contraseña"
               aria-label="Password"
               data-msg="Your password is invalid. Please try again."
               data-error-class="u-has-error"
               data-success-class="u-has-success"
               v-model="password">
      </div>
    </div>
    <!-- End Input -->

    

    <div class="mb-3">
      <button type="submit" class="btn btn-block btn-primary">Autenticación</button>
    </div>

    <!-- <div class="text-center mb-3">
      <p class="text-muted">Do not have an account? <a href="signup-simple.html">Signup</a></p>
    </div>

    Divider
    <div class="text-center u-divider-wrapper my-3">
      <span class="u-divider u-divider--xs u-divider--text">OR</span>
    </div> -->
    <!-- End Divider -->

    <!-- Signin Social Buttons -->
    <!-- <div class="row mx-gutters-2 mb-4">
      <div class="col-sm-6 mb-2 mb-sm-0">
        <button type="button" class="btn btn-block btn-sm btn-facebook">
          <span class="fab fa-facebook-f mr-2"></span>
          Signin with Facebook
        </button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-block btn-sm btn-twitter">
          <span class="fab fa-twitter mr-2"></span>
          Signin with Twitter
        </button>
      </div>
    </div> -->
    <!-- End Signin Social Buttons -->

    <p class="small text-center text-muted mb-0">Trazabilidad. &copy; 2021.</p>
  </form>
  <!-- ========== END MAIN CONTENT ========== -->
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
        if(this.email && this.password){ console.log(this.email, this.password);
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
              user => {
                // this.$router.push({name: 'Traceability'})
                this.$router.push({name: 'Traceability'})
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
