import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../reviews/Review";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {
  const restaurantReviews = useSelector(state=>
    state.reviews.entities
    .filter(review=>review.restaurantId=== restaurant.id))
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={()=>dispatch(restaurantRemoved(restaurant.id))}> Delete Restaurant </button>
        <ul>
          {restaurantReviews.map(review=><Review key={review.id} review={review}/>)}
        </ul>
      </li>
    </div>
  );
}

export default Restaurant;
