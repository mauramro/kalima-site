import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <><h3 className="text-center text-white text-4xl py-5">Acerca de nosotros</h3>
    <div className="grid sm:grid-cols-1 sm:gap-1 lg:grid-cols-2 lg:gap-2">
          <div>
              <img
                  src="/images/person-outdoor-night-park.jpg"
                  alt="Banner image"
                  className="mx-auto" />

          </div>
          <div className="text-white text-justify">
              <h3 className="p-3">¿Que es Kalima?</h3>

              <p className="p-3">Kalima es una Iniciativa con influencias costarricenses y canadienses con el propósito de Promover a los Artistas Nacionales, </p>

              <p className="p-3">Nosotros al ser amantes de la música deseamos compartir la diversidad del arte plasmada en canciones a manos de artistas emergentes en diferentes géneros. En esta Página puedes encontrar diferentes y géneros, con canciones inéditas con nuestra paleta de artistas invitados.</p>

              <p className="p-3">Junto a Estudio Bits nos complace empoderar a todas esas personas en los que en su corazón vive la música, dándoles una opción para darse a conocer respetando los mas finos estadales de la producción y promoción en las plataformas digitales que ahora son la principal forma de entretenimiento.</p>
          </div>

          <div>
          <Link href="/">
            <button className="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ">
              Regresar
            </button>
         </Link>

          </div>
      </div></>
  );
};

export default AboutUs;
