import { defineStore } from 'pinia'
import { ref } from 'vue'
const useAccountStore = defineStore('accountStore', {
  state:()=>{
    return {
      useAccount:''
    }
  },
  actions:{
    saveAccount(account){
      this.useAccount=account
    },
    useLogOut(){
      this.useAccount=''
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
export default useAccountStore
