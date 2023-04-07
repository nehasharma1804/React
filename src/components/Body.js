import RestaurantCard from "./RestaurantCard";
import { resList } from "../constants";
import { useState, useEffect } from "react";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(resList);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  function filterData(searchText, restaurants) {
    const filteredData =
      searchText !== ""
        ? restaurants.filter((res) => {
            return res.data.name.includes(searchText);
          })
        : restaurants;
    console.log(filteredData);
    setFilteredRestaurants(filteredData);
  }

  const ShimmerUi = ()=>{
return (<h1>Shimmer is loading</h1>
)
  }
  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.112272911923277&lng=72.92581211775541&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    //setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(res?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    console.log("calling use effect");
    getRestaurantData();
  }, []);
  console.log("render");
  return filteredRestaurants.length==0?(<ShimmerUi/>):(
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
        {filteredRestaurants.map((resObj) => {
          return <RestaurantCard {...resObj.data} key={resObj.data.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
