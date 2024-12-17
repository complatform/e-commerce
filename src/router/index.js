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
