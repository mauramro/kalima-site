import React from "react";
import Link from "next/link";

const DetallesArtista = ({ name, image, desc }) => {
  return (
    <div className="mx-auto text-center text-white py-5 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 px-5">
      <h3 className="mb-4">{name}</h3>
      <img src={`../../images/${image}`} desc="" alt="" className="mx-auto" />
      <p className="text-sm">{desc}</p>
      <Link href="/">
        <button className="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ">
          Regresar
        </button>
      </Link>
    </div>

    
  );
};

export default DetallesArtista;
