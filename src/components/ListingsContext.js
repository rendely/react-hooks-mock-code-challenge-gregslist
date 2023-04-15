import React, {createContext, useEffect, useState} from 'react';

const ListingsContext = createContext();

function ListingsProvider({children}){

  const [listings, setListings] = useState([]);

  useEffect( ()=> {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(d => setListings(d))
  }
  ,[]
  )

  return (
     <ListingsContext.Provider 
      value={{listings: listings, setListings: setListings}}>
      {children}
     </ListingsContext.Provider>
  )
}

export {ListingsContext, ListingsProvider}