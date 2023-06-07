<template>
  <div class="home">
    <header>
        <div class="flex-box">
            <img src="../assets/images/logo.png">
        </div>
        <div class="flex-box">
            <ul>
                <li>ABOUT US</li>
                <li>ACADEMICS</li>
                <li>WHY GIC</li>
                <li>LIFESTYLE</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div class="flex-box">
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>    
                <div></div>              
            </i>
            <p @click="logout" style="cursor: pointer;">Logout</p>
        </div>
    </header>
    <main>
         <div class="input">
                        <label for="UserID">UserID</label>
                        <input v-model="user_id" type="Userid" placeholder="UserID">
         </div>
         <button @click="getuser">Get user</button>
    </main>
   
  </div>
</template>
<script>
    import axios from 'axios'
    import router from '../router/index.js'
    export default{
        name: 'SignUp',
        data(){
            return{
                user_id:"",
            }
           
        },
        methods: {
            async getuser(){
                try {
                   
                     //let result = await axios.get("http://localhost:3000/api/v1/user/64748edd214905db0cac7232") let result = await axios.get("http://localhost:3000/api/v1/user/64748edd214905db0cac7232")
                      let result = await axios.get("http://localhost:3000/api/v1/user/" + this.user_id)

                   if(result.status ===200){
                    alert("Okay")
                    
                   }
                   else{
                    alert("Fail")
                   }

                } catch (error) {
                    console.log(error.message)
                }
            }
        }
    }
</script>
