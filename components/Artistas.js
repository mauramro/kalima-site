import React from "react";
import Artista from "./Artista";
import artistas from "../testData/artistas";

const Artistas = () => {
  return (
    <><h2 className="pl-8 text-white text-4xl pt-5 mb-2">Artistas</h2>
    <div className="flex overflow-x-auto p-5 mb-2 relative">
      {artistas.map((artista) => (
        <Artista
          key={artista.id}
          id={artista.id}
          name={artista.name}
          image={artista.image}
          alt={artista.alt}
          desc={artista.desc} />
      ))}
    </div></>
  );
};

export default Artistas;
