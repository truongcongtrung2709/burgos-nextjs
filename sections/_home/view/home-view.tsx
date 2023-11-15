
import React from 'react'

import MainLayout from '@/layouts/main/main-layout'


import HomeHero from '../home-hero'
import HomeFeatures from '../home-features'
import HomeProducts from '../home-products'
import HomeIntructions from '../home-intructions'
import HomeContact from '../home-contact'
import HomeFollow from '../home-follow'
import HomeGallery from "../home-gallery"

import { _homeGallery } from '@/_mock/_gallery'
const HomeView = () => {
  return (
    <MainLayout>
      <HomeHero/>
      <HomeFeatures/>
      <HomeProducts/>
      <HomeIntructions/>
      <HomeContact/>
      <HomeFollow/>
      <HomeGallery gallery={_homeGallery}/>
    </MainLayout>
  )
}

export default HomeView