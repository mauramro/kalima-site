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

const Header = () => {
  return (
    <div className="bg-gray-500 py-5">
      <header className="container px-5 md:px-0 mx-auto flex justify-between">
        <ul className="flex flex-row items-center">
          {socialLinks.map((social, index) => (
            <li key={index} className="ml-4 first:ml-0">
              <a href={social.href} target="_blank" className="block">
                <FontAwesomeIcon icon={social.icon} className="h-10" />
              </a>
            </li>
          ))}
        </ul>
        <Link href="/" passHref>
          <a>
            <img
              src="/images/kalima-logo.jpg"
              alt="Kalima logo"
              className="h-20"
            />
          </a>
        </Link>
      </header>
    </div>
  );
};

export default Header;
