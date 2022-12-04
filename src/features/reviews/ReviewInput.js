import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({resturantId}) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  function handleChange(e) {
    setComment(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(reviewAdded({comment: comment, resturantId: resturantId}))
    setComment("");
  }
  return (<>
    <div>Review Input</div>;
    <form onSubmit={handleSubmit}>
      <label>Comment
      <textarea name="Comment" onChange={handleChange}/>
      </label>
      <input type="submit" value="Add Review"/>
    </form>
  </>);
}

export default ReviewInput;
