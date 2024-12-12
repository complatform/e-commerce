<template>

  <div class="bg-green-800 text-white  w-full z-0">
    <div class="flex mr-3 pt-2">
      <div class="flex text-2xl ml-3">
        <div @click="toggleSideBar"><i class="fa-solid fa-bars mr-2"></i></div>
        <div class="font-bold -mt-1 ml-2">amazon</div>
      </div>
      <div class="flex ml-36">
        <div class="flex">
          <div class="-ml-5">Sign in</div>
          <div><i class="fa-regular fa-user text-2xl ml-1"></i></div>
        </div>
        <div class="ml-3">
          <div class="">
            <i class="fa-solid fa-cart-shopping text-3xl ml-3"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex ml-2 mr-20 mt-3 pb-3">
      <div>
        <input
          type="text"
          class="w-96 pl-3 h-12 rounded-md text-black"
          placeholder="Search Amazon"
        />
      </div>
      <div class="bg-pink-800 h-12 rounded-md -ml-12">
        <i class="fa-solid fa-magnifying-glass text-2xl mt-1 px-4 py-1"></i>
      </div>
    </div>
    <div class="flex items-center">
      <div
        class="bg-green-900 flex font-bold overflow-x-auto whitespace-nowrap pl-3 py-2"
        ref="scrollContainer"
      >
        <div class="mr-3 inline-block">Deals</div>
        <div class="mr-3 inline-block">Amazon Basics</div>
        <div class="mr-3 inline-block">Best Sellers</div>
        <div class="mr-3 inline-block">Livestreams</div>
        <div class="mr-3 inline-block">Music</div>
        <div class="mr-3 inline-block">Books</div>
        <div class="mr-3 inline-block">Video</div>
        <div class="mr-3 inline-block">New Releases</div>
        <div class="mr-3 inline-block">Home</div>
        <div class="inline-block">PC</div>
      </div>
    </div>
    <div class="flex px-3 py-2 text-lg">
      <div class="mr-2"><i class="fa-solid fa-location-dot"></i></div>
      <div class="mr-2"><h1>Deliver to Ethiopia</h1></div>
      <div class=""><i class="fa-solid fa-chevron-down"></i></div>
    </div>
  

  </div>
  <div v-if="$store.state.showSideBar" class="z-10 relative -mt-52">
    <div>
      <div class="flex text-white ">
        <div>
          <div class="bg-gray-800 h-36 w-80">
        <div>

          <div class="text-right mr-4 pt-3">
            <h1 class="">Sign in <i class="fa-regular fa-user text-2xl ml-1"></i></h1>
          </div>
          <div class="ml-5">
            <h1 class="font-bold text-xl">Browse</h1>
            <h1 class=" text-3xl">Amazon</h1>
          </div>
        </div>
       

</div>
<div class="bg-white text-black h-full">
  <div class="flex justify-between px-5 py-5 text-lg border-b-4 border-gray-300">
    <div class="font-bold">
Amazon Home
    </div>
    <div><i class="fa-solid fa-house-user"></i></div>
  </div>
  <div class="px-5 mt-2 border-b-4 border-gray-300 pb-4 pt-3">
    <div class="font-bold text-lg">Trending</div>
    <div class="mt-7 text-md">Movers & Shakers</div>
  </div>
  <div class="px-5 pt-3">
    <div class="text-lg font-bold">Top Departments</div>
    <div class="mt-6 font-semibold">Home</div>
    <div class="mt-6 font-semibold">Health & Household</div>
    <div class="mt-6 font-semibold">Books</div>
    <div class="mt-6 font-semibold mb-4">PC</div>
    <div v-if="seeMore">
<div>
  <div class="flex justify-between  border-t-2 border-gray-300 pt-3">
    <div class="mt-3 font-semibold">Amazon Music</div>
<div class="mt-4">
  <i class="fa-solid fa-angle-right text-gray-500 text-lg"></i>
</div>
  </div>
  <div class="flex justify-between">

    <div class="mt-6 font-semibold">Prime Video</div>
    <div class="mt-4"><i class="fa-solid fa-angle-right  text-gray-500 text-lg"></i></div>
  </div>
  <div class="flex justify-between">

    <div class="mt-6 font-semibold">Electronics</div>
    <div class="mt-4">

      <i class="fa-solid fa-angle-right  text-gray-500 text-lg"></i>
    </div>
  </div>
  <div class="flex justify-between">

    <div class="mt-6 font-semibold">Books</div>
    <div class="mt-4">

      <i class="fa-solid fa-angle-right  text-gray-500 text-lg"></i>
    </div>
  </div>
  <div class="flex justify-between">

    <div class="mt-6 font-semibold">Clothing,Shoes,Jewelry,Watches</div>
    <div class="mt-4">

      <i class="fa-solid fa-angle-right  text-gray-500 text-lg"></i>
    </div>
  </div>
  <div class="flex justify-between">

    <div class="mt-6 font-semibold">Electronics</div>
    <div class="mt-4">

      <i class="fa-solid fa-angle-right  text-gray-500 text-lg"></i>
    </div>
  </div>
  <div class="flex justify-between">

    <div class="mt-6 font-semibold">Gift Cards</div>
    <div class="mt-4">

      <i class="fa-solid fa-angle-right  text-gray-500 text-lg"></i>
    </div>
  </div>

</div>
    </div>
    <div @click="toggleShowMore" class="mt-6 font-semibold">{{ seeMore? 'See less':'See all' }}<i class="fa-solid fa-chevron-down ml-2"></i></div>
  </div>
  
</div>
        </div>
        <div class="" @click="toggleSideBar"><i class="fa-solid fa-xmark mt-5 ml-5 px-1 text-3xl "></i></div>
       
      </div>
    

</div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      //showSideBar:false,
      seeMore:false
    };
  },
  mounted() {
    this.setupScrollListeners();
  },
  methods: {
//     toggleSideBar(){
// this.showSideBar = !this.showSideBar
//     },
toggleSideBar(){
  this.$store.dispatch('toggleShowBar')
},

    toggleShowMore(){
this.seeMore = !this.seeMore
    },
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
  },
};
</script>

<style>
.relative{
  background-color: #020202c6;
}
   
</style>
