<template>
<body class="bg-light">
  <div class="home">
   <HeaderOne text-danger="text-danger"/>  <br><br><br><br>
    <div class="container text-center mt-5" style=" padding: 15px; max-width: 1200px;">
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
          <!-- <Timeline/> -->
    <!-- End Timeline -->
    <v-progress-linear
      indeterminate
      color="pink"
      class="mx-auto"
      style="max-width: 650px;"
    ></v-progress-linear>

<!-- TRENDING -->
  <v-expansion-panels class="mt-2 mx-auto" style="max-width: 650px;">
    <v-expansion-panel
    >
      <v-expansion-panel-header class="font-weight-bold ">Trend Spot
        <template v-slot:actions>
            <v-icon style="font-size: 15px;">fas fa-chevron-down</v-icon>
          </template>
      </v-expansion-panel-header>
<v-divider></v-divider>
  <v-row justify="space-around" class="">
        <v-chip-group
          show-arrows
          next-icon="fas fa-chevron-right"
          prev-icon="fas fa-chevron-left"
          multiple
          active-class="primary--text"
        >
          <v-chip v-for="tag in trendSpot" :key="tag" >
            <span class="font-md">{{ tag }}</span>
          </v-chip>
        </v-chip-group>
  </v-row>


      <v-expansion-panel-content class="border-top">
  
      <v-list
        :avatar="avatar"
      >
        <v-list-item-group color="primary">
          <v-list-item
          style="padding: 0px; margin-left: -10px;"
            v-for="(item, i) in items"
            :key="i"
            class="mb-1"
          >

            <v-list-item-avatar v-if="avatar" style="border-radius: 5px;">
              <svg class="bd-placeholder-img flex-shrink-0 shadow" width="20" height="20"><rect width="100%" height="100%" :fill="item.avatar"/><text x="40%" y="55%" fill="#ffffff" dy=".3em">#</text></svg>
            </v-list-item-avatar>
            <v-list-item-content  class="border-bottom ml-2">
              <v-list-item-title v-html="item.title" class="font-md font-weight-bold"></v-list-item-title>
              <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
<!-- END TRENDING -->


 <!-- NEWS FEED -->
 <!-- First trend -->
 <div
v-for="(posts, i) in posts"
:key="i"
>
<div
v-for="(trendBlock, j) in posts.trendBlock"
:key="j"
>
 <v-card
  style="border-radius: 10px; max-width: 650px; margin-bottom:30px;"
    class="mx-auto shadow mt-4 pt-1"
  >
   <v-list-item-title class="mt-4 h5 ml-3 pl-3 mb-3"><span class="text-post-hastag">#{{ trendBlock.trend }}</span> <i class="fas fa-chevron-right move-right font-small mt-1" style="margin-right: 20px;"></i></v-list-item-title>
          <v-divider></v-divider>
  <!-- New Post -->
  <div
    v-for="(post, k) in trendBlock.post"
    :key="k"
    >
     <PostCard :posts="post"/>
  </div>  
<!-- End Post -->
      <v-list-item-title 
      class="ml-3 pl-3" 
      style="margin-top: -7px;"
      ><span class="move-right text-view-more">View all 3000k post about this trend &nbsp;&nbsp; <i class="fas fa-angle-double-right" style="margin-right: 20px;"></i></span></v-list-item-title>
      <br>
  </v-card>


<!-- Suggestions? -->
    <div v-if="j==1">
      <v-card
              class="shadow mt-5 mx-auto"
              style="border-radius: 10px; margin-bottom:30px; max-width: 650px;"
            > 
    <v-list-item-title class="h5 pt-3 ml-3 pl-3 mb-3"><strong class="text-dark">Suggestions</strong>
    <v-list-item-subtitle class="small text-right" style="margin-top:-20px;"><span rounded class="text-muted" color="white" small style="color:#555555;">
                    <i class="fas fa-chevron-right  mr-5"></i></span>
                    </v-list-item-subtitle>
              </v-list-item-title>
              <v-divider></v-divider>
        <v-list-item class="">
              <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

              <v-list-item-content style="margin-left:10px; max-width: 100%;" class="border-bottom">
                <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
              </v-list-item-title>
                <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                    <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                      <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

        <v-list-item class="">
              <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#9C27B0"/><text x="50%" y="50%" fill="#9C27B0" dy=".3em">32x32</text></svg>

              <v-list-item-content style="margin-left:10px; max-width: 100%;" class="border-bottom">
                <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong> <i class="fas fa-check-circle verify-tag" style="font-size:14px; color:#2196F3;"></i>
              </v-list-item-title>
                <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                    <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                      <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          <v-list-item class="">
              <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#FF5722"/><text x="50%" y="50%" fill="#FF5722" dy=".3em">32x32</text></svg>

              <v-list-item-content style="margin-left:10px; max-width: 100%;" class="border-bottom">
                <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full name</strong>
              </v-list-item-title>
                <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                    <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                      <v-btn text color="blue-grey"><i class="fas fa-user-plus mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>   

        <v-list-item class="">
              <svg class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#9C27B0"/><text x="50%" y="50%" fill="#9C27B0" dy=".3em">32x32</text></svg>

              <v-list-item-content style="margin-left:10px; max-width: 100%;" class="border-bottom">
                <v-list-item-title class="h5 mt-3 mxl-100"><strong class="text-dark">Full namedtfsayghdfjgklh;kj'sdfghjgfds</strong>
              </v-list-item-title>
                <v-list-item-subtitle class="small">@username</v-list-item-subtitle>
                    <v-list-item-subtitle class="small text-right" style="margin-top:-50px;"><span rounded class="ma-1 text-muted" color="white" small style="color:#555555;">
                      <v-btn text color="blue-grey"><i class="fas fa-user-plus  mr-1"></i> Follow</v-btn></span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      </v-card>
    </div>
<!-- End Suggestions -->


  </div>



  
</div>



<!-- End NEWS FEED -->

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
// @ is an alias to /src
import HeaderOne from '@/components/HeaderOne.vue'
import LeftTab from '@/components/LeftTab.vue'
import RightTab from '@/components/RightTab.vue'

import PostCard from '@/components/Post/PostCard.vue'

export default {
  name: 'Home',
  
   components: {
    HeaderOne,
    LeftTab,
    RightTab,
    PostCard,
  },
  computed: {
      trendSpot() {
          console.log("Trend spot coming from vuex")
          return this.$store.state.trendSpot
      }
        },
   data: () => ({

                    items: [
        {
          avatar: '#F44336',
          title: 'ChampionsLeague',
          subtitle: "Sports  &#9679;  1.2M posts",
        },
        {
          avatar: '#E91E63',
          title: 'Rema',
          subtitle: "Entertainment  &#9679;  1.2M posts",
        },
        {
          avatar: '#9C27B0',
          title: 'BBNaija',
          subtitle: "Nigeria  &#9679;  1.2M posts",
        },
        {
          avatar: '#673AB7',
          title: 'BlackLivesMatter',
          subtitle: "News  &#9679;  1.2M posts",
        },
        {
          avatar: '#3F51B5',
          title: 'MummyCalmDown',
          subtitle: "Challenge  &#9679;  1.2M posts",
        },
      ],

// Posts
      posts:[ 
    {
      trendBlock : [
      {  //Trend block
        trend : "ChampionsLeague",  
        post : [
          { 
            user: [{
            username : "favdoconline"
            }],
            ad:false,
            postImage: 'https://picsum.photos/500/300?image=30',
            manyImage: 1,
            title: 'ChampionsLeague',
            postBody: "From component Donec id elit non mi @porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
          },
          {
            user: [{
            username : "uberfacts"
            }],
            ad:true,
            postImage: 'https://picsum.photos/500/300?image=36',
            manyImage: 2,
            title: 'Rema',
            postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce #dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",

          },
          {
            user: [{
            username : "billgates"
            }],
            ad:false,
            postImage: '',
            manyImage: 1,
            title: 'BBNaija',
            postBody: "From component Donec id elit non mi porta @gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
          },
          {
            user: [{
            username : "cronaldo"
            }],
            ad:false,
            postImage: 'https://picsum.photos/500/300?image=37',
            manyImage: 1,
            title: '',
            postBody: "From component Donec id elit non mi #porta gravida at eget metus. Fusce dapibus, tellus ac #cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
          },
          {
            user: [{
            username : "fireboyDML"
            }],
            ad:false,
            postImage: 'https://picsum.photos/500/300?image=38',
            manyImage: 1,
            title: 'MummyCalmDown',
            postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce @dapibus, tellus ac cursus @commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
          },
        ],
      },
      //End Trend Block

       {  //Trend block
          trend : "Rema1",  
          post : [
            { 
              
              user: [{
              username : "terms"
              }],
              ad:true,
              postImage: 'https://picsum.photos/500/300?image=30',
              manyImage: 1,
              title: 'ChampionsLeague',
              postBody: "From component Donec id elit non mi @porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
            {
              user: [{
              username : "heisrema"
              }],
              ad:true,
              postImage: 'https://picsum.photos/500/300?image=36',
              manyImage: 1,
              title: 'Rema',
              postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce #dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",

            },
            {
              user: [{
              username : "instaBlog"
              }],
              ad:false,
              postImage: '',
              manyImage: 1,
              title: 'BBNaija',
              postBody: "From component Donec id elit non mi porta @gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
            {
              user: [{
              username : "brbfootball"
              }],
              ad:false,
              postImage: 'https://picsum.photos/500/300?image=37',
              manyImage: 2,
              title: '',
              postBody: "From component Donec id elit non mi #porta gravida at eget metus. Fusce dapibus, tellus ac #cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
            {
              user: [{
              username : "fact"
              }],
              ad:false,
              postImage: 'https://picsum.photos/500/300?image=38',
              manyImage: 1,
              title: 'MummyCalmDown',
              postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce @dapibus, tellus ac cursus @commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
          ],
      },
      //End Trend Block

      {  //Trend block
          trend : "#2021IsHere",  
          post : [
            { 
              
              user: [{
              username : "terms"
              }],
              ad:true,
              postVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
              manyImage: 1,
              title: 'ChampionsLeague',
              postBody: "From component Donec id elit non mi @porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
            {
              user: [{
              username : "heisrema"
              }],
              ad:true,
              postImage: 'https://picsum.photos/500/300?image=36',
              manyImage: 1,
              title: 'Rema',
              postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce #dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",

            },
            {
              user: [{
              username : "instaBlog"
              }],
              ad:false,
              postImage: '',
              manyImage: 1,
              title: 'BBNaija',
              postBody: "From component Donec id elit non mi porta @gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
            {
              user: [{
              username : "brbfootball"
              }],
              ad:false,
              postImage: 'https://picsum.photos/500/300?image=37',
              manyImage: 2,
              title: '',
              postBody: "From component Donec id elit non mi #porta gravida at eget metus. Fusce dapibus, tellus ac #cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
            {
              user: [{
              username : "fact"
              }],
              ad:false,
              postImage: 'https://picsum.photos/500/300?image=38',
              manyImage: 1,
              title: 'MummyCalmDown',
              postBody: "From component Donec id elit non mi porta gravida at eget metus. Fusce @dapibus, tellus ac cursus @commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. #ChampionsLeague",
            },
          ],
      },
      //End Trend Block

      
      
      
      ],
       
       



      },

    ],  


      avatar: true,
      twoLine: true,
      length: 3,
      onboarding: 0,
       }),

methods:{
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
}

}
</script>

<style scoped>

template{
  text-transform: lowercase;
}

</style>