export type Product ={
  id:number,
  image:string,
  name:string,
  oldPrice:string,
  price:number,
  sale:boolean,
  desc:string,
  weight:number,
  ingredients:string,
  review: Review[],
}
export type Review = {
  name:string,
  email:string,
  rating:number,
  comment:string
}