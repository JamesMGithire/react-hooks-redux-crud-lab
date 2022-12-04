import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";

function Restaurants() {
  const restaurants = useSelector(state=>state.restaurants)
  return (
    <ul>Restaurants Component<br/>
      {restaurants.entities.map(restaurant=><Restaurant 
      key={restaurant.id} 
      restaurant={restaurant}/>)}
    </ul>
  );
    
}

export default Restaurants;
