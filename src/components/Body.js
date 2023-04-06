import RestaurantCard from "./RestaurantCard";
import { resList } from "../constants";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(resList);
 

  function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((res) => {
      return res.data.name.includes(searchText);
    });
    console.log(filteredData)
    setAllRestaurants(filteredData);
    
  }
  return (
    <div className="body-container">
      <div className="search-container">
        Search:
        <input
          type="search"
          placefolder="search.."
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
             filterData(searchText, allRestaurants);
           
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {allRestaurants.map((resObj) => {
          return <RestaurantCard  {...resObj.data} key={resObj.data.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
