import React from "react";
import StarImg from "../assets/star_img.svg";

export default function Card(props) {
  let badgeText;

  if (props.item.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.item.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card-container">
      <div className="card-photo-container">
        <img
          className="card-photo"
          src={`${process.env.PUBLIC_URL}/assets/${props.item.coverImg}`}
          alt={props.item.imgDescription}
        />
        {badgeText && (
          <div className="card-status-container">
            <span className="card-status-text">{badgeText}</span>
          </div>
        )}
      </div>
      <div className="card-details">
        <div className="card-details-item">
          <img className="card-star" src={StarImg} alt="Star" />
          <div>
            <span>{props.item.stats.rating}</span>
            <span className="color-gray">
              {" "}
              ({props.item.stats.reviewCount}) ●{" "}
            </span>
            <span className="color-gray">{props.item.location}</span>
          </div>
        </div>
        <span className="card-details-item">{props.item.title}</span>
        <div className="card-details-item">
          <span>
            <strong>From ${props.item.price}</strong> / person
          </span>
        </div>
      </div>
    </div>
  );
}
