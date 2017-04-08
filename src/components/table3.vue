<template>

  <el-table
      :data="tableData"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      row-class-name="styleObj"
      style="width:655px;">
      <el-table-column
        label="道具ID"
        type="index"
        width="170">
      </el-table-column>
      <el-table-column
        label="道具名称"
        width="310">
        <template scope="scope">
            <a @click="openDialog('武将数据')" style="color:#ff0000;text-decoration:underline;position:relative;top:3px;cursor:pointer;">{{ scope.row.general}} </a>
            <div style="font-size:10px;">{{ scope.row.generalID }} </div>
        </template>
      </el-table-column>
      <el-table-column
        property="name"
        label="数量"
        width="170">
      </el-table-column>
     

    </el-table>
    <!-- <sselect></sselect> -->
</template>
<script>
  import { mapState } from 'vuex'
  export default {
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
      },
      openDialog:function(msg){
        this.$store.commit('OPEN_DIALOG');
        this.$store.commit('NEW_TITLE',msg);
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
