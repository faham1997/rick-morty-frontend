import React, { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import { getAllCharacters } from "../service/services";

function HomePage() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const res = await getAllCharacters();
    setDatas(res.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1496361751588-bdd9a3fcdd6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80')] h-full w-full">
      <div className="font-bold text-2xl text-center pb-5 pt-2 text-white">
        Characters{" "}
      </div>
      <div className="px-10 grid grid-cols-2 gap-5 md:grid-cols-4 overflow">
        {datas.length > 0 ? (
          datas.map((data) => <CharacterList key={data.id} data={data} />)
        ) : (
          <>No characters found!!</>
        )}
      </div>
    </div>
  );
}

export default HomePage;
