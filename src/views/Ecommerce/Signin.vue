<template>
<div>
    <div class="bg-green-900 pl-3 py-2">
<h1 class="text-white text-3xl font-bold -mt-1">amazon</h1>
    </div>
    <div>
        <h1 class="ml-3 text-2xl font-semibold mt-2">Welcome</h1>
    </div>
    <div class="shadow-md ml-3 mt-2 mr-3 pb-3">
        <div class="flex bg-gray-100 py-3">
     <input type="radio" class="w-20" value="sign_up" v-model="selectedPAge" @change="redirectToPage">
     <p class="-ml-3 font-semibold">Create account <span class="font-normal text-sm">New to Amazon?</span></p>
        </div>
        <div class="flex py-3">
     <input type="radio" class="w-20" value="sign_in" v-model="selectedPAge" @change="redirectToPage">
     <p class="-ml-3 font-semibold">Sign in  <span class="font-normal text-sm">Already a customer?</span></p>
        </div>
        <div class="pl-7 pr-4 mt-1">
            <p class="font-semibold">Email or phone number</p>
            <input type="text" class="border-2  w-full h-12">
        </div>
        <div class="mt-5 text-center">
            <button class="bg-yellow-400 px-36 py-3 rounded-md">Continue</button>
        </div>
        <div class="pl-4 pr-4 mt-3 text-sm font-semibold">
            By continuing you agree to Amazon's <a href="" class="underline text-blue-700">Conditions of <br>Use <span class="text-black no-underline">and

            </span> Privacy Notice.</a>
        </div>
        <div class=" text-md font-semibold mt-5 border-b-2 pb-4 ml-4 mr-4">
            <a href="" class="text-blue-700">Need help?</a>
        </div>
        <div class="pl-4">
            <p class="text-md font-semibold mb-1" >Buying for work?</p>
            <a href="" class="text-blue-700 text-md font-semi " >Shop on Amazon Business</a>
        </div>
    </div>

    <div class="bg-gray-900 text-white pt-10 pb-10 mt-5">
<div class="flex ml-8">
<div class="text-sm"><i class="fa-solid fa-globe"></i> English</div>
<div class="text-sm ml-7">$ USD - US. Dollar</div>
<div class="text-sm ml-7"><img src="/united.jpg" alt="" class="w-6 h-4 inline-block"> United States</div>
</div>
<div class="mt-10">
<div class="mt-5 flex text-xs ml-1 mr-1">
<div><a href="" class="w-80">Conditions of Use</a></div>
<div><a href="" class="ml-3">Privacy Notice</a></div>
<div><a href="" class="ml-3">Consumer Health Data Privacy Disclosure</a></div>
</div>
<div class="text-center text-xs">Your Ads Privacy Choices <input type="checkbox" class="mt-2 ml-2"></div>
<div class="text-center text-xs mt-3">&copy;1996-2024, Amazon.com, Inc. or its affiliates</div>
</div>
      </div>
</div>
</template>

<script>
export default {
    data(){
return{
    // sign_in:'',
    // sign_up:'',
    selectedPAge:'sign_in'
}
    },
// computed:{
//     selectedPAge(){
//       return  this.$store.state.selectedPAge
//     }
// },
methods:{
    redirectToPage(){
        if(this.selectedPAge === 'sign_in'){
            this.$router.push('/Signin')
        }
        else if(this.selectedPAge === 'sign_up'){
            this.$router.push('/Signup')

        }

       // this.$store.dispatch('redirectToPage',this.sign_in,this.sign_up)
    }
}
}
</script>

<style>

</style>s