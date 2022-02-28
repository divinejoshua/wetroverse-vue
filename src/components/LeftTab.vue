<template>
  <div style="">
        <v-card
          class="mx-auto shadow-sm mb-3 mr-6 mt-5"
          style="max-width: 100%;border-radius: 10px;"
          elevation="2"
        >
     <v-list-item class="mb-3">
          <img
        height = "40"
        width = "40"
        src="../assets/img/user1.jpg"
        alt="John"
        class="shadow-sm rounded mt-3"
        elevation="4"
          >
          <v-list-item-content style="margin-left:10px; max-width: 220px;">
            <v-list-item-title class="h5 mt-3"><strong class="text-dark">Full name</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i>
          </v-list-item-title>
            <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
          <div class="d-flex border-bottom bg-white" style="border-radius: 0px; border:none;">
          <p class="p-0 mb-3 mt-0 small text-dark" style="padding: 0;margin-left: 20px;">
          <strong class="d-block small text-muted" style="font-size: 13px;">Followers <span class="font-weight-light" style="color: #999999; font-size: 13px;"></span></strong>
          <span style=" font-size: 14px;">1.2M</span>
          </p>
          <p class="p-0 mb-3 mt-0 small text-dark" style="padding: 0;margin-left: 20px;">
          <strong class="d-block small text-muted" style="font-size: 13px;">Following <span class="font-weight-light" style="color: #999999; font-size: 13px;"></span></strong>
          <span style=" font-size: 14px;">1,900</span>
          </p>
          </div>
          <p class="pb-3 mb-2 mt-2 mr-3 ml-3 small text-muted border-bottom" style="font-size: 14px;">
          <span class="font-md"><i class="fas fa-certificate"></i> Musician</span>
          <span class="font-md ml-3"><i class="fas fa-map-marker-alt"></i> Lagos</span>
          <br><span class="font-md">https://wetroverse.com/username</span>
          </p>
         
          <p class="pb-3 pt-0 pr-4 pl-4 mb-0 small text-dark border-bottom" style="font-size: 14px;">
           <template v-for="part in text.split(/\s([@#][\w_-]+)/g)">
          <router-link class="blue--text href" @click.native="scrollToTop" v-if="part[0] == '#'" :to="`/${part.slice(1)}`" v-bind:key=part>&nbsp;{{part}}</router-link>
          <router-link class="blue--text href" @click.native="scrollToTop" v-else-if="part[0] == '@'" :to="`/${part.slice(1)}`" v-bind:key=part>&nbsp;{{part}}</router-link>
          <template v-else>{{part}}</template>
          </template>
          </p>

          <v-card-actions>
            <v-btn
              color="info"
              block
              class="font-md"
              @click="$router.push({ name : 'AddPost'})"
            >
            <i class="fas fa-edit mr-3"></i> Add post
            </v-btn>
          </v-card-actions>
        </v-card><br>
        <p class="mt-4 small text-dark" style="font-size: 14px;">
        About · Legal · Privacy · Safety · Feedback · API · Blog · Terms of use · Advertise
        <span class="blue--text"><br>&copy; 2020. Wetroverse Inc. </span>
        </p>
      </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'LeftTab',
   data () {
    return {
      text: 'Donec id elit non mi porta #gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, @tortor mauris #condimentum nibh, ut fermentum massa justo sit amet risus. #SchoolReopen',
    }
  },
 methods: { 
    //For hashtags and mention tags
    scrollToTop() {
       if(this.$route.name==="Profile"){
        window.scrollTo(0,0);
        }
    },
}

}
</script>
