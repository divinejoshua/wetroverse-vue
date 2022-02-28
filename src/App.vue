<template>
  <v-app>
     <link :href="require('./assets/css/custom.css')" rel="stylesheet">
  <router-view></router-view>
    <v-main>
    </v-main>
  </v-app>
</template>
<style> *{ text-transform: none !important; } 
*{margin:0;font-family:var(--bs-font-sans-serif) !important;font-size:0.9rem;font-weight:400;line-height:1.5;}
     .trend-tag{
      color: #007bff;
      text-decoration: none;
      font-size: 13px;
    }
</style>
<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
