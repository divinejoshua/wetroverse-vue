<template>
 <body class="bg-light" style="height:100%;">
  <div class="profile">
   <HeaderTwo pageName="Add post"/>  <br><br><br><br>
    <div class="container text-center mt-5" style="max-width: 1200px;">
    <div class="row text-left">
<!-- Start LeftTab -->
      <div class="col-md col-md-3 col-lg-3 col-xl-3 d-lg-flex d-none">
        <div class="left-tab-h2">
          <LeftTab/>
        </div> 
      </div>
<!-- End Left Tab -->    

<!-- Start MainTab -->  
      <div class="col-md- col-md-12 col-lg-6 col-xl-6 mx-auto" style="padding:15px;">
        <v-card
  style="border-radius: 10px; max-width: 650px; margin-bottom:30px; margin-top:-20px;"
    class="mx-auto shadow pt-1"
  >
   <v-list-item>
      <img
      height = "40"
      width = "40"
        src="../assets/img/ceo1.jpg"
        alt="John"
        class="shadow-sm rounded mt-3"
      >
      <v-list-item-content style="margin-left:10px;">
        <v-list-item-title class="h5 mt-3"><strong>Full name</strong> 
      </v-list-item-title>
        <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
          <v-list-item-subtitle class="small text-right mr-4" style="margin-top:-50px;">
            <v-btn 
            :disabled="!valid"
            @click="validate"
            color="info"
            class="hidden-xs-only hidden-sm-only">
                <i class="fas fa-paper-plane mr-1"></i> Send post
            </v-btn>
            </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
<div class="pt-1 pr-4 pl-4 pb-0">
   <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
     <v-card-text color="black" style="border:none;  font-size:0.9rem;font-weight:400;line-height:1.6; background-color:#ffffff; padding: 0px;">
  <v-card
  style=""
  elevation="3"
  >

  </v-card>
       <input type="file" id="imageFile" ref="file" accept="image/*"  @change="handleImageUpload()" hidden/>
          <v-sheet
           v-if="!showPreview"
          @click="chooseFiles"
          
          color="grey"
          elevation="1"
          height="150"
          width="auto"
          rounded=""
          class="mb-5"
          >
          <center><br><br><br> <v-icon slot="prepend" color="white">mdi-camera-plus</v-icon></center>
          </v-sheet>
           <template v-else>
              <v-img :src="imagePreview" v-show="showPreview" @click="chooseFiles" class="img-fluid rounded shadow-sm"/>
            <br>
            </template>
           <v-textarea
          v-model="postBody"
          :rules="postBodyRules"
          solo
          height="100"
          label="What is going on?"
          value=""
          :counter="160"

        ></v-textarea>
        <v-text-field
        
        solo
        v-model="postLocation"
        label="Add location (Optional)"
        class=""
        >
        <v-icon
        slot="prepend"
        color="grey"
        >
        mdi-map-marker
        </v-icon>
    </v-text-field>
         <v-text-field
        solo
        v-model="postHeader"
        :rules="postHeaderRules"
        label="Header (Optional)"
        class=""
      :counter="25"
        >
         <v-icon
        slot="prepend"
        color="grey"
        >
        mdi-brush
        </v-icon>
        </v-text-field>
    </v-card-text>     
   </v-form>
</div>
   
   <v-btn color="error"
    :disabled="!valid"
    large
    rounded 
    elevation="4" 
    @click="validate"
    class="shadow-sm mr-3 hidden-lg-only hidden-xl-only hidden-md-only add-post-button"
    >
    <i class="fas fa-paper-plane mr-1"></i> Send post</v-btn>

    <!-- CODE FOR AUTOCOMPLETE IN HASHTAGS -->
  <!-- <Mentionable
    :keys="['@', '#']"
    :items="items"
    offset="6"
    insert-space
    @open="onOpen"
  >
    <textarea
      v-model="text"
      solo
      height="100"
    />

    <template #item-@="{ item }">
      <div class="user"  style="position:absolute; background-color:#fed136; margin-left:100px;">
        {{ item.value }}
        <span class="dim">
          ({{ item.firstName }})
        </span>
      </div>
    </template>

    <template #item-#="{ item }">
      <div class="issue">
        <span class="number">
          #{{ item.value }}
        </span>
        <span class="dim">
          {{ item.label }}
        </span>
      </div>
    </template>
  </Mentionable> -->
</v-card>

      </div>
<!-- END MAIN TAB -->    
<!-- Start RightTab -->  
      <div class="col-md col-md-3 col-lg-3 col-xl-3 d-lg-flex d-none">
        <div class="right-tab-h2">
          <RightTab/>
        </div> 
      </div> 
<!-- END RightTab -->      
    </div>
    </div>
  </div>
</body>      
</template>

<script>

import HeaderTwo from '@/components/HeaderTwo.vue'
import LeftTab from '@/components/LeftTab.vue'
import RightTab from '@/components/RightTab.vue'
// import { Mentionable } from 'vue-mention'

export default {
  props: {
    pageName : String
    
    },
 components: {
    HeaderTwo,
    LeftTab,
    RightTab,
    // Mentionable,

  },
  data: () => ({

    valid: true,
    postImage: null,
    postBody: '',
    postLocation: '',
    postHeader: '',
      //Image preview
    file: '',
    showPreview: false,
    imagePreview: '',

    postBodyRules: [
    v => !!v || 'Text is required',
    v => /\S/.test(v) || "Text cannot be blank",
    v => (v.length <=160) || 'Text cannot be more than 160 characters',

    ],
  
    postHeaderRules: [
    v => (v.length <1) ||  v.length <=30 ||  'Header cannot be more than 25 characters',

    ],
  }),
  methods: {
  
    //Preview the image
      handleImageUpload(){
        /*
          Set the local file variable to what the user has selected.
        */
        this.file = this.$refs.file.files[0];

        /*
          Initialize a File Reader object
        */
        let reader  = new FileReader();

        /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
        reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this), false);

        /*
          Check to see if the file is not empty.
        */
        if( this.file ){
          /*
            Ensure the file is an image file.
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
            reader.readAsDataURL( this.file );
            console.log("Image name : "+this.file.name);
            console.log("Image size : "+this.file.size+" kb");
          }
        }
      },

    //Choose image from deviece
    chooseFiles() {
    document.getElementById("imageFile").click()
    },

    //Validate post 
     validate () {
        this.$refs.form.validate()
        // console.log( this.file)
      },
  }

}
</script>
