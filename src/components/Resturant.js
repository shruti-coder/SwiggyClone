import { DISH_URL } from "../utils/contants";

//Named export
 export const ResturantCard = ({ resData }) => {
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resData?.info;
    return (
      <div className="res-card">
        <img
          src={
            DISH_URL+cloudinaryImageId
          }
          className="res-logo"
          alt=""
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} approx</h4>
      </div>
    );
  };