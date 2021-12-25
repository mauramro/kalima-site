import React from "react";

const DetallesArtista = ({ name, image }) => {
  return (
    <div className="mx-auto text-center text-white py-5 bg-gray-900">
      <h3 className="mb-4">{name}</h3>
      <img src={`../../images/${image}`} alt="" className="mx-auto" />
    </div>
  );
};

export default DetallesArtista;
