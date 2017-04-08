<template>
  <div id="app">
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
      // this.$http.get("http://localhost:8081/character/findCharacters",   {
      //   params: {
      //         keyType: 0,
      //         keyValue:2
      //       }
      // }).then(response => {
      //       console.log(response)
      //       console.log(this._data)
      //       // this.$store.commit('SET_TABLE',response.data.data)
      // }, response =>{
      //    console.log(response)
      // })

  },
  name: 'app',
  computed:{
     ...mapState({
          Datajson:state => state.userList,
          tabId:state => state.tabId
     })
  },
  data(){
    return{

         // dialogVisible: false,
         radio:'1',
         input2:'',
         nodata:false
      }
  },
  components:{First},

  methods: {


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
  margin-top: 60px;
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
