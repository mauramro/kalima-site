import React from "react";
import Link from "next/link";
import classes from "../styles/main.module.css";

const Artista = ({ image, alt, name, id }) => {
  return (
    <div className={`w-60 ml-10 ${classes.customFlex}`}>
      <Link href={`/artista/${id}`}>
        <div className="mx-0 text-center bg-blue-300 rounded-lg py-5 px-4">
          <img src={`./images/${image}`} alt={alt} className="h-36 mb-3" />
          <p className="">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Artista;
