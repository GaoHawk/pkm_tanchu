<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
  
    <el-tab-pane label="角色管理" name="first">
  
      <character></character>
  
    </el-tab-pane>
  
    <el-tab-pane label="阵容" name="second" >
      <el-select v-model="value" size="mini" @change="selectChange" style="float:left;margin-bottom:3px;">

      <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.value">

      </el-option>

      </el-select>
      <div style="clear:both;"></div>
      <TTable></TTable>
  
    </el-tab-pane>
  
    <el-tab-pane label="宠物" name="third">
  
      <TTable></TTable>
  
    </el-tab-pane>
  
    <el-tab-pane label="精灵装备" name="fourth">
  
      <!--精灵装备-->
  
      <div class="custom-select">
  
      </div>
  
      <zhuangbei></zhuangbei>
  
    </el-tab-pane>
  
    <el-tab-pane label="材料道具" name="five">
  
      <!--材料道具-->
  
      <itemm></itemm>
  
    </el-tab-pane>
  
  </el-tabs>
</template>
<style>
  .custom-style {
  
    text-align: right;
  
  }
  
  
  
  .custom-select {
  
    text-align: right;
  
    margin-bottom: 3px;
  
  }
</style>
<script>
  import userComponent from './user.vue'
  
  import zhuangbei from './table2.vue'
  
  import itemm from './table3.vue'
  
  import character from './character.vue'
  
  import TTable from './table.vue'
  
  import {
  
    mapState,
  
    mapActions
  
  } from 'vuex'
  
  
  
  export default {
  
    computed: {
  
      ...mapState({
  
  
  
      })
  
    },
  
    data() {
  
      return {
  
        activeName2: 'first',
  
        labelPosition: 'left',
  
        right: {
  
          mariginLeft: "20px"
  
        },
  
        options: [{
  
          id: 1,
  
          value: '选项1',
  
          label: '背包'
  
        }, {
  
          id: 2,
  
          value: '选项2',
  
          label: '竞技防守阵容'
  
        }],
  
        value: '选项1'
  
      }
  
    },
  
    components: {
  
      userComponent,
  
      character,
  
      TTable,
  
      zhuangbei,
  
      itemm
  
    },
  
  
  
    methods: {
  
      handleOpen(key, keyPath) {
  
        console.log(key, keyPath);
  
      },
  
      handleClose(key, keyPath) {
  
        console.log(key, keyPath);
  
      },
  
      handleClick(tab, event) {
  
        // console.log(tab,event);
  
        // if(tab.label == '武将'){
  
        //   console.log(tab)
  
        //   this.$http.get("api/table2").then(response => {
  
        //         this.$store.commit('SET_TABLE',response.data.data)
  
        //   }, response =>{
  
        //      console.log(response)
  
        //   })
  
        // }
  
      },
  
      handleIconClick(ev) {
  
        console.log(ev)
  
      },
  
      selectChange(val) {
  
        // if(val == '选项2'){
  
        //    this.$http.get("api/table2").then(response => {
  
        //          this.$store.commit('SET_TABLE',response.data.data)
  
        //    }, response =>{
  
        //       console.log(response)
  
        //    })
  
        // }else{
  
  
  
        // }
  
      }
  
  
  
    }
  
  }
</script>
