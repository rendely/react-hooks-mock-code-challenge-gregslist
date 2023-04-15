import React, {useState, useContext} from "react";
import {ListingsContext} from './ListingsContext';

function ListingCard({listing}) {
  const [isFavorited, setIsFavorited] = useState(true);
  const {onDelete} = useContext(ListingsContext);

  function handleDeleteClick(){
    onDelete(listing.id);
  }

  function handleFavoriteClick(){
    setIsFavorited(!isFavorited);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
