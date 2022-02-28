<template>
     <v-card
      background-color="dark"
      dark
      class="mx-auto shadow pt-4"
      style="border-radius: 5px; max-width: 650px;"
  > <v-list-item-title class="h5 ml-3 pl-3 mb-3"><strong class="text-white">Timeline</strong> <span class="move-right font-small mr-4">540</span></v-list-item-title>
           <v-divider></v-divider>
   <v-tabs
  background-color="dark"
  dark
  next-icon="fas fa-chevron-right"
  prev-icon="fas fa-chevron-left"
  show-arrows
  icons-and-text
  fixed-tabs
  height="100"
    >
      <v-tabs-slider color="black"></v-tabs-slider>
     <v-tab class="" style="margin: 0px; padding: 0px;"> 
      <span class="font-small font-weight-light">Add Timeline</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#007bff"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
     <v-tab style="margin: 0px;padding: 0px;"> 
       <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#9C27B0"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
   <v-tab style="margin: 0px;padding: 0px;"> 
     <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#FF5722"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
   <v-tab> 
     <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#009688"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
  <v-tab> 
    <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#007bff"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
     <v-tab> 
      <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#9C27B0"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
   <v-tab> 
      <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#FF5722"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>
   <v-tab> 
      <span class="font-small font-weight-light text-overflow">Username</span>
     <svg class="bd-placeholder-img flex-shrink-0 time-img" width="60" height="60" role="img" focusable="false"><rect width="100%" height="100%" fill="#009688"/><text x="40%" y="55%" fill="#ffffff">+</text></svg>
   </v-tab>

    </v-tabs>
</v-card>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
  msg: String
  }
}
</script>