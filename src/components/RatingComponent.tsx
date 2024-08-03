import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="pl-3">
      <Rating
        onClick={handleRating}
        initialValue={rating}
        emptyStyle={{ display: "flex" }}
      />
    </div>
  );
};

export default RatingComponent;
