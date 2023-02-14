import React from "react";

function CharacterList({ data }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 p-1 ">
      <img className="w-full" src={data.image} alt={data.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name}</div>
      </div>
    </div>
  );
}

export default CharacterList;
