<template>
  <div class="login bg-light" style="height:100%;">
    <v-container class="pl-5 pr-5"  style="margin-top:50px;">
     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
     class="mx-auto max-width-500"
  >
  

    <v-card
    style="border-radius: 10px; margin-bottom:30px;"
    class="mx-auto shadow mt-4 p-4"
    >
     <v-list-item style="padding:0px;">
      <img
      height = "50"
      width = "50"
      src="../assets/img/logo.png"
      alt="Wetroverse"
      class="shadow-sm img-circle mt-3"
      >
      <v-list-item-content style="margin-left:10px;">
        <v-list-item-title class="h5 mt-3"><span style="font-size:30px;" class="font-weight-bold">Wetroverse !</span>
      </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  
    <div class="blockquote fade mt-2" style="margin-left:-20px;"><i class="fas fa-quote-left mr-3 text-grey"></i>Millions of things go on in our society daily. Be part of the story. 
     <p class="mt-4"><strong>Login to Wetroverse.</strong></p></div>
   
    <v-divider></v-divider>

    <v-text-field
    
      v-model="email"
      :rules="emailRules"
      label="E-mail / Username"
      required
      class="mt-4 mb-2"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      required
    ></v-text-field>
    <p><router-link :to="{name: 'Register'}" class="href grey--text ">Forgot Password?</router-link></p>
    <v-btn
      :disabled="!valid"
      color="info"
      class="mr-4"
      @click="validate"
      block
    >
     Login
    </v-btn>
    <p class="mt-5 text-right"><router-link :to="{name: 'Register'}" class="href black--text">Create a new account</router-link></p>
    </v-card>
  </v-form>
    </v-container>
    
  </div>
  
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      password: '',
      showPassword: false,
      passwordRules: [
        v => !!v || 'Password cannot be empty',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        // console.log( this.email)
      },
    },
  }
</script>
