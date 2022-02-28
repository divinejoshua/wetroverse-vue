<template>
    <div class="fixed-tops">
     <center>
        <template>
          <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
              <v-card flat background-color="white" class="border-bottom"  id="navbar-top">
                    <v-toolbar flat  style="max-width:1250px;">
                         <!--Shows in Extra Small -->   
                    <span class="hidden-lg-only hidden-xl-only hidden-md-only hidden-sm-only" style="margin-top:3px;">
                        <router-link to="/" class="href">
                       <span icon class="hidden-lg text-muted">
                        <span class="hidden-xs-only"> </span><i class="fas fa-home" style="font-size: 20px;"></i>
                       </span>
                        </router-link>
                    </span>  
                     <!--Shows in Small -->   
                     <span class="hidden-lg-only hidden-xl-only hidden-md-only hidden-xs-only">
                    <router-link to="/" class="href">
                       <span icon class="hidden-lg ml-4" style="margin-top:115px;">
                       <i class="fas fa-home ml-4 text-muted" style="font-size: 20px;"></i> <span style="font-size: 17px;" class="ml-2 text-muted">Home</span>
                        </span>
                        </router-link>
                        <span class="hidden-xs-only">&nbsp;&nbsp;</span>
                          <span class="hidden-xs-only">
                        </span>

                    </span>     
                     <!--Shows in Medium, Large and Extra Large -->
                     <span class="hidden-sm-only hidden-xs-only" >
                       <v-btn icon class="" style="margin-left:100px;">
                        <span class="hidden-xs-only"><v-toolbar-title>Wetroverse</v-toolbar-title></span>
                        </v-btn>
                    <router-link to="/" class="href">
                         <span icon class="text-muted" style="margin-left:100px;">
                        <i class="fas fa-home" style="font-size: 15px;"></i>
                        <span class="hidden-xs-only ml-3"  style="font-size: 17px;">Home </span>
                         </span>
                        </router-link>
                          <span class="hidden-xs-only text-muted" style="margin-left:15px;">
                            <span icon class="">
                            <i class="far fa-envelope ml-3" style="font-size: 20px;"></i> <span class="hidden-xs-only ml-3"  style="font-size: 17px;">  HMU</span>
                            </span>
                        </span>
                    </span>    

                                <!--Shows in Extra small and Small -->
                        <span class="hidden-lg-only hidden-xl-only mr-4 hidden-md-only"><v-toolbar-title style="margin-left:15px;">Wetroverse</v-toolbar-title></span>
                      <v-spacer></v-spacer>
                       <v-btn text small  @click="$router.push({ name : 'AddPost'})" class="mr-3 hidden-lg-only hidden-xl-only hidden-sm-only hidden-xs-only bg-light"><i class="fas fa-edit mr-1"></i> Add post</v-btn>
                       <span class="hidden-lg-only hidden-xl-only hidden-md-only">
                          <v-btn icon>
                           <i class="far fa-envelope" style="font-size: 20px;"></i>  <span class="hidden-xs-only"> &nbsp;&nbsp; HMU </span>
                          </v-btn>
                        </span>  
                         <!--Shows in Medium, Large and Extra Large -->
                        <span class="hidden-xs-only hidden-sm-only mr-5">
                        <v-text-field
                          style="margin-top: 25px;"
                          dense
                          required
                          flat
                          solo
                          clearable
                          placeholder="Search Wetroverse"
                          name="search"
                          background-color="grey lighten-4"
                        ></v-text-field>

                        </span>
                    </v-toolbar>
                  </v-card>
                  <!-- The Menu --> 
                      <v-card color="white" flat id="nav-men" class=" border-bottom shadow-sm" style=" height: 40px;">
                        <v-toolbar flat  style="max-width: 630px;  height: 40px;">
                        <template>
                        <!-- Menu -->
                        <span @click="$router.go(-1)"  class="" style="margin-top:-18px;">
                        <span icon class=" text-muted">
                        <span class=""> </span><i class="fas fa-arrow-left" style="font-size: 15px;"></i>
                        </span>
                        </span> 
                         <span class="ml-5" style="margin-top:-23px;"> <v-list-item-title class="h5"><strong class="text-dark">{{ pageName }}</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i></v-list-item-title></span>
                      <v-spacer></v-spacer> 
                       <!-- <v-btn outlined small color="blue-grey" class="mr-3 hidden-lg-only hidden-xl-only" style="margin-top:-18px;"><i class="fas fa-edit mr-1"></i> Add post</v-btn> -->
                      <span class="mr-1" style="margin-top:-18px;"> <i class="fas fa-cog" style="font-size: 15px;"></i></span>
                        </template>
                        </v-toolbar>
                      </v-card>
            </div>
        </template>

  </center>
  <router-link :to="{ name : 'AddPost'}" v-if="pageName!='Add post'">
   <v-btn color="error" large rounded elevation="4" class="shadow-sm mr-3 hidden-lg-only hidden-xl-only hidden-md-only add-post-button" style=""><i class="fas fa-edit mr-1"></i> Add post</v-btn>
  </router-link>
  </div>
</template>
<style scoped>
#navbar-top{
 border-radius: 0px;

}
#nav-men{
 border-radius: 0px;

}
.navbar {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 10;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

</style>
<script>
// @ is an alias to /src
export default {
  name: 'HeaderTwo',
  props: {
   pageName: String
  },
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
  window.addEventListener('scroll', this.onScroll)
},

beforeDestroy () {
  window.removeEventListener('scroll', this.onScroll)
},
methods: {
  onScroll () {
    if(window.innerWidth<600){
 //user scrolled to the top of the page

  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    return
  }
  this.showNavbar = currentScrollPosition < this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
    }
}
}
}

</script>
