<template>
  <el-table :data="tableData" border highlight-current-row @current-change="handleCurrentChange" row-class-name="styleObj" style="width:867px;">
  
    <el-table-column label="序号" type="index" width="50">
  
    </el-table-column>
  
    <el-table-column label="宠物" width="130">
  
      </el-table-column>
      <el-table-column
        property="name"
        label="昵称"
        width="50">
      </el-table-column>
      <el-table-column
        property="address"
        label="等级"
        width="50">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="突破"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="进阶"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="经验"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="血量"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="物攻"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="物防"
        width="65">
      </el-table-column>
     <el-table-column
        property="liliang"
        label="特攻"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="特防"
        width="65">
      </el-table-column>
      <el-table-column
        property="liliang"
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
        id:58,
        pagenumber: 0
      }
    }).then(response => {
      console.log(response);
      // for (let i = 0; i < response.data.data.length; i++) {
      //   this.$store.commit('SUBMIT_HOMEWOKR',response.data.data[i]);
      //   // this.lists.push();
      // }
    }, response => {
      // this.$store.commit('OPEN_DIALOG1');
      // this.$store.commit('SET_RESPONSE', '提交失败')
      console.log(response)
    })
    },
    computed: {
  
      ...mapState({
  
        tableData: state => state.currentData,
  
  
  
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
