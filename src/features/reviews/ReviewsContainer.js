import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({restaurantId}) {
  return (
    <div>
      <ReviewInput resturantId={restaurantId}/>
      <Reviews resturantId={restaurantId}/>
    </div>
  );
}

export default ReviewsContainer;
