import { Review } from "@/types/product";
import fetcher from "./fetcher";


export const reviewsURLEndpoint = "/products"

export const addReviewById = async (values:Review,productId:string) => {
  try {
    const res = await fetcher.post(reviewsURLEndpoint + "/" + productId, values);
    return res.data
  } catch (error) {
    console.log(error);
    
  }

}