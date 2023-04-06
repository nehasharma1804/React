import {IMG_CDN_URL} from "../constants";
const RestaurantCard = (props) => {
   const  { name,
        cuisines,
        cloudinaryImageId,
        lastMileTravelString}=props
    //const { resList } = props;
    return (
      <div className="resCard">
        <img
          className="resImg"
          src={IMG_CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{lastMileTravelString}</h4>
      
      </div>
    );
  };

  export default RestaurantCard;