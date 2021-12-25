import React from "react";
import Artista from "./Artista";
import artistas from "../testData/artistas";

const Artistas = () => {
  return (
    <div>
      <h2 className="text-center text-white text-4xl pt-5 mb-2 bg-gray-900">
        Artistas
      </h2>
      <div className="flex overflow-x-auto p-5 mb-2 relative">
        {artistas.map((artista) => (
          <Artista
            key={artista.id}
            id={artista.id}
            name={artista.name}
            image={artista.image}
            alt={artista.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Artistas;
