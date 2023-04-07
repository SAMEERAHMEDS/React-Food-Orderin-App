import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="w-[268px] h-[312px] m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="w-full rounded-t-[5px]"
        alt="image"
        
      />
      <div className="my-2">
        <h2 className="px-2 text-base font-bold text-[#282c3f]">{name}</h2>
        <h3 className="h-[48px] w-auto px-2 pt-1 text-sm text-[#686b78] break-words whitespace-normal line-clamp-2">
          {cuisines.join(", ")}
        </h3>
      </div>
      <div className="m-2 flex justify-around text-xs">
        <div>{avgRating}</div>
        <div>•</div>
        <div>{deliveryTime} mins</div>
        <div>•</div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
