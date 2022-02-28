<template>
 <body class="bg-light" style="height:100%;">
  <div class="profile">
   <HeaderTwo :pageName="username"/>  <br><br><br><br>
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
      <div class="col-md- col-md-12 col-lg-6 col-xl-6 mx-auto" style="padding:0px;">
         <div class="mx-auto" style=" max-width: 650px; margin-top:-30px;">
           <!-- Cover image -->
            <v-img
            height = "150"
            src="../assets/img/6.jpg"
            elevation="1"
            ></v-img>
         <!-- Main profile page details  -->
        <v-card
        style="border-radius:0px;margin-bottom:0px;"
        class="shadow-sm"
        >
        <div class="border-bottom pb-4">
          <v-list-item>
          <img
          height = "100"
          width = "100"
          src="../assets/img/ceo1.jpg"
          :alt="username"
          class="shadow-sm mt-3 mb-3"
          style="border-radius: 20px; padding: 5px;"
          >
          <v-list-item-content style="margin-left:20px; margin-top:-50px;">
          <v-list-item-title class="h4"><strong>Divine Erhomonsele</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i>
          </v-list-item-title>
          <v-list-item-subtitle class="small">@{{username}}</v-list-item-subtitle>
          <!-- Shows in small medium large and extra large -->

          <!-- If its not logged in user -->
          <v-list-item-subtitle v-if="username!='divine.er'" class="small text-right mr-1 hidden-xs-only" style="margin-top:-54px;">
            <v-btn small color="pink white--text"><i class="fas fa-user-plus  mr-1"></i> Add</v-btn>
          </v-list-item-subtitle>
          <!-- If its logged in user -->
           <v-list-item-subtitle v-else class="small text-right mr-1 hidden-xs-only" style="margin-top:-54px;">
            <router-link to="" class="href">           
              <v-btn small outlined color=""><i class="fas fa-pencil-alt  mr-1"></i> Edit profile</v-btn>
            </router-link>
          </v-list-item-subtitle>

        
          </v-list-item-content>

          </v-list-item>
          <!-- If its not logged in user -->
            <div class="d-flex bg-white" style="border-radius: 0px; border:none; margin-left:140px; margin-top:-50px;position:relative; ">
              <router-link :to="{name:'Followers', params: { username: username }}" class="href">           
              <p class="p-0 mb-3 mt-0 small text-dark" style="padding: 0;">
              <span class="d-block small text-muted" style="font-size: 14px;">Followers</span>
              <strong style=" font-size: 13px;">345M</strong>
              </p>
              </router-link>
              <p class="p-0 mb-3 mt-0 small text-dark" style="padding: 0;margin-left: 20px;">
              <span class="d-block small text-muted" style="font-size: 14px;">Posts</span>
              <strong style=" font-size: 13px;">500</strong>
              </p>
            </div>
          <!-- If its logged in user -->
          
            <!-- <div class="d-flex bg-white" v-else style="border-radius: 0px; border:none; margin-left:140px;position:relative;  margin-top:-50px">
              <router-link :to="{name:'Followers', params: { username: username }}" class="href">           
              <p class="p-0 mb-3 mt-0 small text-dark" style="padding: 0;" >
              <strong style=" font-size: 13px;">1,933,305,345</strong> <span class="small text-muted" style="font-size: 14px;">Followers</span>
              </p>
              </router-link>
            </div> -->
            <!-- Shows in and extra small-->
             <v-btn v-if="username!='divine.er'" v class="hidden-lg-only hidden-xl-only hidden-md-only hidden-sm-only" small color="error" style=" margin-left:130px; width:150px;"><i class="fas fa-user-plus  mr-1"></i> Add</v-btn>
             <v-btn v-else v class="hidden-lg-only hidden-xl-only hidden-md-only hidden-sm-only" small outlined color="normal" style=" margin-left:130px; width:150px;"><i class="fas fa-user-check  mr-1"></i> Added</v-btn>


        </div> 

        <!-- Bio -->
        <div>
          
             <p class="pb-3 mb-2 mt-3 mr-3 ml-4 small text-muted border-bottom" style="font-size: 14px;">
          <span class="font-md"><i class="fas fa-certificate"></i> Musician</span>
          <span class="font-md ml-3"><i class="fas fa-map-marker-alt"></i> Lagos</span>
          <br><span class="font-md blue--text"><i class="fas fa-link text-muted"></i> https://wetroverse.com/username</span>
          </p>
          
          <p class="pb-3 pt-0 pr-4 pl-4 mb-0 small text-dark border-bottom" style="font-size: 14px;">
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          <span class="trend-tag">#SchoolReopen</span>
          </p>
        </div>



          <div class="mt-3">
    <v-tabs
      color="black accent-4"
      centered
    >
      <v-tab> <i class="fas fa-edit text-muted mr-2"></i> Post : 103</v-tab>
      <v-tab><i class="fas fa-camera text-muted mr-2"></i> Media : 23</v-tab>

<!-- Posts -->
      <v-tab-item>
     
           <v-divider></v-divider>
      <div
      v-for="(posts, i) in posts"
      :key="i"
      >
        <PostCard :posts="posts"/>
      </div>    
      </v-tab-item>



<!-- Media  -->
       <v-tab-item
      >
           <v-divider></v-divider>

        <v-container fluid >
          <v-row>
             <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=30"
                lazy-src="https://picsum.photos/10/6?image=30"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>
             <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=31"
                lazy-src="https://picsum.photos/10/6?image=31"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>
            <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=34"
                lazy-src="https://picsum.photos/10/6?image=34"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>
             <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=35"
                lazy-src="https://picsum.photos/10/6?image=35"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>
             <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=36"
                lazy-src="https://picsum.photos/10/6?image=36"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>


             <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=37"
                lazy-src="https://picsum.photos/10/6?image=37"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>
             <v-col
              cols="6"
            >
              <v-img
                class="rounded shadow-sm"
                src="https://picsum.photos/500/300?image=38"
                lazy-src="https://picsum.photos/10/6?image=38"
                aspect-ratio="1"
              ></v-img>
              
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>


    </v-tabs>
  </div>

  <!-- End of Tabs -->







        </v-card>
         </div>
<br><br><br>
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

import PostCard from '@/components/Post/PostCard.vue'


export default {
  name: 'Profile',
  props: {
    username : String,
    },
 components: {
    HeaderTwo,
    LeftTab,
    RightTab,
    PostCard,

  },
   data: () => ({
    //  All the Posts
  posts: [
        { 
          user: [{
            username : "divine.er"
          }],
          ad:false,
          postImage: 'https://picsum.photos/500/300?image=30',
          manyImage: 1,
          title: 'ChampionsLeague',
          postBody: "From component Donec id elit non mi @porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
        },
        {
          user: [{
            username : "divine.er"
          }],
          ad:true,
          postImage: 'https://picsum.photos/500/300?image=36',
          manyImage: 1,
          title: 'Rema',
          postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce #dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",

        },
        {
          user: [{
            username : "divine.er"
          }],
          ad:false,
          postImage: '',
          manyImage : 1,
          title: 'BBNaija',
          postBody: "From component Donec id elit non mi porta @gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
        },
        {
          user: [{
            username : "divine.er"
          }],
          ad:false,
          postImage: 'https://picsum.photos/500/300?image=37',
          manyImage: 2,
          title: '',
          postBody: "From component Donec id elit non mi #porta gravida at eget metus. Fusce dapibus, tellus ac #cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
        },
        {
          user: [{
            username : "divine.er"
          }],
          ad:false,
          postImage: 'https://picsum.photos/500/300?image=38',
          manyImage: 1,
          title: 'MummyCalmDown',
          postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce @dapibus, tellus ac cursus @commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
        },
      ],

   }),

}
</script>

<style>

</style>