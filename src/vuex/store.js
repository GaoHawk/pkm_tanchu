/*
* @Author: Administrator
* @Date:   2017-03-16 15:07:33
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-04-18 17:30:44
*/
import Vue from 'vue'
import Vuex from 'vuex'
import  router  from '../router'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({

   state:{
      title:'',
      path:'',
      dialogVisible:false,
      dialogVisible1:false,
      response:'',
      currentData:[],
      userData:[],
      userList:[],
      characterData:'',
      userId:'',
      tabId:'1',
      petData:'',
      petPage:"",
      totalPet:{
        myPets:'',
        attackPets:'',
        defencePets:''
      },

      //装备数据
      equipPage:'',
      equipData:'',

      //道具数据
      itemsPage:'',
      itemsData:'',

      //点击显示宠物详情
      petInfoShow:false,

      //点击显示主页面
      showHome:false
      
   },
   actions: {
     setNewTitle({commit},msg){
         commit('NEW_TITLE',msg)
     },
     setRouter({commit},path){
         commit('ROUT_PATH',path)
     },
     route_back({commit}){
         commit('GO_BACK')
     },
     close_dialog({commit}){
         commit('CLOSE_DIALOG',dialogVisible)
     },
     open_dialog({commit}){
         commit('OPEN_DIALOG',dialogVisible)
     },
     close_dialog({commit}){
        commit('CLOSE-DIALOG1',dialogVisible1)
     },
     open_dialog1({commit}){
        commit('OPEN_DIALOG1',dialogVisible1)
     },
     setResponse({commit},msg){
        commit('SET_RESPONSE',msg)
     },
     setTableData({commit},arr){
         commit('SET_TABLE',arr)
     },
     setUserTable({commit},arr){
        commit('SET_USER',arr)
     },
     setUserId({commit},userId){
        commit('SET_UID',userId)
     },
     setUserList({commit},arr){
         commit('SET_LIST',arr)
     },
     deleteUserByID({commit},uid){
         commit('DELETE_USER',uid)
     },
     deleteUserData({commit}){
         commit('DELETE_USERDATA')
     },
     setTabId({commit},tId){
         commit('SET_TABID',tId)
     },
     setCharaData({commit},obj){
         commit('SET_CHARA_DATA',obj)
     },
     setPetData({commit},obj){
         commit('SET_PET_DATA',obj)
     },
     setPetPage({commit},num){
         commit('SET_PET_PAGE',num);
     },
     setTotalPet({commit},obj){
         commit('SET_TOTAL_PET',obj);
     },
     //装备数据分发
     setEquipPage({commit},num){
         commit('SET_EQUIP_PAGE',num);  
     },
     setEquipData({commit},obj){
         commit('SET_EQUIP_DATA',obj);
     },
    //  道具数据分发
    setItemsPage({commit},num){
        commit('SET_ITEMS_PAGE',num)
    },
    setItemsData({commit},obj){
        commit('SET_ITEMS_DATA',obj);
    },
    // 宠物详情显示
    setPetInfoShow({commit},bl){
        commit('SET_PETINFO_SHOW',bl)
    },
    // 点击显示主页面
    setshowHome({commit},bl){
        commit('SET_SHOWHOME',bl)
    }
   },
   mutations:{
     NEW_TITLE(state,msg){
        state.title= msg;
        console.log(msg)
     },
     ROUT_PATH(state,path){
        router.push(path)
        state.path = path;
     },
     GO_BACK(state){
        router.go(-1);
     },
     GET_CURRENTROUTER(state,path){
         state.path = path;
     },
     CLOSE_DIALOG(state,dialogVisible){
         state.dialogVisible = false;
     },
     CLOSE_DIALOG1(state,dialogVisible){
         state.dialogVisible1 = false;
     },
     OPEN_DIALOG(state,dialogVisible){
         state.dialogVisible = true;
     },
     OPEN_DIALOG1(state,dialogVisible){
         state.dialogVisible1 = true;
     },
     SET_RESPONSE(state,msg){
         state.response = msg;
     },
     SET_TABLE(state,dataArr){
         state.currentData = dataArr
     },
     SET_USER(state,dataArr){
        state.userData = dataArr
        console.log(state.userData)
     },
     DELETE_USERDATA(state){
         for(let key in state.userData){
             state.userData[key] = ''
         }
         console.log(state.userData);
     },
     SET_LIST(state,dataArr){
        state.userList = dataArr
     },
     DELETE_USER(state,uid){
        state.userList = state.userList.filter(function(item){
            return item.cId !== uid
        })
         console.log(state.userList);
     },
     SET_UID(state,userId){
        state.userId = userId
     },
     SET_TABID(state,tId){
        state.tabId = tId
        console.log(state.tabId)
     },
     SET_CHARA_DATA(state,obj){
         state.characterData = obj
     },
     SET_PET_DATA(state,obj){
         state.petData = obj;
     },
     SET_PET_PAGE(state,num){
         state.petPage = num;
         console.log(state.petPage);
     },
     SET_TOTAL_PET(state,obj){
         for(let k in obj){
             switch (k)
             {
               case 'myPets':
               state.totalPet.myPets = obj[k];
               console.log(obj[k]);
               break;   
               case 'attackPets':
               state.totalPet.attackPets = obj[k];
               console.log(obj[k]);
               break;
               case 'defencePets':
               state.totalPet.defencePets = obj[k];
               console.log(obj[k]);
               break; 
             }
         }
        //  state.totalPet = obj;
        
     },
     //装备数据分发
     SET_EQUIP_PAGE(state,num){
         state.equipPage = num;
     },
     SET_EQUIP_DATA(state,obj){
         state.equipData = obj;
     },

     //道具数据分发
     SET_ITEMS_PAGE(state,num){
         state.itemsPage = num;
     },
     SET_ITEMS_DATA(state,obj){
         state.itemsData = obj;
     },
     //是否显示宠物详情页面
     SET_PETINFO_SHOW(state,bl){
         state.petInfoShow = bl;
     },
     // 点击显示主页面
     SET_SHOWHOME(state,bl){
         state.showHome = bl;
     }
   },
    strict:debug
})
