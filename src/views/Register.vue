<template>
  <div class="register bg-light" style="height:100%;">
    <v-container  style="margin-top:10px;">
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
     <p class="mt-4"><strong>Create a new account.</strong></p></div>
   
    <v-divider></v-divider>
<br><br>
 <v-row>
      <v-col cols="12" class="mt--4">
    <v-text-field
      v-model="fullname"
      :rules="fullnameRules"
      label="Full name"
      outlined
      required
      class="mt-4"
    ></v-text-field>
    </v-col>
    <v-col cols="12" md="6" class="mt--4">
    <v-text-field
      v-model="username"
      :rules="usernameRules"
      label="Username"
      :counter="15"
      outlined
      required
      class="mt-4"
    ></v-text-field>
    </v-col>
    <v-col cols="12" md="6" class="mt--4">
     <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      outlined
      required
      type="email"
      class="mt-4"
    ></v-text-field>
    </v-col>
    <v-col cols="12" md="6" class="mt--2">
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      :counter="15"
      :type="showPassword ? 'text' : 'password'"
      outlined
      required
    ></v-text-field>
    </v-col>
     <v-col cols="12" md="6" class="mt--2">
    <v-text-field
      v-model="confirmPassword"
      :rules="confirmPasswordRules"
      label="Confirm Password"
      :type="showPassword ? 'text' : 'password'"
      outlined
      required
    ></v-text-field>
    </v-col>
    <v-col class="mt--2" cols="12">
    <v-select
    v-model="select"
    :rules="[v => !!v || 'Item is required']"
    :items="gender"
    label="Gender"
    outlined
    name="gender"
    ></v-select>
    </v-col>
     <v-col class="mt--2" cols="12">
        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                label="Date of Birth"
                readonly
                name="date"
                max="2007-09-14"
                outlined
                v-bind="attrs"
                :rules="dateRules"
                v-on="on"
            ></v-text-field>
            </template>
            <v-date-picker
            ref="picker"
            v-model="date"
            max="2007-09-14"
            min="1950-01-01"
            @change="save"
            
            ></v-date-picker>
        </v-menu> 
     </v-col>
  
     <v-col cols="12" class="mt--2">
     <p class="text-muted">By clicking the register button, you agree to our <router-link to="#" class="href">terms and conditions</router-link></p>
    <v-btn
      :disabled="!valid"
      color="info"
      class="mr-4"
      elevation="4"
      block
      @click="validate"
    >
    Register
    </v-btn>
     </v-col>
      </v-row>
      <p class="text-muted mt-2">Already have an account, <router-link :to="{name: 'Login'}" class="href">Login here</router-link></p>
    </v-card>
  </v-form>
    </v-container>
   
  </div>
  
</template>
<script>
  export default {
    data: () => ({
        
      valid: true,
      fullname: '',
      fullnameRules: [
        v => !!v || 'Full name is required',
        v => /\S/.test(v) || "Full name must contain a character"
      ],
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v.length >=3) || 'Username cannot be less than 3 characters',
        v => (v.length <=15) || 'Username must be less than 16 characters',
        v => /^[a-zA-Z0-9-_.]+$/.test(v) || 'Username can only contain [A-Z,a-z,1-9, _-.]',

      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      showPassword: false,
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v.length >=4) || 'password must be more than 3 characters',
        v => (v.length <=15) || 'Username must be less than 16 characters',


      ],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Confirm password is required',
      ],
      select: null,
      gender: ['Male', 'Female', 'Other'],
      date: null,
      menu: false,
      dateRules: [
      v => !!v || 'Enter your Date of Birth',
      ],
    }),

  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
         save (date) {
        this.$refs.menu.save(date)
      },
      validate () {
        this.$refs.form.validate()
        // console.log( this.email)
      },
    },
  }
</script>
