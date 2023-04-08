import { defineStore } from 'pinia'
import { ref } from 'vue'
const accountStore = defineStore('accountStore', {
  state:()=>{
    return {
      account:''
    }
  },
  actions:{
    saveAccount(){
      this.account='bruce'
    }
  }
})

// const accountStore=defineStore('accountStore',()=>{
//   let account=ref('')
//   function saveAccount(account){
//     this.account=account
//   }

//   return{account,saveAccount}
// })
export default accountStore
