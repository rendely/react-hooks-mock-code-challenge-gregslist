import React, {createContext, useEffect, useState} from 'react';

const ListingsContext = createContext();

function ListingsProvider({children}){

  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect( ()=> {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(d => setListings(d))
  }
  ,[]
  );

  function handleDelete(id){
    fetch('http://localhost:6001/listings/'+id, {method: "DELETE"})
    .then(r => r.json())
    .then(() => console.log('deleted'))

    setListings(listings.filter(l => l.id !== id));
  }

  const context = {
    listings: listings, 
    setListings: setListings,
    onDelete: handleDelete,
    filter: filter,
    setFilter: setFilter
  }

  return (
     <ListingsContext.Provider 
      value={context}>
      {children}
     </ListingsContext.Provider>
  )
}

export {ListingsContext, ListingsProvider}