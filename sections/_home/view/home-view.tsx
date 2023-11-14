import MainLayout from '@/layouts/main/main-layout'
import React from 'react'
import HomeHero from '../home-hero'
import HomeFeatures from '../home-features'
import ScrollOnTop from '@/components/scroll-on-top/scroll-on-top'
import HomeProducts from '../home-products'
const HomeView = () => {
  return (
    <MainLayout>
      <HomeHero/>
      <HomeFeatures/>
      <HomeProducts/>
    </MainLayout>
  )
}

export default HomeView