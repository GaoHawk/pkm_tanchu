<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <div style="float:right;margin-right:2%;">
    <i class="el-icon-close" style="position:fixed;top:186px;z-index:100;cursor:pointer;" @click="closeInfo"></i>
    </div>

  
    <el-tab-pane label="装备" name="first">
  
      <zhuangbei></zhuangbei>
  
    </el-tab-pane>
  
    <el-tab-pane label="当前技能" name="second" >
    <skillTable></skillTable>

  
    </el-tab-pane>
  
    <el-tab-pane label="可回忆技能" name="third">
  
      <skillTable></skillTable>

    </el-tab-pane>
  
    <el-tab-pane label="努力值" name="fourth">
  
       <struggle></struggle>


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
  
  import zhuangbei from './table2.vue'

  import skillTable from './skillTable.vue'

  import struggle from './endeavorTable.vue'
  
  import {
  
    mapState,
  
    mapActions
  
  } from 'vuex'
  
  
  
  export default {
    beforeCreate(){
    },
    computed: {
  
      ...mapState({
        totalPet: state => state.totalPet,
        skillData: state => state.skillData,
        unskillData: state => state.unskillData,
        struggleData: state => state.struggleData
  
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
  
      zhuangbei,

      skillTable,

      struggle
  
    },
  
  
  
    methods: {
  
      handleOpen(key, keyPath) {
  
        // console.log(key, keyPath);
  
      },
  
      handleClose(key, keyPath) {
  
        // console.log(key, keyPath);
  
      },
  
      handleClick(tab, event) {
  
        switch(tab.label)
        {
          case '装备':
          this.value = '选项1'
          break;
          case '当前技能':
          this.$store.commit('SET_TABLE',this.skillData);
          break;
          case '可回忆技能':
          this.$store.commit('SET_TABLE',this.unskillData);
          break;
          case '努力值':
          this.$store.commit('SET_TABLE',this.struggleData);
          break;
        }
  
      },
  
      handleIconClick(ev) {
  
  
      },
      closeInfo(){
         this.$store.commit('SET_PETINFO_SHOW',false);
         this.$store.commit('SET_PET_DATA',this.totalPet.myPets);
      },
      selectChange(val) {

      }
  
  
  
    }
  
  }
</script>
