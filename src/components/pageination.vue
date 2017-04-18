<template>
<div class="block">

    <el-pagination
      :page-size="8"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total,prev, pager, next"
      :total="25">
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
    props:['totalPage','type'],
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(this.type);
        switch(this.type)
        {
            case 'items':
            this.$http.get('http://localhost:8081/account/myItems',{
                params: {
                cId:5,
                pagenumber: val
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
    
            break;
            case 'equip':
            this.$http.get('http://localhost:8081/account/myEquipsInfo',{
                params: {
                cId:5,
                pagenumber: val
                }
            }).then(response => {
                console.log(response);

                this.$store.commit('SET_EQUIP_DATA',response.data.myEquips);
                console.log(this.tableData);
                this.$store.commit('SET_EQUIP_PAGE',response.data.totalPage);
            }, response => {
                // this.$store.commit('OPEN_DIALOG1');
                // this.$store.commit('SET_RESPONSE', '提交失败')
                console.log(response)
            })
            break;
            case 'pets':
            this.$http.get('http://localhost:8081/account/myPetsInfo  ',{
            params: {
                cId:5,
                pagenumber: val
            }
            }).then(response => {
                console.log(response);

                this.$store.commit('SET_PET_DATA',response.data.myPets);
                this.$store.commit('SET_TOTAL_PET',response.data);
                // this.$store.commit('JSON_DATA_PET',response.data);
                this.$store.commit('SET_PET_PAGE',response.data.totalPage);
            }, response => {
                // this.$store.commit('OPEN_DIALOG1');
                // this.$store.commit('SET_RESPONSE', '提交失败')
                console.log(response)
            })
            break;
        }
      },
    }
  }
</script>