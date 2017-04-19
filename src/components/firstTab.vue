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
      <scTap v-show="petInfoShow" style="margin-top:15px;"></scTap>
      <pageNum :totalPage="petPage" type="pets" style="margin-top:7px;" v-if="!petInfoShow && petPage>1"></pageNum>
    </el-tab-pane>
  
    <el-tab-pane label="精灵装备" name="fourth">
  
      <!--精灵装备-->
  
      <div class="custom-select">
  
      </div>
  
      <zhuangbei></zhuangbei>
      <pageNum :totalPage="equipPage*8" type="equip" style="margin-top:7px;margin-right:9%;" v-if="equipPage>1"></pageNum>
    </el-tab-pane>
  
    <el-tab-pane label="材料道具" name="five">
  
      <!--材料道具-->
  
      <itemm></itemm>
  
      <pageNum :totalPage="itemsPage*8" type="items" style="margin-right:27%;margin-top:7px;" v-if="itemsPage>1"></pageNum>
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
  
   import scTap from './secondTap.vue'
  
  
  export default {
  
    computed: {
  
      ...mapState({
        totalPet: state => state.totalPet,
        itemsPage: state => state.itemsPage,
        equipPage: state => state.equipPage,
        petPage: state => state.petPage,
        petInfoShow: state => state.petInfoShow
  
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

      pageNum,

      scTap
  
    },
  
  
  
    methods: {
  
      handleOpen(key, keyPath) {
  
        console.log(key, keyPath);
  
      },
  
      handleClose(key, keyPath) {
  
        console.log(key, keyPath);
  
      },
  
      handleClick(tab, event) {
  
        switch(tab.label)
        {
          case '阵容':
          console.log(this.totalPet)
          this.$store.commit('SET_PET_DATA',this.totalPet.attackPets);
          this.value = '选项1'
          break;
          case '宠物':
          this.$store.commit('SET_PET_DATA',this.totalPet.myPets);
          this.$store.commit('SET_PETINFO_SHOW',false);
          break;
          case '精灵装备':
          this.$http.get('http://localhost:8081/account/myEquipsInfo',{
            params: {
              cId:5,
              pagenumber: 1
            }
          }).then(response => {
            console.log(response);
            this.$store.commit('SET_EQUIP_DATA',response.data.myEquips);
            this.$store.commit('SET_EQUIP_PAGE',response.data.totalPage);
          }, response => {
            // this.$store.commit('OPEN_DIALOG1');
            // this.$store.commit('SET_RESPONSE', '提交失败')
            console.log(response)
          })
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
