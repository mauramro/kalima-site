import React from "react";
import Link from "next/link";
import classes from "../styles/main.module.scss";

const Artista = ({ image, alt, name, id }) => {
  return (
    <div
      className={`w-60 ml-10 first:ml-0 rounded-2xl bg-green-50 hover:bg-green-100 hover:scale-110 transition duration-400 ${classes.customFlex}`}
    >
      <Link href={`/artista/${id}`}>
        <a>
          <div className="mx-0 text-center py-5 px-4 shadow-lg">
            <img
              src={`./images/${image}`}
              alt={alt}
              className="h-36 mb-3 mx-auto"
            />
            <p className="font-medium">{name}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Artista;
