import { ResturantCard } from "./Resturant";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "../../node_modules/react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
export const Body = () => {
  const [lisResList, setLisResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditionall Rendering
  // if (lisResList === undefined) {
  //   return <Shimmer />;
  // }

  return lisResList === undefined ? (
    <Shimmer />
  ) : (
    <div className="body">
      {console.log("i am rendering")}
      <div className="filter-btn">
        <div className="input-box">
          <input
            type="text"
            className="input-value"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              console.log("List of Resturant" + lisResList);
              // if(searchText.length !== 0)

              const filterResult = lisResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filterResult);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="btnfilter"
          onClick={() => {
            const filter = lisResList.filter((res) => res.info.avgRating > 4.5);
            console.log(filter);
            setFilteredList(filter);
          }}
        >
          {" "}
          Click to filter{" "}
        </button>
      </div>

      <div className="resturant-container">
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
