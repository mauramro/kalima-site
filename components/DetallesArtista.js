import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faInstagram,
    alt: "Instagram logo",
    href: "https://www.instagram.com/kalimarecords/",
  },
  {
    icon: faFacebook,
    alt: "Facebook logo",
    href: "https://www.facebook.com/kalimarecordsestudio/",
  },
  {
    icon: faYoutube,
    alt: "Youtube logo",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    icon: faSpotify,
    alt: "Spotify logo",
    href: "https://open.spotify.com/artist/3oF4g2Xyt3k5LZZsynOMRi",
  },
];


const DetallesArtista = ({ name, image, desc }) => {
  return (
    <div className="mx-auto text-center text-white py-5 bg-black px-5">
      <h3 className="mb-4">{name}</h3>
      <img src={`../../images/${image}`} desc="" alt="" className="mx-auto" />
      <p className="text-sm">{desc}</p>
      <Link href="/">
        <button className="mt-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ">
          Regresar
        </button>
      </Link>

      <div class="content-center">
        <ul className="flex flex-row items-center">
          {socialLinks.map((social, index) => (
            <li key={index} className="ml-4 first:ml-0">
              <a href={social.href} target="_blank" className="block">
                <FontAwesomeIcon icon={social.icon} className="h-10" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      

    </div>

    
  );
};

export default DetallesArtista;
