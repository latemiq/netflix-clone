import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';
import LandingScreen from './LandingScreen';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("landing"); 

  const goToLogin = () => setScreen("login");

  const handleLogin = (email) => {
    setUser({ email });
    setScreen("app");
  };

  if (screen === "landing") {
    return <LandingScreen onGoLogin={goToLogin} />;
  }

  if (screen === "login") {
    return <Login onLogin={handleLogin} onBack={() => setScreen("landing")} />;
  }

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOrginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
