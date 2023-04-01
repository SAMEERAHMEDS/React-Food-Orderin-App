import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  const restaurantInfo = restaurant?.cards?.[0]?.card?.card?.info;

  const menuItems =
    restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||
    restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards ||
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1> Restaurant id: {id}</h1>
        <h2>{restaurantInfo?.name}</h2>
        <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
        <h3>{restaurantInfo?.areaName}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating} Stars</h3>
        <h3>{restaurantInfo?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems?.map((item, index) => (
            <li key={index}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
