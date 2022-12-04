import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  
  function handleChange(e) {
    setInput(()=>e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(input));
    setInput("");
  }
  
  return (
    <>
      <div>Restaurant Input</div>
      <form onSubmit={handleSubmit}>
        <label>Name
        <input name="name" type="text" onChange={handleChange}/>
        </label>
        <input name="add restaurant" value="add restaurant" type="submit"/>
      </form>
    </>
  );
}

export default RestaurantInput;
