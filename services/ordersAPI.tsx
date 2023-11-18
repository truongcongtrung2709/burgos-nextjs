import { Order } from "@/types/order";
import fetcher from "./fetcher";


export const ordersURLEndpoint = "/orders"

export const addOrder = async (values:Order) => {
  try {
    const res = await fetcher.post(ordersURLEndpoint, values);
    return res.data
  } catch (error) {
    console.log(error);
    
  }

}