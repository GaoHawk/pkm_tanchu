<template>
  <el-table :data="tableData" border highlight-current-row @current-change="handleCurrentChange" row-class-name="styleObj" style="width:867px;">
  
    <el-table-column label="序号" type="index" width="50">
  
    </el-table-column>
  
    <el-table-column label="宠物" width="130">
  
      <template scope="scope">
  
              <a @click="openDialog('武将数据')" style="color:#ff0000;text-decoration:underline;position:relative;top:3px;cursor:pointer;">{{ scope.row.general}} </a>
  
              <div style="font-size:10px;">{{ scope.row.generalID }} </div>
</template>
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
