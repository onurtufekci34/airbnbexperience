
import ImageStar from "../assets/star.png";
import PropTypes from 'prop-types';

export default function Card(props) {
 
  Card.propTypes = {
    img:PropTypes.any.isRequired,
    rating:PropTypes.any.isRequired,
    reviewCount:PropTypes.any.isRequired,
    location:PropTypes.any.isRequired,
    title:PropTypes.any.isRequired,
    price:PropTypes.any.isRequired,
    openSpots:PropTypes.any.isRequired,
    item:PropTypes.any.isRequired
  };

  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  
  return (
    <div className="card">
      {badgeText &&<div className="card--badge">{badgeText}</div>}
      <img src={"/"+props.item.coverImg} alt="sampleImage" className="card--image" />
      <div className="card--stats">
        <img src={ImageStar} className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  );
}
