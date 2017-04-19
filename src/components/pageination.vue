<template>
<div class="block">

    <el-pagination
      :page-size="8"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total,prev, pager, next"
      :total="totalPage">
    </el-pagination>
  </div>
</div>
</template>
<script>
    
  export default {
   
    computed:{

    },
    data() {
      return {
        currentPage:1

      }
    },
    props:['totalPage','type', 'cId'],
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
       
        switch(this.type)
        {
            case 'items':
            this.$http.get('/account/myItems',{
                params: {
                cId:this.cId,
                pagenumber: val
                }
            }).then(response => {


                this.$store.commit('SET_ITEMS_DATA',response.data.myItems);

                this.$store.commit('SET_ITEMS_PAGE',response.data.totalPage);
            }, response => {
                // this.$store.commit('OPEN_DIALOG1');
                // this.$store.commit('SET_RESPONSE', '提交失败')
 
            })
    
            break;
            case 'equip':
            this.$http.get('/account/myEquipsInfo',{
                params: {
                cId:this.cId,
                pagenumber: val
                }
            }).then(response => {
    

                this.$store.commit('SET_EQUIP_DATA',response.data.myEquips);
  
                this.$store.commit('SET_EQUIP_PAGE',response.data.totalPage);
            }, response => {
                // this.$store.commit('OPEN_DIALOG1');
                // this.$store.commit('SET_RESPONSE', '提交失败')

            })
            break;
            case 'pets':
            this.$http.get('/account/myPetsInfo  ',{
            params: {
                cId:this.cId,
                pagenumber: val
            }
            }).then(response => {

                this.$store.commit('SET_PET_DATA',response.data.myPets);
                this.$store.commit('SET_TOTAL_PET',response.data);
                // this.$store.commit('JSON_DATA_PET',response.data);
                this.$store.commit('SET_PET_PAGE',response.data.totalPage);
            }, response => {
                // this.$store.commit('OPEN_DIALOG1');
                // this.$store.commit('SET_RESPONSE', '提交失败')

            })
            break;
        }
      },
    }
  }
</script>