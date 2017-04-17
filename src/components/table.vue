<template>
  <el-table :data="petData" border highlight-current-row @current-change="handleCurrentChange" row-class-name="styleObj" style="width:877px;">
  
    <el-table-column label="序号" type="index" width="50">
  
    </el-table-column>
  
    <el-table-column 
      property="petName"
      label="宠物" 
      width="100">
  
      </el-table-column>
      <el-table-column
        property="nickname"
        label="昵称"
        width="90">
      </el-table-column>
      <el-table-column
        property="level"
        label="等级"
        width="50">
      </el-table-column>
      <el-table-column
        property="breakthrough"
        label="突破"
        width="65">
      </el-table-column>
      <el-table-column
        property="evolution"
        label="进阶"
        width="65">
      </el-table-column>
      <el-table-column
        property="exp"
        label="经验"
        width="65">
      </el-table-column>
      <el-table-column
        property="HPValue"
        label="血量"
        width="65">
      </el-table-column>
      <el-table-column
        property="AtkValue"
        label="物攻"
        width="65">
      </el-table-column>
      <el-table-column
        property="DefValue"
        label="物防"
        width="65">
      </el-table-column>
     <el-table-column
        property="SAtkValue"
        label="特攻"
        width="65">
      </el-table-column>
      <el-table-column
        property="SDefValue"
        label="特防"
        width="65">
      </el-table-column>
      <el-table-column
        property="SpdValue"
        label="速度"
        width="65">
      </el-table-column>
    </el-table>
    <!-- <sselect></sselect> -->
</template>
<script>
  import {
  
    mapState
  
  } from 'vuex'
  
  export default {
    beforeCreate(){
     this.$http.get('http://localhost:8081/account/myPetsInfo  ',{
      params: {
        cId:5,
        pagenumber: 0
      }
    }).then(response => {
      console.log(response);

      // this.$store.commit('SET_PET_DATA',response.data.myPets);
      this.$store.commit('SET_TOTAL_PET',response.data);
      // this.$store.commit('JSON_DATA_PET',response.data);
      this.$store.commit('SET_PET_PAGE',response.data.totalPage);
    }, response => {
      // this.$store.commit('OPEN_DIALOG1');
      // this.$store.commit('SET_RESPONSE', '提交失败')
      console.log(response)
    })
    },
    computed: {
  
      ...mapState({
  
        petData: state => state.petData,
        
  
      })
  
    },
  
    data() {
  
      return {
  
        currentRow: null,
  
  
  
      }
  
    },
  
    methods: {
  
      handleCurrentChange(val) {
  
        this.currentRow = val;
  
      },
  
      openDialog: function(msg) {
  
        this.$store.commit('OPEN_DIALOG');
  
        this.$store.commit('NEW_TITLE', msg);
  
      }
  
    }
  
  }
</script>
<style>
  .el-table .cell,
  
  .el-table th>.cell {
  
    padding-right: 10px!important;
  
    padding-left: 10px!important;
  
    text-align: center;
  
  }
</style>
