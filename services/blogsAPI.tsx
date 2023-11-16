import axios from "axios";

const blogsAPI = axios.create({baseURL: "https://burgos-be.onrender.com/"})

export const blogsURLEndpoint = "/blogs"

export const getBlogs = async() => {
  const res = await blogsAPI.get(blogsURLEndpoint);
  return res.data
}