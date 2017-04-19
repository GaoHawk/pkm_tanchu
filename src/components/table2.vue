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
        property="equipId"
        width="70">
      </el-table-column>
      <el-table-column
        label="装备名称"
        width="130"
        property="equipName">
      </el-table-column>
      <el-table-column
        property="part"
        label="装备位"
        width="75">
      </el-table-column>
      <el-table-column
        property="equipLevel"
        label="星阶"
        width="55">
      </el-table-column>
      <el-table-column
        property="upLevel"
        label="强化等级"
        width="130">
      </el-table-column>
      <el-table-column
        label="属性1"
        width="75">
        <template scope="scope">
        <div style="font-size:10px;">{{ scope.row.equipValueStr | quality1 }} </div>
        </template>
      </el-table-column>
      <el-table-column
        label="属性2"
        width="75">
        <template scope="scope">
        <div style="font-size:10px;">{{ scope.row.equipValueStr | quality2 }} </div>
        </template>
      </el-table-column>
      <el-table-column
        label="额外属性1"
        width="130">
        <template scope="scope">
        <div style="font-size:10px;">{{ scope.row.extraValueStr | quality1 }} </div>
        </template>
      </el-table-column>
      <el-table-column
        label="额外属性2"
        width="125">
        <template scope="scope">
        <div style="font-size:10px;">{{ scope.row.extraValueStr | quality2 }} </div>
        </template>
      </el-table-column>

    </el-table>
    <!-- <sselect></sselect> -->
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    mounted(){
       this.$http.get('/account/myEquipsInfo',{
        params: {
          cId:this.cId,
          pagenumber: 1
        }
      }).then(response => {

        this.$store.commit('SET_EQUIP_DATA',response.data.myEquips);
        this.$store.commit('SET_EQUIP_PAGE',response.data.totalPage);
      }, response => {
        // this.$store.commit('OPEN_DIALOG1');
        // this.$store.commit('SET_RESPONSE', '提交失败')
        console.log(response)
      })
    },
    computed:{
       ...mapState({
         tableData: state => state.equipData,
         cId: state => state.userId

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
