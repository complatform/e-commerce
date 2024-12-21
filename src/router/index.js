import { createRouter, createWebHistory } from 'vue-router'

import Ecommerce from '../views/Ecommerce/Ecommerce'
import Signin from '../views/Ecommerce/Signin'
import Signup from '../views/Ecommerce/Signup'
import amazonCart from '../views/Ecommerce/amazonCart'
import Shopping from '../views/Ecommerce/Shopping'
import Glowup from '../views/Ecommerce/Glowup'
import CustomerLoved from '../views/Ecommerce/CustomerLoved'
import UpgradeGame from '../views/Ecommerce/UpgradeGame'
import DelightfulDeal from '../views/Ecommerce/DelightfulDeal'
import SmallGifts from '../views/Ecommerce/SmallGifts'
import ShopStorage from '../views/Ecommerce/ShopStorage'
import ShopToys from '../views/Ecommerce/ShopToys'
import SweetHome from '../views/Ecommerce/SweetHome'
import Pc from '../views/Ecommerce/Pc'
import FunFor from '../views/Ecommerce/FunFor'
import HomeDecore from '../views/Ecommerce/HomeDecore'
import ShopeHoilday from '../views/Ecommerce/ShopeHoilday'
import General from '../views/Ecommerce/General'
import Desktop from '../views/Ecommerce/Desktop'
import Laptop from '../views/Ecommerce/Laptop'
import HardDrive from '../views/Ecommerce/HardDrive'
import PCAccessories from '../views/Ecommerce/PCAccessories'
import Womens from '../views/Ecommerce/Womens'
import Mens from '../views/Ecommerce/Mens'
import Girls from '../views/Ecommerce/Girls'
import Boys from '../views/Ecommerce/Boys'
import Kitchen from '../views/Ecommerce/Kitchen'
import HomeDecore2 from '../views/Ecommerce/HomeDecore2'
import Dining from '../views/Ecommerce/Dining'
import SmartHome from '../views/Ecommerce/SmartHome'
import Jewelry from '../views/Ecommerce/Jewelry'
import HandBag from '../views/Ecommerce/HandBag'
import FootWear from '../views/Ecommerce/FootWear'
import Beuty from '../views/Ecommerce/Beuty'
import Xbox from '../views/Ecommerce/Xbox'
import Nintendo from '../views/Ecommerce/Nintendo'
import VR from '../views/Ecommerce/VR'
import Ps5 from '../views/Ecommerce/Ps5'
import HairCare from '../views/Ecommerce/HairCare'
import Fragrances from '../views/Ecommerce/Fragrances'
import Makeup from '../views/Ecommerce/Makeup'
import SkinCare from '../views/Ecommerce/SkinCare'
import WomensClothing from '../views/Ecommerce/WomensClothing'
import WomensShoes from '../views/Ecommerce/WomensShoes'
import MensClothing from '../views/Ecommerce/MensClothing'
import MensShoes from '../views/Ecommerce/MensShoes'
import Kitchenanddining from '../views/Ecommerce/Kitchenanddining'
import Furniture from '../views/Ecommerce/Furniture'
import Bedding from '../views/Ecommerce/Bedding'
import HomeImprovement from '../views/Ecommerce/HomeImprovement'
import Garden from '../views/Ecommerce/Garden'
import Decor from '../views/Ecommerce/Decor'
import Snak from '../views/Ecommerce/Snak'
import Toys from '../views/Ecommerce/Toys'
import Strolers from '../views/Ecommerce/Strolers'
import Car from '../views/Ecommerce/Car'
import Tab1 from '../views/Ecommerce/Tab1'
import Tab2 from '../views/Ecommerce/Tab2'
import Tab3 from '../views/Ecommerce/Tab3'
import Tab4 from '../views/Ecommerce/Tab4'
import DealsOnShoes from '../views/Ecommerce/DealsOnShoes'
import Apparel from '../views/Ecommerce/Apparel'
import Hats from '../views/Ecommerce/Hats'
import Action from '../views/Ecommerce/Action'
import Mugs from '../views/Ecommerce/Mugs'
import WomenShoes1 from '../views/Ecommerce/WomenShoes1'
import WomenShoes2 from '../views/Ecommerce/WomenShoes2'
import WomenShoes3 from '../views/Ecommerce/WomenShoes3'
import WomenShoes4 from '../views/Ecommerce/WomenShoes4'
import Homandkitches from '../views/Ecommerce/Homandkitches'
import Travel from '../views/Ecommerce/Travel'
import NewWay from '../views/Ecommerce/NewWay'
import Beauty from '../views/Ecommerce/Beauty'
import Homeandkitchen from '../views/Ecommerce/Homeandkitchen'
import Sports from '../views/Ecommerce/Sports'
import Electronics from '../views/Ecommerce/Electronics'
import Outdoor from '../views/Ecommerce/Outdoor'
import Pet from '../views/Ecommerce/Pet'
import Book1 from '../views/Ecommerce/Book1'
import Book2 from '../views/Ecommerce/Book2'
import Book3 from '../views/Ecommerce/Book3'



const routes = [
  {
    path: '/',
    name: 'Ecommerce',
    component: Ecommerce
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/amazonCart',
    name: 'amazonCart',
    component: amazonCart
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/Glowup',
    name: 'Glowup',
    component: Glowup
  },
  {
    path: '/CustomerLoved',
    name: 'CustomerLoved',
    component: CustomerLoved
  },
  {
    path: '/UpgradeGame',
    name: 'UpgradeGame',
    component: UpgradeGame
  },
  {
    path: '/DelightfulDeal',
    name: 'DelightfulDeal',
    component: DelightfulDeal
  },
  {
    path: '/SmallGifts',
    name: 'SmallGifts',
    component: SmallGifts
  },
  {
    path: '/ShopStorage',
    name: 'ShopStorage',
    component: ShopStorage
  },
  {
    path: '/ShopToys',
    name: 'ShopToys',
    component: ShopToys
  },
  {
    path: '/SweetHome',
    name: 'SweetHome',
    component: SweetHome
  },
  {
    path: '/Pc',
    name: 'Pc',
    component: Pc
  },
  {
    path: '/FunFor',
    name: 'FunFor',
    component: FunFor
  },
  {
    path: '/HomeDecore',
    name: 'HomeDecore',
    component: HomeDecore
  },
  {
    path: '/ShopeHoilday',
    name: 'ShopeHoilday',
    component: ShopeHoilday
  },
  {
    path: '/General',
    name: 'General',
    component: General
  },
  {
    path: '/Desktop',
    name: 'Desktop',
    component: Desktop
  },
  {
    path: '/Laptop',
    name: 'Laptop',
    component: Laptop
  },
  {
    path: '/HardDrive',
    name: 'HardDrive',
    component: HardDrive
  },
  {
    path: '/PCAccessories',
    name: 'PCAccessories',
    component: PCAccessories
  },
  {
    path: '/Womens',
    name: 'Womens',
    component: Womens
  },
  {
    path: '/Mens',
    name: 'Mens',
    component: Mens
  },
  {
    path: '/Girls',
    name: 'Girls',
    component: Girls
  },
  {
    path: '/Boys',
    name: 'Boys',
    component: Boys
  },
  {
    path: '/Kitchen',
    name: 'Kitchen',
    component: Kitchen
  },
  {
    path: '/HomeDecore2',
    name: 'HomeDecore2',
    component: HomeDecore2
  },
  {
    path: '/Dining',
    name: 'Dining',
    component: Dining
  },
  {
    path: '/SmartHome',
    name: 'SmartHome',
    component: SmartHome
  },
  {
    path: '/Jewelry',
    name: 'Jewelry',
    component: Jewelry
  },
  {
    path: '/HandBag',
    name: 'HandBag',
    component: HandBag
  },
  {
    path: '/FootWear',
    name: 'FootWear',
    component: FootWear
  },
  {
    path: '/Beuty',
    name: 'Beuty',
    component: Beuty
  },
  {
    path: '/Xbox',
    name: 'Xbox',
    component: Xbox
  },
  {
    path: '/Nintendo',
    name: 'Nintendo',
    component: Nintendo
  },
  {
    path: '/VR',
    name: 'VR',
    component: VR
  },
  {
    path: '/Ps5',
    name: 'Ps5',
    component: Ps5
  },
  {
    path: '/HairCare',
    name: 'HairCare',
    component: HairCare
  },
  {
    path: '/Fragrances',
    name: 'Fragrances',
    component: Fragrances
  },
  {
    path: '/Makeup',
    name: 'Makeup',
    component: Makeup
  },
  {
    path: '/SkinCare',
    name: 'SkinCare',
    component: SkinCare
  },
  {
    path: '/WomensClothing',
    name: 'WomensClothing',
    component: WomensClothing
  },
  {
    path: '/WomensShoes',
    name: 'WomensShoes',
    component: WomensShoes
  },
  {
    path: '/MensClothing',
    name: 'MensClothing',
    component: MensClothing
  },
  {
    path: '/MensShoes',
    name: 'MensShoes',
    component: MensShoes
  },
  {
    path: '/Kitchenanddining',
    name: 'Kitchenanddining',
    component: Kitchenanddining
  },
  {
    path: '/Furniture',
    name: 'Furniture',
    component: Furniture
  },
  {
    path: '/Bedding',
    name: 'Bedding',
    component: Bedding
  },
  {
    path: '/HomeImprovement',
    name: 'HomeImprovement',
    component: HomeImprovement
  },
  {
    path: '/Garden',
    name: 'Garden',
    component: Garden
  },
  {
    path: '/Decor',
    name: 'Decor',
    component: Decor
  },
  {
    path: '/Snak',
    name: 'Snak',
    component: Snak
  },
  {
    path: '/Toys',
    name: 'Toys',
    component: Toys
  },
  {
    path: '/Strolers',
    name: 'Strolers',
    component: Strolers
  },
  {
    path: '/Car',
    name: 'Car',
    component: Car
  },
  {
    path: '/Tab1',
    name: 'Tab1',
    component: Tab1
  },
  {
    path: '/Tab2',
    name: 'Tab2',
    component: Tab2
  },
  {
    path: '/Tab3',
    name: 'Tab3',
    component: Tab3
  },
  {
    path: '/Tab4',
    name: 'Tab4',
    component: Tab4
  },
  {
    path: '/DealsOnShoes',
    name: 'DealsOnShoes',
    component: DealsOnShoes
  },
  {
    path: '/Apparel',
    name: 'Apparel',
    component: Apparel
  },
  {
    path: '/Hats',
    name: 'Hats',
    component: Hats
  },
  {
    path: '/Action',
    name: 'Action',
    component: Action
  },
  {
    path: '/Mugs',
    name: 'Mugs',
    component: Mugs
  },
  {
    path: '/WomenShoes1',
    name: 'WomenShoes1',
    component: WomenShoes1
  },
  {
    path: '/WomenShoes2',
    name: 'WomenShoes2',
    component: WomenShoes2
  },
  
  {
    path: '/WomenShoes3',
    name: 'WomenShoes3',
    component: WomenShoes3
  },
  
  {
    path: '/WomenShoes4',
    name: 'WomenShoes4',
    component: WomenShoes4
  },
  {
    path: '/WomenShoes4',
    name: 'WomenShoes4',
    component: WomenShoes4
  },
  {
    path: '/Homandkitches',
    name: 'Homandkitches',
    component: Homandkitches
  },
  {
    path: '/Travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/NewWay',
    name: 'NewWay',
    component: NewWay
  },
  {
    path: '/Beauty',
    name: 'Beauty',
    component: Beauty
  },
  {
    path: '/Homeandkitchen',
    name: 'Homeandkitchen',
    component: Homeandkitchen
  },
  {
    path: '/Sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/Electronics',
    name: 'Electronics',
    component: Electronics
  },
  {
    path: '/Outdoor',
    name: 'Outdoor',
    component: Outdoor
  },
  {
    path: '/Pet',
    name: 'Pet',
    component: Pet
  },
  {
    path: '/Book1',
    name: 'Book1',
    component: Book1
  },
  {
    path: '/Book2',
    name: 'Book2',
    component: Book2
  },
  {
    path: '/Book3',
    name: 'Book3',
    component: Book3
  },
  
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
