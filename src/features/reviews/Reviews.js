import React from "react";
import { useSelector } from "react-redux";
import Review from "./Review";

function Reviews({restaurantId}) {
  const allReviews = useSelector(state=>state.reviews)
  const reviews =allReviews.entities
  return (<ul>Reviews
  {reviews.map(review=><Review key={review.id} review={review}/>)}
  </ul>);
}

export default Reviews;
