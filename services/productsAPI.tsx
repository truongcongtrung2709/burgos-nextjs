import { Product } from "@/types/product";
import axios from "axios";

const productsAPI = axios.create({baseURL:"https://burgos-be.onrender.com/"})

export const productsURLEndpoint = "/products"

export const getProducts = async () => {
  const res = await productsAPI.get(productsURLEndpoint);
  return res.data
}
export const getProductById = async (product:Product) => {
  const res = await productsAPI.get(`${productsURLEndpoint}/${product.id}`);
  return res.data
}