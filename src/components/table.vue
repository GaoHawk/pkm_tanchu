<template>
  <el-table :data="petData" border highlight-current-row @current-change="handleCurrentChange" row-class-name="styleObj" style="width:877px;">
  
    <el-table-column label="序号" type="index" width="50">
  
    </el-table-column>
  
    <el-table-column 
      property="petName"
      label="宠物" 
      width="85">
      </el-table-column>
      <el-table-column
        label="昵称"
        width="85">
        <template scope="scope">
        <div style="font-size:10px;cursor:pointer;" @click="petInfo(scope.row)">{{ scope.row.nickname }} </div>
        </template>
      </el-table-column>
      <el-table-column
        property="level"
        label="等级"
        width="50">
      </el-table-column>
      <el-table-column
        property="breakthrough"
        label="突破"
        width="50">
      </el-table-column>
      <el-table-column
        property="evolution"
        label="进阶"
        width="65">
      </el-table-column>
      <el-table-column
        property="exp"
        label="经验值"
        width="90">
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
</template>
<script>
  import {
  
    mapState
  
  } from 'vuex'
 
  
  export default {
    mounted(){
     this.$http.get('/account/myPetsInfo  ',{
      params: {
        cId:this.cId,
        pagenumber: 0
      }
    }).then(response => {
      // this.$store.commit('SET_PET_DATA',response.data.myPets);
      this.$store.commit('SET_TOTAL_PET',response.data);
      // this.$store.commit('JSON_DATA_PET',response.data);
      this.$store.commit('SET_PET_PAGE',response.data.totalPage);
    }, response => {
      // this.$store.commit('OPEN_DIALOG1');
      // this.$store.commit('SET_RESPONSE', '提交失败')
    })
    },
    computed: {
  
      ...mapState({
  
        petData: state => state.petData,
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
  
      openDialog: function(msg) {
  
        this.$store.commit('OPEN_DIALOG');
  
        this.$store.commit('NEW_TITLE', msg);
  
      },
      petInfo(obj){
        var data = [obj]
        this.$store.commit('SET_PET_DATA',data);
        var pId = obj.pId;
        this.$http.get('/account/thisPetInfo',{
          params: {
            pId:pId,
          }
        }).then(response => {
          this.$store.commit('SET_PETINFO_SHOW',true);
          this.$store.commit('SET_EQUIP_DATA',response.data.petEquips);
          this.$store.commit('SET_SKILL_DATA',response.data.petSkills);
          this.$store.commit('SET_UNSKILL_DATA',response.data.petUnSkills);
          this.$store.commit('SET_STRU_DATA',[response.data.struggle]);
          // this.$store.commit('SET_EQUIP_DATA',response.data.myEquips);
          // console.log(this.tableData);
          // this.$store.commit('SET_EQUIP_PAGE',response.data.totalPage);
        }, response => {
          // this.$store.commit('OPEN_DIALOG1');
          // this.$store.commit('SET_RESPONSE', '提交失败')
          console.log(response)
        })
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
