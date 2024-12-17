<template>
  <div>
    <Nav/>
    <div>
        <div class="flex">
            <div class="bg-cyan-700 text-white px-3 w-80 py-2">
                <h1 class="font-bold">Add funds to track your spending</h1>
                <a href="" class="ml-20 text-sm">Learn more</a>
            </div>
            <div class="bg-black text-white w-40">
                <h1 class="text-center font-bold text-xl">amazon</h1>
                <a href="" class="ml-10 text-lg">reload</a>
               
            </div>
        </div>
        <div class="mt-12 ml-3">
            <h1 class="font-bold text-lg">Can't miss offers</h1>
        </div>
        <div class=" items-center mt-3 pl-3 pr-3 border-b-2 pb-3">
            <div class=" flex overflow-x-auto whitespace-nowrap" ref="scrollContainer">
            <div class="shadow-md pb-2 mr-2 rounded-sm border">
            <a href="">
    <img src="/bottomcard22.jpg" alt="" class="rounded-sm">
    <p class="pl-2 text-md">
        Buy 5,save 20% <br> on stocking st..
    </p>
    </a>
</div>
<div class="shadow-md pb-2 mr-2 rounded-sm ">
            <a href="">
    <img src="/bottomcard22.jpg" alt="" class="rounded-sm">
    <p class="pl-2">
        Buy 5,save 20% <br> on stocking st..
    </p>
    </a>
</div>
<div class="shadow-md pb-2 mr-2 rounded-sm ">
            <a href="">
    <img src="/bottomcard22.jpg" alt="" class="rounded-sm">
    <p class="pl-2">
        Buy 5,save 20% <br> on stocking st..
    </p>
    </a>
</div>
<div class="shadow-md pb-2 mr-2 rounded-sm ">
            <a href="">
    <img src="/bottomcard22.jpg" alt="" class="rounded-sm">
    <p class="pl-2">
        Buy 5,save 20% <br> on stocking st..
    </p>
    </a>
</div>
<div class="shadow-md pb-2 mr-2 rounded-sm ">
            <a href="">
    <img src="/bottomcard22.jpg" alt="" class="rounded-sm">
    <p class="pl-2">
        Buy 5,save 20% <br> on stocking st..
    </p>
    </a>
</div>
<div class="shadow-md pb-2 mr-2 rounded-sm ">
            <a href="">
    <img src="/bottomcard22.jpg" alt="" class="rounded-sm">
    <p class="pl-2">
        Buy 5,save 20% <br> on stocking st..
    </p>
    </a>
</div>
        </div>
    </div>
    <div class="flex mt-1 pl-3 border-b-2  pb-2">
<a href="" class="border-2 px-2 py-1 rounded-md border-gray-400 mr-2 hover:bg-green-100">For you</a>
<a href="" class="border-2 px-2 py-1 rounded-md border-gray-400 mr-2 hover:bg-green-100">For you</a>
<a href="" class="border-2 px-2 py-1 rounded-md border-gray-400 mr-2 hover:bg-green-100">For you</a>
<a href="" class="border-2 px-2 py-1 rounded-md border-gray-400 mr-2 hover:bg-green-100">For you</a>
<a href="" class="border-2 px-2 py-1 rounded-md border-gray-400 hover:bg-green-100">For you</a>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
components:{
    Nav
},
mounted(){
this.setupScrollListeners()
},
methods:{
    setupScrollListeners() {
      const scrollContainer = this.$refs.scrollContainer;
    
   

      const scrollHandler = (evt) => {
    
        scrollContainer.scrollLeft += evt.deltaY;
    
      };

      const scrollNext = () => {
        scrollContainer.scrollLeft += 100;
     
      };

      const scrollBack = () => {
        scrollContainer.scrollLeft -= 100;
    
      };

      scrollContainer.addEventListener("wheel", scrollHandler);
   

    },
}
}
</script>

<style>

</style>