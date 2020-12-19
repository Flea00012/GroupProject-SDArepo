//react core
import React from "react";
//import css styling
import "../../css/styles.css";
//import ratingIcon
import RatingIcon from "../star/RatingIcon";
//import axios instance
import AnsweredAssignmentsApi from "../../api/AnsweredAssignmentsApi";

// StarRating component
function StarRating({ answers }) {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  const saveRatingToDatabase = (rating) => {
    let newObj = { ...answers, rating: rating };

    AnsweredAssignmentsApi.updateAnsweredAssignment(
      newObj
    ).then((response) => {});
  };
  return (
    <div className="star box flex">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
            saveRatingToDatabase={saveRatingToDatabase}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
