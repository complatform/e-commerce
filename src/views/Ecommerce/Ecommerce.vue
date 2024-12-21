<template>
 <Nav />
 <div class="absolute top-1/4 z-0 " >
      <div class="">
        <div class="">
            <a href="/General">

                <img src="/61WOJldGBoL._SR1236,1080_.jpg" alt="" class="w-10/11 -mt-1">
            </a>
        </div>
            <div class="flex  bg-gray-200">
      <div
        class=" overflow-x-auto whitespace-nowrap pl-2 py-2 -mt-16"
        ref="scrollContainer2"
      >
        <div class="mr-2 inline-block"><a href="/Glowup"><img src="/card1.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/CustomerLoved"><img src="/card2.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/UpgradeGame"><img src="/card3.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/DelightfulDeal"><img src="/card4.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/SmallGifts"><img src="/card5.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/ShopStorage"><img src="/card7.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/ShopToys"><img src="/card8.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/SweetHome"><img src="/card9.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="Pc"><img src="/card10.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/FunFor"><img src="/card11.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/HomeDecore"><img src="/card14.jpg" alt="" class="rounded-md w-36 "></a></div>
        <div class="mr-2 inline-block"><a href="/ShopeHoilday"><img src="/card15.jpg" alt="" class="rounded-md w-36 "></a></div>
      </div>
    </div>
     <div class="pl-5 mt-3 border-b-2 pb-3">
        <div class="font-bold text-lg">
            Sign in  for best experiance
        </div>
        <div class="mt-3">
         
          <button @click="GotoSignin" class="bg-yellow-300 w-96 py-3 rounded-3xl  text-lg">Sign in securely</button>
        </div>
        <div class="mt-3">
          <a href="signup" class="text-green-700">Create an account</a>
        </div>
     </div>
     <div class="mt-3 pl-3">
      <div class="font-bold text-lg">Score the top PCs & Accessories</div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="flex">
          <div class="mr-2">
            <a href="/Desktop">
              <img src="/bottomcard1.jpg" alt="" class="rounded-md">
            <p>Desktops</p>
          </a>
          </div>
          <div>
            <a href="/Laptop"><img src="/bottomcard2.jpg" alt="" class="rounded-md"></a>
            <p>Laptops</p>
          </div>
        </div>
        <div class="flex mt-2">
          <div class="mr-2">
            <a href="/HardDrive"><img src="/bottomcard3.jpg" alt="" class="rounded-md"></a>
            <p>Hard Drives</p>
          </div>
          <div>
            <a href="/PCAccessories"><img src="/bottomcard4.jpg" alt="" class="rounded-md"></a>
            <p>PC Accessories</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">See more</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Shoes Under $60</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Womens"><img src="/bottomcard5.jpg" alt="" class="rounded-md"></a>
            <p>Women's</p>
          </div>
          <div>
            <a href="/Mens"><img src="/bottomcard6.jpg" alt="" class="rounded-md"></a>
            <p>Men's</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Girls"><img src="/bottomcard7.jpg" alt="" class="rounded-md"></a>
            <p>Girl's</p>
          </div>
          <div>
            <a href="/Boys"><img src="/bottomcard8.jpg" alt="" class="rounded-md"></a>
            <p>Boy's</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">Shop all</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Fantastic Finds for Home</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Kitchen"><img src="/bottomcard9.jpg" alt="" class="rounded-md"></a>
            <p>Kitchen</p>
          </div>
          <div>
            <a href="/HomeDecore2"><img src="/bottomcard10.jpg" alt="" class="rounded-md"></a>
            <p>Home Decor</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Dining"><img src="/bottomcard11.jpg" alt="" class="rounded-md"></a>
            <p>Dining</p>
          </div>
          <div>
            <a href="/SmartHome"><img src="/bottomcard12.jpg" alt="" class="rounded-md"></a>
            <p>Smart Home</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">See more</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Shine brighter with your fashion faves</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Jewelry"><img src="/bottomcard13.jpg" alt="" class="rounded-md"></a>
            <p>Jewelry</p>
          </div>
          <div>
            <a href="/HandBag"><img src="/bottomcard14.jpg" alt="" class="rounded-md"></a>
            <p>Handbags</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/FootWear"><img src="/bottomcard15.jpg" alt="" class="rounded-md"></a>
            <p>Footwear</p>
          </div>
          <div>
            <a href="/Beuty"><img src="/bottomcard16.jpg" alt="" class="rounded-md"></a>
            <p>Beauty</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">See more</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Video games $ accessories</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Xbox"><img src="/bottomcard17.jpg" alt="" class="rounded-md"></a>
            <p>Xbox controllers</p>
          </div>
          <div>
            <a href="/Nintendo"><img src="/bottomcard18.jpg" alt="" class="rounded-md"></a>
            <p>Nintendo</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/VR"><img src="/bottomcard19.jpg" alt="" class="rounded-md"></a>
            <p>VR headsets</p>
          </div>
          <div>
            <a href="/Ps5"><img src="/bottomcard20.jpg" alt="" class="rounded-md"></a>
            <p>PS5 accessories</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">Explore now</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Unveil your radiance</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/HairCare"><img src="/bottomcard21.jpg" alt="" class="rounded-md"></a>
            <p>Hair Care</p>
          </div>
          <div>
            <a href="/Fragrances"><img src="/bottomcard22.jpg" alt="" class="rounded-md"></a>
            <p>Fragrances</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Makeup"><img src="/bottomcard23.jpg" alt="" class="rounded-md"></a>
            <p>Make-up</p>
          </div>
          <div>
            <a href="/SkinCare"><img src="/bottomcard24.jpg" alt="" class="rounded-md"></a>
            <p>Skin Care</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="/WomensClothing" class="text-green-700">Shop more</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Step into style</div>
        <div class="flex">
          <div class="mr-2">
            <a href="WomensClothing"><img src="/bottomcard25.jpg" alt="" class="rounded-md"></a>
            <p>Women's clothing</p>
          </div>
          <div>
            <a href="/WomensShoes"><img src="/bottomcard26.jpg" alt="" class="rounded-md"></a>
            <p>Women's shoes</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/MensClothing"><img src="/bottomcard27.jpg" alt="" class="rounded-md"></a>
            <p>Men's clothing</p>
          </div>
          <div>
            <a href="MensShoes"><img src="/bottomcard28.jpg" alt="" class="rounded-md"></a>
            <p>Men's shoes</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">Shop more</a>
        </div>
      </div>
      <div class="mt-2 border-b-4 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Premium home</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Kitchenanddining"><img src="/bottomcard29.jpg" alt="" class="rounded-md"></a>
            <p>Kitchen & dining</p>
          </div>
          <div>
            <a href="/Furniture"><img src="/bottomcard30.jpg" alt="" class="rounded-md"></a>
            <p>Furniture</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Bedding"><img src="/bottomcard31.jpg" alt="" class="rounded-md"></a>
            <p>Bedding</p>
          </div>
          <div>
            <a href="/HomeImprovement"><img src="/bottomcard32.jpg" alt="" class="rounded-md"></a>
            <p>Home improvements</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Garden"><img src="/bottomcard33.jpg" alt="" class="rounded-md"></a>
            <p>Garden & outdors</p>
          </div>
          <div>
            <a href="/Decor"><img src="/bottomcard34.jpg" alt="" class="rounded-md"></a>
            <p>Decor</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">Shop long-lasting picks</a>
        </div>
      </div>
      <div class="mt-2 border-b-4 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Get ready for a day out with your little one</div>
        <div>
          <a href="/Snak"><img src="/bottomcard35.jpg" alt="" class="rounded-md h-48"></a>
          
          <p>Snacks & food</p>
        </div>
        <div class="flex mt-2">
          <div class="mr-2">
            <a href="/Toys"><img src="/bottomcard36.jpg" alt="" class="rounded-md"></a>
            
            <p>Toys</p>
          </div>
          <div class="mr-2">
            <a href="/Strolers"> <img src="/bottomcard37.jpg" alt="" class="rounded-md"></a>
           
            <p>Strollers</p>
          </div>
          <div>
            <a href="/Car"> <img src="/bottomcard38.jpg" alt="" class="rounded-md"></a>
            <p>Car Seats</p>
          </div>
        </div>
        <div class="mt-2"><a href="" class="text-green-700">Explore more</a></div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Tablets under $100</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Tab1"><img src="/bottomcard39.jpg" alt="" class="rounded-md"></a>
           
          </div>
          <div>
            <a href="/Tab2"><img src="/bottomcard40.jpg" alt="" class="rounded-md"></a>
           
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Tab3"><img src="/bottomcard41.jpg" alt="" class="rounded-md"></a>
            
          </div>
          <div>
            <a href="Tab4"><img src="/bottomcard42.jpg" alt="" class="rounded-md"></a>
         
          </div>
        </div>
        <div class="mt-10">
          <a href="#" class="text-green-700">Shop now</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Deals on shoes</div>
        <div>
          <a href="/DealsOnShoes"><img src="/bottomcard43.jpg" alt="" class="rounded-md"></a>
        </div>
      </div>
      <div class="mt-2 border-b-4 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Gaming merchandise</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Apparel"><img src="/bottomcard44.jpg" alt="" class="rounded-md"></a>
            <p>Apparel</p>
          </div>
          <div>
            <a href="/Hats"><img src="/bottomcard45.jpg" alt="" class="rounded-md"></a>
            <p>Hats</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Action"><img src="/bottomcard46.jpg" alt="" class="rounded-md"></a>
            <p>Action figures</p>
          </div>
          <div>
            <a href="/Mugs"><img src="/bottomcard47.jpg" alt="" class="rounded-md"></a>
            <p>Mugs</p>
          </div>
        </div>
     
        <div class="mt-3">
          <a href="#" class="text-green-700">See more</a>
        </div>
      </div>
      <div class="mt-2 border-b-4 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Women's fashion sneakers</div>
        <div class="flex">
          <div class="mr-2 shadow-md h-40 ">
            <a href="/WomenShoes1"><img src="/bottomcard48.jpg" alt="" class="rounded-md"></a>
        
          </div>
          <div  class="mr-2 shadow-md h-40 ">
            <a href="WomenShoes2"><img src="/bottomcard49.jpg" alt="" class="rounded-md"></a>
         
          </div>
        </div>
        <div class="flex mt-5">
          <div class="mr-2 shadow-md h-40" >
            <a href="WomenShoes3"><img src="/bottomcard50.jpg" alt="" class="rounded-md"></a>
           
          </div>
          <div class=" shadow-md h-40">
            <a href="WomenShoes4"><img src="/bottomcard51.jpg" alt="" class="rounded-md"></a>
         
          </div>
        </div>
     
        <div class="mt-3">
          <a href="#" class="text-green-700">See more</a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Home & Kitchen Under $30</div>
        <div>
          <a href="/Homandkitches"><img src="/bottomcard52.jpg" alt="" class="rounded-md"></a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Travel Essentials your next trip</div>
        <div>
          <a href="/Travel"><img src="/bottomcard53.jpg" alt="" class="rounded-md"></a>
        </div>
      </div>
      <div class="mt-2 border-b-2 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Find new ways to wake up happy</div>
        <div>
          <a href="/NewWay"><img src="/bottomcard54.jpg" alt="" class="rounded-md w-96"></a>
        </div>
      </div>
      <div class="mt-3">
        <div class="mb-3 font-bold text-lg">
          Top Sellers in Books for you
        </div>
        <div class="flex ">
          <div>
            <a href="/Book1"><img src="/bottomcard55.jpg" alt="" class="h-32"></a>
          </div>
          <div class="ml-6">
            <div>

              Hamingain I hullunum:Smasagnasafn <br>(Icelandic Edition)
            </div>
            <div><sup>$</sup>33<sup>12</sup></div>
          </div>
        </div>
        <div class="flex mt-5">
          <div>
            <a href="/Book2"><img src="/bottomcard56.jpg" alt="" class="h-32"></a>
          </div>
          <div class="ml-12">
            <div>

              Les Damnes de la Rente:Pourquoi Le <br>Gabon ne decolle pas(French Edition)
            </div>
            <div><sup>$</sup>18<sup>86</sup></div>
          </div>
        </div>
        <div class="flex mt-5">
          <div>
            <a href="/Book3"><img src="/bottomcard57.jpg" alt="" class="h-32"></a>
          </div>
          <div class="ml-10">
            <div>

              Ethiopia Incorporated:Transforming <br>the Way Businesses Run in Africa
            </div>
            <div><sup>$</sup>6<sup>49</sup></div>
          </div>
        </div>
      </div>
      <div class="mt-2 border-b-4 pb-2 -ml-5 pl-5 pr-5">
        <div class="mb-3 font-bold text-lg">Explore Departments</div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Beauty"><img src="/bottomcard58.jpg" alt="" class="rounded-md"></a>
            <p>Beauty</p>
          </div>
          <div>
            <a href="/Homeandkitchen"><img src="/bottomcard59.jpg" alt="" class="rounded-md"></a>
            <p>Home and Kitchen</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Sports"><img src="/bottomcard60.jpg" alt="" class="rounded-md"></a>
            <p>Sports and Outdoors</p>
          </div>
          <div>
            <a href="/Electronics"><img src="/bottomcard61.jpg" alt="" class="rounded-md"></a>
            <p>Electronics</p>
          </div>
        </div>
        <div class="flex">
          <div class="mr-2">
            <a href="/Outdoor"><img src="/bottomcard62.jpg" alt="" class="rounded-md"></a>
            <p>Outdoor Clothing</p>
          </div>
          <div>
            <a href="/Pet"><img src="/bottomcard63.jpg" alt="" class="rounded-md"></a>
            <p>Pet Supplies</p>
          </div>
        </div>
        <div class="mt-3">
          <a href="#" class="text-green-700">All Departments</a>
        </div>
      </div>
     </div>
     <div>
      <div class="bg-gray-600 text-white text-center py-2">
<div><i class="fa-solid fa-caret-up"></i></div>
<div class="text-sm">TOP OF PAGE</div>
      </div>
      <div class="bg-gray-800 flex pt-3 text-white pl-5 pb-6">
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
    </div>
    </div>

</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
components:{Nav},
mounted(){
this.setupScrollListeners()
},
computed:{
showSideBAr(){
  return this.$store.state.showSideBar
}
},
methods:{
  GotoSignin(){
this.$router.push('/signin')
  },
  gotoGlowup(){
this.$router.push('/Glowup')
  },
    setupScrollListeners() {

      const scrollContainer2 = this.$refs.scrollContainer2
   

      const scrollHandler = (evt) => {
    
   
        scrollContainer2.scrollLeft += evt.deltaY;
      };

      const scrollNext = () => {
    
        scrollContainer2.scrollLeft += 100;
      };

      const scrollBack = () => {
    
        scrollContainer2.scrollLeft -= 100;
      };

     
      scrollContainer2.addEventListener("wheel", scrollHandler);

    },

}
}
</script>

<style>

</style>