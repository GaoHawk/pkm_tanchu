<template>
  <div id="app"  >
    <div style="float:right;margin-right:2%;">
    <i class="el-icon-close" style="position:fixed;top:16px;z-index:100;cursor:pointer;" @click="closeHome"></i>
    </div>
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
    console.log(sessionStorage);
    if(sessionStorage.showHome){
      this.$store.commit('SET_SHOWHOME',sessionStorage.showHome);
    }
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
        console.log(sessionStorage)
        console.log(this.showHome)
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
  margin:0 28px;
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
