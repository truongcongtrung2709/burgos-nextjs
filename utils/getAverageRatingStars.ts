
export function getAverageRatingStars (reviews:any) {
  const res1Star = reviews?.filter((review:any) => review.rating.toString() === "1").length
  const res2Star = reviews?.filter((review:any) => review.rating.toString() === "2").length
  const res3Star = reviews?.filter((review:any) => review.rating.toString() === "3").length
  const res4Star = reviews?.filter((review:any) => review.rating.toString() === "4").length
  const res5Star = reviews?.filter((review:any) => review.rating.toString() === "5").length
  return  (1*res1Star + 2*res2Star + 3*res3Star + 4*res4Star + 5*res5Star) / reviews?.length
}