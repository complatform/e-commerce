<template>
   <Nav/>
   <div class="ml-3 mr-3 mt-5">

       <h1 class="font-bold text-xl">Sports and Outdoors</h1>
       <p>Shop fitness and exercise,outdoor recreation,team gear and more</p>
   </div>
   <div>
    <div class="bg-gray-800 flex pt-3 text-white pl-5 pb-6 mt-16">
  <div>
    <div><a href="">Amazon.com</a></div>
    <div class="mt-5"><a href="">Your Lists</a></div>
    <div class="mt-5"><a href="">Registory & Gift List</a></div>
    <div class="mt-5"><a href="">Your Account</a></div>
    <div class="mt-5"><a href="">Sell Products on Amazon</a></div>
    <div class="mt-5"><a href="">Recalls and Product Safety <br> Alerts</a></div>
    <div class="mt-5"><a href="">Customer Service</a></div>
  
  </div>
  <div class="ml-5">
    <div><a href="">Your Orders</a></div>
    <div class="mt-5"><a href="">Gift Cards</a></div>
    <div class="mt-5"><a href="">Find a Gift</a></div>
    <div class="mt-5"><a href="">Browsing History</a></div>
    <div class="mt-5"><a href="">Your Returns</a></div>
  </div>
        </div>
        <div class="bg-gray-900 text-white pt-10 pb-10">
  <div class="flex ml-8">
  <div class="text-sm"><i class="fa-solid fa-globe"></i> English</div>
  <div class="text-sm ml-7">$ USD - US. Dollar</div>
  <div class="text-sm ml-7"><img src="/united.jpg" alt="" class="w-6 h-4 inline-block"> United States</div>
  </div>
  <div class="mt-10">
  <div class="text-center">
    Already a customer? <a href="">Sign in</a>
  </div>
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
  import Nav from '@/components/Nav.vue'

export default {
    components:{
      Nav
  }
}
</script>

<style>

</style>