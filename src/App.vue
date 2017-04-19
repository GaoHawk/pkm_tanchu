<template>
  <div id="app"  >
    <el-row class="tac" :gutter="10">
      <el-col :span="24">
          <First v-show="tabId == 1"></First>
          <!-- 运营管理表格 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>

import First from './components/firstTab.vue'
import { mapState, mapActions } from 'vuex'

export default {
  beforeCreate(){

    // if(sessionStorage.showHome){
    //   this.$store.commit('SET_SHOWHOME',sessionStorage.showHome);
    // }

     var userId = window.location.search.split('?')[1].split('=')[1];
     this.$store.commit('SET_USER_ID',userId);

  },
  name: 'app',
  computed:{
     ...mapState({
          Datajson:state => state.userList,
          tabId:state => state.tabId,
          showHome:state => state.showHome
     })
  },
  data(){
    return{

         // dialogVisible: false,
         radio:'1',
         input2:'',
         nodata:false,
      }
  },
  components:{First},

  methods: {
      closeHome(key, keyPath) {
        this.$store.commit('SET_SHOWHOME',false);
        this.showHome = false;

      },

  }
}
</script>

<style>
.custom-radio{
    text-align: left;
    padding-left: 5px;
}
.custom-bottom{
   margin-bottom: 6px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0 auto;
    margin-top: 35px;
  min-width:876px;
  width:80%;
}
.tabs{
   width:66%;
   display: flex;
   position: fixed;
   left: 34%;
   top: 81px;
}
.nav{
  display: inline;
}
</style>
