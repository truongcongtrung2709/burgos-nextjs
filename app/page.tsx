import HomeView from '@/sections/_home/view/home-view'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burgos',
  description: 'The place for burgers.',
}
export default function Home() {
  return   (
      <div className='bg-body-background bg-center bg-repeat'>
      <HomeView/>
      </div>
  )
}
