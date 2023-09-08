import { DISH_URL } from "../utils/contants";

//Named export
export const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[220px] bg-gray-100 rounded-lg h-80 hover:bg-gray-200">
      <img src={DISH_URL + cloudinaryImageId} className="rounded-lg" alt="" />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} approx</h4>
    </div>
  );
};

export const withPromotedLabel = () =>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <ResturantCard {...props}/>
      </div>
    )
  }
};