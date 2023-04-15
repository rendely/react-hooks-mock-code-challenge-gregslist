import React, {useContext} from "react";
import ListingCard from "./ListingCard";
import {ListingsContext} from "./ListingsContext";

function ListingsContainer() {

  const {listings} = useContext(ListingsContext);
  
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (<ListingCard key={listing.id} listing={listing} />))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
