import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {ListingsProvider} from './ListingsContext';

function App() {
  return (
    <ListingsProvider>
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
    </ListingsProvider>
  );
}

export default App;
