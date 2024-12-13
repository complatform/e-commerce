<template>
<div>
    <div class="bg-green-900 pl-3 py-2">
<h1 class="text-white text-3xl font-bold -mt-1">amazon</h1>
    </div>
    <div>
        <h1 class="ml-3 text-2xl font-semibold mt-2">Welcome</h1>
    </div>
    <div class="shadow-md ml-3 mt-2 mr-3  pl-3 pr-3">
        <div class="flex  py-3">
     <input type="radio" class="w-20 -ml-7" value="sign_up" v-model="selectedPAge" @change="redirectToPage">
     <p class="-ml-3 font-semibold">Create account <span class="font-normal text-sm">New to Amazon?</span></p>
        </div>
        <div>
            <p class="mb-1 font-semibold">First and last name</p>
            <input type="text" class="border-2  w-full h-12">
        </div>
        <div class="mt-2">
            <p class="mb-1 font-semibold">Mobile number or email</p>
            <input type="text" class="border-2  w-full h-12">
        </div>
        <div class="mt-2">
            <p class="mb-1 font-semibold">Create a password</p>
            <input type="text" class="border-2  w-full h-12">
        </div>
        <div class="mt-2 flex -ml-6">
            <input type="checkbox" checked class="border-2 w-20">
            <p class="mb-1 font-semibold -ml-3">Show password</p>
           
        </div>
        <div class="mt-5 text-center">
            <button class="bg-yellow-400 px-36 py-3 rounded-md">Continue</button>
        </div>
        <div class="pl-4 pr-4 mt-5 text-sm font-semibold border-b-2 pb-6 ">
            By continuing you agree to Amazon's <a href="" class="underline text-blue-700">Conditions of <br>Use <span class="text-black no-underline">and

            </span> Privacy Notice.</a>
        </div>
        <div class="mt-5 ml-4 pb-5">
            <p class="font-semibold ">Buying for work?</p>
        <a href=""  class="text-blue-700 font-semibold">Create a free business account</a>
        </div>
        <div class="flex bg-gray-100 py-3 -ml-3 -mr-3">
     <input type="radio" class="w-20" value="sign_in" v-model="selectedPAge" @change="redirectToPage">
     <p class="-ml-3 font-semibold">Sign in <span class="font-normal text-sm">Already a customer?</span></p>
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
        selectedPAge:'sign_up'
    }
}
}
</script>

<style>

</style>