import { Order } from "@/types/order";
import fetcher from "./fetcher";


export const ordersURLEndpoint = "/orders"

export const getOrders = async () => {
  try {
    const res = await fetcher.post(ordersURLEndpoint);
    return res.data
  } catch (error) {
    console.log(error);
    
  }

}