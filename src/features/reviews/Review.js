import React from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewsSlice";

function Review({ review }) {
  const dispatch = useDispatch();
  function handleDeleteClick(){
    dispatch(reviewRemoved(review))
  }
  return (
    <>
      <li>{review.comment}</li>
      <button onClick={handleDeleteClick}> Delete Review </button>
      </>
  );
}

export default Review;
