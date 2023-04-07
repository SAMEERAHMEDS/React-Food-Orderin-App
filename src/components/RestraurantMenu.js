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
    <div className="my-2 flex-1">
      <div className="w-full bg-gray-100  p-1 flex justify-center flex-wrap sm:justify-between sm:flex-nowrap sm:p-4 sm:sticky top-0 left-0 z-20 xl:justify-center">
        <div className="flex">
          <img
            loading="lazy"
            className="w-[100%] rounded-md mr-2 sm:w-[190px] sm:mr-0 lg:w-[279px] lg:mr-3 "
            src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          />

          <div className="flex flex-col sm:p-4 ">
            <h1 className="font-bold text-[#282c3f] text-base sm:text-xl lg:text-2xl xl:text-3xl">
              {restaurantInfo?.name}
            </h1>
            <h3>{restaurantInfo?.areaName}</h3>
            <h4>{restaurantInfo?.city}</h4>
            <div className="flex items-center font-mono font-semibold text-xs lg:text-sm xl:text-base">
              <div className="flex items-center justify-between">
                {/* <AiFillStar
                  fontSize='large'
                  color={restaurantInfo?.avgRating >= 4 ? '#48c479' : '#db7c38'}
                /> */}
                <span>{restaurantInfo?.avgRating}</span>
              </div>
              <span className="p-1">•</span>
              <div>{restaurantInfo?.sla?.deliveryTime} mins</div>
              <span className="p-1">•</span>
              <div>{restaurantInfo?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <h1 className="mb-2 text-2xl font-bold underline text-center">Menu</h1>
        <div className="flex flex-col max-w-[1200px] w-full mx-auto">
          {menuItems?.map((item, index) => (
            <div
              className="flex justify-between mb-6 p-4 rounded-md border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s]"
              key={index}
            >
              <div className="w-[calc(100%_-_140px)]">
                <div
                  className={
                    item?.card?.info?.isVeg
                      ? "flex justify-center items-center w-4 h-4 border-2 border-green-600"
                      : "flex justify-center items-center w-4 h-4 border-2 border-red-600"
                  }
                >
                  <span
                    className={
                      item?.card?.info?.isVeg
                        ? "w-2 h-2 rounded-full bg-green-600"
                        : "w-2 h-2 rounded-full bg-red-600"
                    }
                  ></span>
                </div>

                <div className="mt-2 font-bold text-base">
                  {item?.card?.info?.name}
                </div>
                <div className="mt-2 font-mono">
                  ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </div>
                <div className="mt-4 text-sm">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="ml-2 w-[118px] h-[120px] relative">
                <div className="w-[118px] h-24">
                  {item?.card?.info?.imageId === "" ? (
                    <img
                      loading="lazy"
                      className="w-[118px] h-24 rounded-lg object-cover"
                      src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      className="w-[118px] h-24 rounded-lg object-cover"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                    />
                  )}
                </div>

                <div className="absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold">
                  <button
                    className="p-2"
                    onClick={() =>
                      cartItems[item?.card?.info?.id]?.quantity &&
                      handleRemoveItem(item?.card?.info)
                    }
                  >
                    <span>-</span>
                  </button>
                  <div>
                    <span>
                      {/* {cartItems[item?.card?.info?.id]?.quantity || 0} */}
                    </span>
                  </div>
                  <button
                    data-testid="add-btn"
                    className="p-2 z-30"
                    onClick={() => handleAddItem(item?.card?.info)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
