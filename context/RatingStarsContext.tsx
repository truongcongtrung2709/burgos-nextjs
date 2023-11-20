"use client"
import { Review } from '@/types/reviews'
import {useState,createContext,ReactNode, useContext, useEffect} from 'react'
type RatingStarsProviderProps = {
  children: ReactNode
}
type RatingStarsContext = {
  getAverageRatingStars:(reviews:any)=> number
  reviews:Review[]
}
const RatingStarsContext = createContext({} as RatingStarsContext)

export function useRatingStars(){
  return useContext(RatingStarsContext)
}
export function RatingStarsProvider({children}:RatingStarsProviderProps){
  const [reviews, setReviews] = useState<Review[]>([])
   function getAverageRatingStars (reviews:any) {
    const res1Star = reviews?.filter((review:any) => review.rating.toString() === "1").length
    const res2Star = reviews?.filter((review:any) => review.rating.toString() === "2").length
    const res3Star = reviews?.filter((review:any) => review.rating.toString() === "3").length
    const res4Star = reviews?.filter((review:any) => review.rating.toString() === "4").length
    const res5Star = reviews?.filter((review:any) => review.rating.toString() === "5").length
    return  (1*res1Star + 2*res2Star + 3*res3Star + 4*res4Star + 5*res5Star) / reviews?.length
  }
  return(
    <RatingStarsContext.Provider value={{getAverageRatingStars,reviews}}>
    {children}
    </RatingStarsContext.Provider>
  )
}