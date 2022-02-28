<template>
 <body class="bg-light" style="height:100%;">
  <div class="profile">
   <HeaderOne/>  <br><br><br><br> <br>
    <div class="container text-center mt-5" style="max-width: 1200px;">
    <div class="row text-left">
<!-- Start LeftTab -->
      <div class="col-md col-md-3 col-lg-3 col-xl-3 d-lg-flex d-none">
        <div class="left-tab">
          <LeftTab/>
        </div> 
      </div>
<!-- End Left Tab -->    

<!-- Start MainTab -->  
      <div class="col-md- col-md-12 col-lg-6 col-xl-6 mx-auto" style="padding:0px;">

      <v-card
      style=" max-width: 650px; margin-bottom:-10px; margin-top:-15px;"
      class="mx-auto shadow rounded"
      >

 <v-tabs
        color="grey accent-4"
        >
        <v-tab>Top</v-tab>
        <v-tab>
          <v-badge
          color="error"
          content="6"
          >
          Popular
          </v-badge>
 
        </v-tab>
        </v-tabs>
        <v-divider></v-divider>
   <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark"><v-icon color="green lighten-2">mdi-account-check</v-icon> Don Jazzy</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username followed you</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><v-icon color="" class="mr-1">mdi-account-plus</v-icon> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

     <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#9C27B0"/><text x="50%" y="50%" fill="#9C27B0" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-200"><strong class="text-dark"><v-icon color="yellow darken-3">mdi-star-circle</v-icon> Elon Musk</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username liked your post</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><v-icon color="" class="mr-1">mdi-account-plus</v-icon> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-list-item class="">
           <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#FF5722"/><text x="50%" y="50%" fill="#FF5722" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-200"><strong class="text-dark"><v-icon color="red lighten-2">mdi-twitter-retweet</v-icon> Selena Gomez</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username reposted your post</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><v-icon color="" class="mr-1">mdi-account-plus</v-icon> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>   

     <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#9C27B0"/><text x="50%" y="50%" fill="#9C27B0" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full namedtfsayghdfjgklh;kj'sdfghjgfds</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

       <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#009688"/><text x="50%" y="50%" fill="#009688" dy=".3em">32x32</text></svg>
        <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#009688"/><text x="50%" y="50%" fill="#009688" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
<v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

     <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#9C27B0"/><text x="50%" y="50%" fill="#9C27B0" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-list-item class="">
           <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#FF5722"/><text x="50%" y="50%" fill="#FF5722" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>   

     <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#9C27B0"/><text x="50%" y="50%" fill="#9C27B0" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full namedtfsayghdfjgklh;kj'sdfghjgfds</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

       <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#009688"/><text x="50%" y="50%" fill="#009688" dy=".3em">32x32</text></svg>
        <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-list-item class="">
          <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#009688"/><text x="50%" y="50%" fill="#009688" dy=".3em">32x32</text></svg>

          <v-list-item-content style="margin-left:10px;" class="border-bottom">
            <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                  <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>



        </v-card>
        <br><br><br><br>
      </div>
<!-- END MAIN TAB -->    
<!-- Start RightTab -->  
      <div class="col-md col-md-3 col-lg-3 col-xl-3 d-lg-flex d-none">
        <div class="right-tab">
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

import HeaderOne from '@/components/HeaderOne.vue'
import LeftTab from '@/components/LeftTab.vue'
import RightTab from '@/components/RightTab.vue'
// import { Mentionable } from 'vue-mention'

export default {
  name: 'Followers',
  props: {
    pageName : String,
    username : String

    
    },
 components: {
    HeaderOne,
    LeftTab,
    RightTab,
    // Mentionable,

  },
  data: () => ({

   
  }),
  methods: {
  
  
  }

}
</script>
