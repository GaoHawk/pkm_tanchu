<template>

  <el-table
      :data="tableData"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      row-class-name="styleObj"
      style="width:867px;">
      <el-table-column
        label="装备ID"
        type="index"
        width="70">
      </el-table-column>
      <el-table-column
        label="装备名称"
        width="130">
        <template scope="scope">
            <a @click="openDialog('武将数据')" style="color:#ff0000;text-decoration:underline;position:relative;top:3px;cursor:pointer;">{{ scope.row.general}} </a>
            <div style="font-size:10px;">{{ scope.row.generalID }} </div>
        </template>
      </el-table-column>
      <el-table-column
        property="name"
        label="装备位"
        width="75">
      </el-table-column>
      <el-table-column
        property="address"
        label="星阶"
        width="55">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="强化等级"
        width="130">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="属性1"
        width="75">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="属性2"
        width="75">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="额外属性1"
        width="130">
      </el-table-column>
      <el-table-column
        property="liliang"
        label="额外属性2"
        width="125">
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
