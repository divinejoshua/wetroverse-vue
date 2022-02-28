<template>
<div>
 <v-list-item>
      <img
        height = "40"
        width = "40"
        src="../../assets/img/ceo1.jpg"
        alt="John"
        class="mt-1 ml-2 profile-image"
      >
      <v-list-item-content style="margin-left:10px;">
        <v-list-item-title class="h5 mt-1"><strong>Full name test101</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i>
      </v-list-item-title>
        <v-list-item-subtitle class="small">@{{posts.user[0].username}}</v-list-item-subtitle>
        <!-- <v-list-item-subtitle class="small"> <i class="fas fa-map-marker-alt"></i> Lagos, Nigeria &nbsp;&nbsp;|&nbsp;&nbsp; 6:30 PM - 2 june, 2020</v-list-item-subtitle>  <v-btn text small color="blue-grey"><span style="font-size:12px;"><i class="fas fa-user-check  mr-1"></i> Follow</span></v-btn> -->
       
           <v-list-item-subtitle class="small text-right mr-1" style="margin-top:-50px;"><v-btn text small color="blue-grey"><span style="font-size:12px;"><i class="fas fa-user-check  mr-1"></i> Follow</span></v-btn>  <span class="ml-1 ma-1" v-if="posts.ad" tile color="white" small style="color: #F44336;"> <i class="fas fa-ad"></i></span> </v-list-item-subtitle>
          <v-list-item-subtitle class="small text-right ml-2" style="margin-top:-50px;" v-if="!posts.ad">
                <v-menu>
                <template v-slot:activator="{ on, attrs }">
                <span
                v-bind="attrs"
                v-on="on"
                rounded class="ma-1 text-muted" color="white" small style="color:#555555;"
                >
                <i class="fas fa-ellipsis-v"></i>
                </span>
                </template>
               <v-list>
                  <v-list-item>
                  <v-list-item-title>&nbsp; &nbsp; Follow</v-list-item-title>
                  </v-list-item>
                </v-list>
                 <v-list style="margin-top: -27px;">
                  <v-list-item>
                  <v-list-item-title>View Profile</v-list-item-title>
                  </v-list-item>
                </v-list>
                 <v-list style="margin-top: -27px;">
                  <v-list-item>
                  <v-list-item-title>Copy Link</v-list-item-title>
                  </v-list-item>
                </v-list>
                 <v-list style="margin-top: -27px;">
                  <v-list-item>
                  <v-list-item-title>Save</v-list-item-title>
                  </v-list-item>
                </v-list>
                 <v-list style="margin-top: -27px;">
                  <v-list-item>
                  <v-list-item-title>Report post</v-list-item-title>
                  </v-list-item>
                </v-list>
                 <v-list style="margin-top: -27px;">
                  <v-list-item>
                  <v-list-item-title>Block @user</v-list-item-title>
                  </v-list-item>
                </v-list>
                </v-menu>
             
  </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
<div class="pt-1 pr-4 pl-4 pb-4">
     <v-card-text color="black" style="border:none;  font-size:0.9rem;font-weight:400;line-height:1.6; background-color:#ffffff; padding: 0px;">
       <div
       v-if="posts.postImage"
       
       >
       <!-- if image is one -->
        <div v-if="posts.manyImage<2">
            <v-img
            :src=posts.postImage
            class="shadow-sm rounded"
            ></v-img>
        </div>
       <!-- if image is More than one -->
        <div v-else>
            <v-window v-model="onboarding">
                  <v-window-item
                  
                  >
                    <v-card
                      color="transparent"
                      style="padding:0px;"
                    >
                    
                          <v-img
                  src="../../assets/img/10.jpg"
                  class="shadow-sm rounded"
                ></v-img>
                    </v-card>
                  </v-window-item>
                  <v-window-item
                  
                  >
                    <v-card
                      color="transparent"
                      style="padding:0px;"
                    >
                    
                          <v-img
                  src="../../assets/img/11.jpg"
                  class="shadow-sm rounded"
                ></v-img>
                    </v-card>
                  </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-between">
                  <v-btn
                    text
                    @click="prev"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
                  >
                    <v-item
                      v-slot="{ active, toggle }"
                    >
                      <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                      >
                        <v-icon>mdi-record</v-icon>
                      </v-btn>
                    </v-item>
                      <v-item
                      v-slot="{ active, toggle }"
                    >
                      <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                      >
                        <v-icon>mdi-record</v-icon>
                      </v-btn>
                    </v-item>
                  </v-item-group>
                  <v-btn
                    text
                    @click="next"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
        </div>
        
       </div>
       <!-- IF there is Video -->
       <div v-else-if="posts.postVideo">
          <div class="player-container">
          <video style="width:100%;" controls controlsList="nodownload" oncontextmenu="return false;">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4"  type="video/mp4">
          Your browser does not support HTML video.
          </video>
          <!-- <vue-core-video-player @play="{{}}"  class="shadow-sm" autoplay="false" src="https://www.w3schools.com/html/mov_bbb.mp4" style="z-index:1;"></vue-core-video-player> -->
          </div>
       </div>  
     
        <div class="mt-2 mb-0 font-post">
            <div class="text-post-title  mb-1" v-if="posts.title">{{posts.title}}</div>
                <template v-for="body in posts.postBody.split(/\s([@#][\w_-]+)/g)">
                <router-link class="blue--text href" @click.native="scrollToTop" v-if="body[0] == '#'" :to="`/${body.slice(1)}`" v-bind:key=body>&nbsp;{{body}}</router-link>
                <router-link class="blue--text href" @click.native="scrollToTop" v-else-if="body[0] == '@'" :to="`/${body.slice(1)}`" v-bind:key=body>&nbsp;{{body}}</router-link>
                <template v-else>{{body}}</template>
                </template>

            </div>
            
    </v-card-text>

     <v-card-text color="black" style="border:none;font-size:0.9rem;font-weight:400;line-height:1.7; background-color:#ffffff; color: #555555; padding-left:0px;">

     <div class="d-flex mb-2">
        <img
        height = "20"
        width = "20"
        src="../../assets/img/t2.jpg"
        class=" border img-circle"
        elevation="3"
        >
     <img
        height = "20"
        width = "20"
        src="../../assets/img/t3.jpg"
        class="border img-circle"
        elevation="3"
    >
     <img
        height = "20"
        width = "20"
        src="../../assets/img/t1.jpg"
        class="border img-circle  mr-1"
        elevation="3"
    >
    <div style="font-size:0.8rem;">
          <span class="post-result">3,402</span> Likes,
          <span class="post-result">9,384</span> Reposts, 
          <span class="post-result">9,384</span> Reposts, 
    </div>
     </div>
        <div class="post-date mt-3">6:30 PM - 2 june, 2020  <span style="margin-left:20px;" class="post-date"><i class="fas fa-globe"></i> Lagos, Nigeria</span></div>

    </v-card-text>
</div>
 <v-divider></v-divider>
   <div style="margin:10px; width:100% padding:0px; margin-left:10px; margin-top: 5px; margin-bottom:5px; ">
            <v-btn text color="orange"><i class="fas fa-star"></i></v-btn>
            <v-btn text color="pink"><i class="fas fa-retweet"></i></v-btn>
            <v-btn text color="" style="float:right;font-size:0rem;"><i class="mr-2 far fa-comment-dots"></i> 2,000 comment</v-btn>
 </div>
 <v-text-field
      solo
      label="Add a comment..."
      required
      style="border-radius:0px; border-top:0px;"
      append-icon="mdi-send"
      @click:append="sendComment"
    ></v-text-field> 
    
 </div>
<!-- End Post -->
  
</template>

<script>
export default {
props: {
    posts : Object
},

 data: () => ({
    onboarding: 0,
  }),

methods: { 
    //For hashtags and mention tags
    scrollToTop() {
      if(this.$route.name==="Profile"){
        window.scrollTo(0,0);
        }
    },

// This is for the slider 
     next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },


// Sending comment 
    sendComment () {
         console.log("Comment sent")
    },


}
}
</script>

<style>

</style>