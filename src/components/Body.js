import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/util";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0487446&lng=77.5923297&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Check your internet connection</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-full h-full flex relative justify-center  mt-4">
        <div className=" w-[95%] pr-4 flex outline-none rounded-lg lg:w-[60%]">
          <input
            type="text"
            className=" overflow-hidden p-2 m-2 lg:w-[80%]"
            placeholder="Search your favourite restaurant"
            value={searchText}
            onChange={(e) => {
              //e.target.value -> Whatever we type in input box
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 bg-gray-400 hover:bg-gray-700 text-white rounded-md float-right items-end lg:w-[20%]"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
          {/* <input
    value={user.name}
    onChange={(e) =>
      setUser({
        name: e.target.value,
        email: "newemail@gmail.com",
      })
    }
  ></input> */}
        </div>
      </div>
      ;
      <div className="flex flex-wrap justify-center max-w-[1200px] w-full my-0 mx-auto">
        {filteredRestaurants.length === 0 ? (
          <div className="flex flex-1 justify-center items-center font-mono text-lg">
            No restaurant found.
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                {" "}
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
