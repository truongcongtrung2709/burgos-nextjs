import React from 'react'
import Header from './header';
import Footer from './footer';
import ScrollOnTop from '@/components/scroll-on-top/scroll-on-top';

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({children} : Props) => {
  return (
    <>
    <Header/>
    {children}
    <ScrollOnTop/>
    <Footer/>
    </>
  )
}

export default MainLayout