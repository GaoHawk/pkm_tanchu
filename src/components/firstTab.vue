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
        totalPet: state => state.totalPet
  
  
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
  
      selectChange(val) {
        console.log(val);
        switch(val)
        {
          case '选项1':
          this.$store.commit('SET_PET_DATA',this.totalPet.attackPets);
          break;
          case '选项2':
          this.$store.commit('SET_PET_DATA',this.totalPet.defencePets);
          break;
        }
      }
  
  
  
    }
  
  }
</script>
