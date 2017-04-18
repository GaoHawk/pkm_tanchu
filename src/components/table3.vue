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
        property="itemId"
        width="170">
      </el-table-column>
      <el-table-column
        label="道具名称"
        property="itemName"
        width="310">
      </el-table-column>
      <el-table-column
        property="itemNum"
        label="数量"
        width="170">
      </el-table-column>
    </el-table>
</template>
<script>
  import { mapState } from 'vuex'
  import pagination from './pageination.vue'
  export default {
    beforeCreate(){
      this.$http.get('http://localhost:8081/account/myItems',{
        params: {
          cId:5,
          pagenumber: 1
        }
      }).then(response => {
        console.log(response);

        this.$store.commit('SET_ITEMS_DATA',response.data.myItems);
        console.log(this.tableData);
        this.$store.commit('SET_ITEMS_PAGE',response.data.totalPage);
      }, response => {
        // this.$store.commit('OPEN_DIALOG1');
        // this.$store.commit('SET_RESPONSE', '提交失败')
        console.log(response)
      })
    },
    computed:{
       ...mapState({
         tableData: state => state.itemsData,
         totalPage: state => state.itemsPage

       })
    },
    data() {
      return {
        currentRow: null,

      }
    },
    components:{ pagination },
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
