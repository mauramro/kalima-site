import React from "react";
import Link from "next/link";
import classes from "../styles/main.module.scss";

const Artista = ({ image, alt, name, id, desc }) => {
  return (
    <div
      className={`w-60 ml-6 first:ml-0 rounded-2xl rounded-l-none rounded-b-none text-white bg-black hover:bg-gray-900 hover:scale-110 transition duration-400 ${classes.customFlex}`}
    >
      <Link href={`/artista/${id}`}>
        <a>
          <div className="mx-0 py-3 px-2 shadow-lg">
            <img
              src={`./images/${image}`}
              alt={alt}
              desc={desc}
              className="h-48 mb-3 mx-auto"
            />
            <p className="font-medium text-lg text-center">{name}</p>
            {/* <p className="text-sm">{desc}</p> */}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Artista;
