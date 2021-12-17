import React from "react";
import Artista from "./Artista";
import artistas from "../testData/artistas";

const Artistas = () => {
  return (
    <div className="flex flex-nowrap overflow-x-auto container mx-auto px-4 py-5" style={{backgroundColor: "#000"}}>
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
  );
};

export default Artistas;
