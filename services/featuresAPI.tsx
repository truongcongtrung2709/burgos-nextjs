import fetcher from "./fetcher";


export const featuresURLEndpoint = "/features"

export const getFeatures = async () => {

  try {
    const res = await fetcher.get(featuresURLEndpoint);
    return res.data
  } catch (error) {
    console.log(error);
    
  }
}