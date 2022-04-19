import React from "react";
import Link from "next/link";




const Banner = () => {
  return (
    <div className="mx-auto text-center text-white py-5 bg-black px-5">
      <h1 className="mx-auto text-center text-white py-5 bg-black px-5">Bievenidos a Kalima Records Online.</h1>
      <h2 className="mx-auto text-center text-white py-5 bg-black px-5">Kalima es una Iniciativa con influencias costarricenses y canadienses con el propósito de Promover a los Artistas Nacionales, </h2>
    
      <Link href="/about" >
        <button className="mt-5 0 border-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ">
          Learn more
        </button>
      </Link>
    
    </div>
  );
};

export default Banner;
