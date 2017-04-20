<template>
<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
<el-col :span="12" >
  <el-form-item label="角色id:" class="custom-bottom">
    <el-input v-model="formLabelAlign.cid" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="性别:" class="custom-bottom">
    <el-input v-model="formLabelAlign.gender" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="VIP等级:" class="custom-bottom">
    <el-input v-model="formLabelAlign.vipLevel" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="金币:" class="custom-bottom">
    <el-input v-model="formLabelAlign.gCash" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="级别:" class="custom-bottom">
    <el-input v-model="formLabelAlign.level" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="新手步骤:" class="custom-bottom">
    <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="11" :offset="1">
     <el-form-item label="昵称:" class="custom-bottom">
       <el-input v-model="formLabelAlign.nickname" :disabled="true"></el-input>
     </el-form-item>
     <el-form-item label="在线" class="custom-bottom">
       <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
     </el-form-item>
     <el-form-item label="累计消耗:" class="custom-bottom">
       <el-input v-model="formLabelAlign.useMCashes" :disabled="true"></el-input>
     </el-form-item>
     <el-form-item label="战力:" class="custom-bottom">
       <el-input v-model="formLabelAlign.power" :disabled="true"></el-input>
     </el-form-item>
     <el-form-item label="钻石:" class="custom-bottom">
       <el-input v-model="formLabelAlign.mCash" :disabled="true"></el-input>
     </el-form-item>
     <el-form-item label="关卡进度:" class="custom-bottom">
       <el-input v-model="formLabelAlign.stage" :disabled="true"></el-input>
     </el-form-item>
  </el-col>
</el-form>

</template>
<style>
  .custom-buttonGroup{
     text-align: right;
  }
  .custom-bottom input{
    color:black!important;
  }
</style>
<script>
  import { mapState } from 'vuex';
  export default {
    mounted(){
    var numH  =  numH?numH:1;

    this.$http.get('/pkm/account/characterInfo  ',{
      params: {
        cId: this.cId
      }
    }).then(response => {
      // for (let i = 0; i < response.data.data.length; i++) {
      //   this.$store.commit('SUBMIT_HOMEWOKR',response.data.data[i]);
      //   // this.lists.push();
      // }
      this.$store.commit('SET_TOTAL_PET',response.data);
      this.$store.commit('SET_CHARA_DATA',response.data);
    }, response => {
      // this.$store.commit('OPEN_DIALOG1');
      // this.$store.commit('SET_RESPONSE', '提交失败')
    })
    },
    computed:{
       ...mapState({
         formLabelAlign:state => state.characterData,
         cId: state => state.userId
       })
    },
    name: 'app',
    data(){
      return{
          labelPosition:'left',
           dialogFormVisible: false,
        }
    },
    components:{

    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClick(tab,event){
        //  console.log(tab,event);
      },
      handleIconClick(ev){
        //  console.log(ev)
      },
      // 对话框控制方法
      openDialog:function(msg){
          this.$store.commit('OPEN_DIALOG');
          this.$store.commit('NEW_TITLE',msg);
      }
    }
  }
</script>
