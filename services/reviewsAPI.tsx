import { Review } from "@/types/reviews";
import fetcher from "./fetcher";


export const reviewsURLEndpoint = "/reviews"

export const getReviews = async () => {
  try {
    const res = await fetcher.get(reviewsURLEndpoint);
    return res.data
  } catch (err) {
    console.log(err);
    
  }
}
export const addReview = async (values:Review) => {
  try {
    const res = await fetcher.post(reviewsURLEndpoint,values);
    return res.data
  } catch (err) {
    console.log(err);
    
  }
}
