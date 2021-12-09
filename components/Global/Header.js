import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    image: "/images/instagram-logo.png",
    alt: "Instagram logo",
    href: "https://www.instagram.com/kalimarecords/",
  },
  {
    image: "/images/instagram-logo.png",
    alt: "Facebook logo",
    href: "https://www.facebook.com/kalimarecordsestudio/",
  },
  {
    image: "/images/instagram-logo.png",
    alt: "Youtube logo",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    image: "/images/instagram-logo.png",
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
            <li key={index} className="ml-2 first:ml-0">
              <a href={social.href} target="_blank">
                <img src={social.image} alt={social.alt} className="h-10" />
              </a>
            </li>
          ))}
        </ul>
        <Link href="/">
          <img
            src="/images/kalima-logo.jpg"
            alt="Kalima logo"
            className="h-20"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
