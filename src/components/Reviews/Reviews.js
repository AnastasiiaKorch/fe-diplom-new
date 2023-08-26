import React from "react";
import './Reviews.css'
import Review from "./Reviews/Review";
import reviews from "../../data/reviews/reviews";


function Reviews(){
  return (
    <div id="reviews">
      <div className="reviews">
        <span className="reviews__title">Отзывы</span>
        <div className="reviews__cards">
          {reviews.map((review) =>(
            <Review
              key={review.id}
              img={review.img}
              name={review.name}
              head={review.head}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Reviews;