<template>

  <el-table
      :data="tableData"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      row-class-name="styleObj"
      style="width:867px;">
      <el-table-column
        label="总点数"
        property="struggleTotal"
        width="130">
      </el-table-column>
      <el-table-column
        label="血量"
        width="70"
        property="struggleHP">
      </el-table-column>
        <el-table-column
        label="物攻"
        width="70"
        property="struggleAtk">
      </el-table-column>
      <el-table-column
        label="物防"
        width="70"
        property="struggleDef">
      </el-table-column>
      <el-table-column
        label="特攻"
        width="70"
        property="struggleSAtk">
      </el-table-column>
      <el-table-column
        label="特防"
        width="70"
        property="struggleSDef">
      </el-table-column>
      <el-table-column
        label="速度"
        width="70"
        property="struggleSpd">
      </el-table-column>
    </el-table>

    <!-- <sselect></sselect> -->
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    beforeCreate(){

    },
    computed:{
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
      }
    },
    filters:{
      quality1:function(value){
        if(value.length >0){
          var str = value.split(',')[0];
          return str;
        }else{
          return '';
        }
      },
      quality2:function(value){
        if(value.length>0){
          var str = value.split(',')[1];
          return str;
        }else{
          return '';
        }
      }
    }
  }
</script>
<style>
  .el-table .cell,
  .el-table th>.cell{
     padding-right: 10px!important;
     padding-left: 10px!important;
     text-align: center;
  }

</style>
