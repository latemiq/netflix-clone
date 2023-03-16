import React from 'react';
import './App.css';
import Row from './Row'
import request from './request';

function App() {
  return (
    <div className="App">
      <h1>HEYYYYYYYYY</h1>
      <Row title="NETFLIX ORGINALS" fetchUrl={request.fetchNetflixOrginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTopRated} />
    </div>
  );
}

export default App;
