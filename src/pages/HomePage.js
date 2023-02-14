import React from "react";

function HomePage() {
  const url = "https://rickandmortyapi.com/api/character/6";

  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  };

  fetchData();
  return <div>HomePage</div>;
}

export default HomePage;
