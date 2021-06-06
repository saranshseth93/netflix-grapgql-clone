import "./App.css";
import { useState, useEffect } from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  const incrementGenre = 4;
  const [genres, setGenres] = useState(null);
  const [limit, setLimit] = useState(incrementGenre);

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit
    });
    const responseBody = await response.json();

    setGenres(responseBody.data.reference_list.values);
  };

  useEffect(() => {
    fetchData();
  }, [, limit]);

  return (
    <>
      <Navbar />
      <HeroSection />
      {genres && (
        <div className="container">
          {Object.values(genres).map((genre, index) => (
            <Section key={index} genre={genre.value} />
          ))}
        </div>
      )}
      <div
        className="page-end"
        onMouseEnter={() => {
          setLimit(limit + incrementGenre);
        }}
      ></div>
    </>
  );
}

export default App;
