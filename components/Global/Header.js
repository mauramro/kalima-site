import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    image: "/images/instagram-logo.png",
    alt: "Instagram logo",
  },
  {
    image: "/images/instagram-logo.png",
    alt: "Facebook logo",
  },
  {
    image: "/images/instagram-logo.png",
    alt: "Youtube logo",
  },
  {
    image: "/images/instagram-logo.png",
    alt: "Spotify logo",
  },
];

const Header = () => {
  return (
    <div className="bg-gray-500 py-5">
      <header className="container px-5 md:px-0 mx-auto flex justify-between">
        <ul className="flex flex-row items-center">
          {socialLinks.map((social, index) => (
            <li key={index} className="ml-2 first:ml-0">
              <a href="#">
                <img src={social.image} alt={social.alt} className="h-10" />
              </a>
            </li>
          ))}
        </ul>
        <Link href="/">
          <img
            src="/images/instagram-logo.png"
            alt="Kalima logo"
            className="h-14"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
