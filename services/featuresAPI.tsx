import axios from "axios";

const featuresAPI = axios.create({baseURL:"https://burgos-be.onrender.com/"})

export const featuresURLEndpoint = "/features"

export const getFeatures = async () => {
  const res = await featuresAPI.get(featuresURLEndpoint);
  return res.data
}