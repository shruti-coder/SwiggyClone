import { ResturantCard,withPromotedLabel } from "./ResturantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "../../node_modules/react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
  const [lisResList, setLisResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus=useOnlineStatus();
  // const ResturantPromoted=withPromotedLabel(ResturantCard);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setLisResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditionall Rendering
  // if (lisResList === undefined) {
  //   return <Shimmer />;
  // }

  if(onlineStatus===false){
    return (
      <div>
        <h1>
          Looks Like you are offline and wants to continue please get online!!!
        </h1>
      </div>
    )
  }

  return lisResList.length===0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      {console.log("i am rendering")}
      <div className="flex">
        <div className="input-box my-4 p-4">
          <input
            type="text"
            className="border border-solid  border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
           </div>
          <div className="flex"> 
          <button className=" my-8 px-3 bg-green-200  border border-solid border-black rounded"
            // className="btns"
            onClick={() => {
              console.log("List of Resturant" + lisResList);
              const filterResult = lisResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterResult);
            }}
          >
            Search
          </button>
          <button
            className=" mx-2 px-3 my-8  bg-red-200  border border-solid border-black rounded"
            onClick={() => {
              setSearchText("");
              setFilteredList(lisResList);
            }}
          >
            Clear
          </button>
       

        <button
          className="mx-2 px-3 my-8  bg-purple-200  border border-solid border-black rounded"
          onClick={() => {
            const filter = lisResList.filter((res) => res.info.avgRating >4.2);
            console.log(filter);
            setFilteredList(filter);
          }}
        >
          {" "}
          Click to filter
        </button>
      </div>
      </div>
      <div className="flex flex-wrap">
        {/* {console.log("listcard :", lisResList)} */}

        {filteredList.map((resturant) => (
          <Link
            key={resturant?.info?.id}
            to={"/resturants/" + resturant?.info?.id}
          >
          <ResturantCard resData={resturant} />
          </Link>
        ))}
        {/* <ResturantCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};
