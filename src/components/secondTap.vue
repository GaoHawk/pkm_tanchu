<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <div style="float:right;margin-right:2%;">
    <i class="el-icon-close" style="position:fixed;top:174px;z-index:100;cursor:pointer;" @click="closeInfo"></i>
    </div>

  
    <el-tab-pane label="装备" name="first">
  
      <zhuangbei></zhuangbei>
  
    </el-tab-pane>
  
    <el-tab-pane label="当前技能" name="second" >


  
    </el-tab-pane>
  
    <el-tab-pane label="可回忆技能" name="third">
  


    </el-tab-pane>
  
    <el-tab-pane label="努力值" name="fourth">
  
      <!--精灵装备-->
  


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

  import pageNum from './pageination.vue'
  
  import {
  
    mapState,
  
    mapActions
  
  } from 'vuex'
  
  
  
  export default {
    beforeCreate(){
        console.log('petInfo');
    },
    computed: {
  
      ...mapState({
        totalPet: state => state.totalPet,
        itemsPage: state => state.itemsPage,
        equipPage: state => state.equipPage,
        petPage: state => state.petPage
  
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
  
      itemm,

      pageNum
  
    },
  
  
  
    methods: {
  
      handleOpen(key, keyPath) {
  
        console.log(key, keyPath);
  
      },
  
      handleClose(key, keyPath) {
  
        console.log(key, keyPath);
  
      },
  
      handleClick(tab, event) {
  
        console.log(tab,event);
        switch(tab.label)
        {
          case '阵容':
          console.log(this.totalPet)
          this.$store.commit('SET_PET_DATA',this.totalPet.attackPets);
          this.value = '选项1'
          break;
          case '宠物':
          this.$store.commit('SET_PET_DATA',this.totalPet.myPets);
          break;
          case '精灵装备':
          break;
          case '材料道具':
          break;
        }
  
      },
  
      handleIconClick(ev) {
  
        console.log(ev)
  
      },
      closeInfo(){
         console.log('close');
         this.$store.commit('SET_PETINFO_SHOW',false);
         this.$store.commit('SET_PET_DATA',this.totalPet.myPets);
      },
      selectChange(val) {
        console.log(val);

      }
  
  
  
    }
  
  }
</script>
