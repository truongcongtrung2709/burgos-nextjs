import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://burgos-be.onrender.com/"
})
export default fetcher;
