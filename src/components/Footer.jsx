import React from "react";
import fb from "../../public/img/fb.png";
import youtube from "../../public/img/youtube.png";
import linkedin from "../../public/img/linkedin.png";
import twitter from "../../public/img/twitter.png";
import instagram from "../../public/img/instagram.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 max-sm:p-8">
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:mx-28">
        <div>
          <h3 className="text-xl font-bold mb-4">Family Lawyers</h3>
          <p>#4 3801 East Florida Avenue</p>
          <p>Suite 102</p>
          <p>Denver, CO 80210</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>Phone: 303-225-3343</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul>
            <li>Home</li>
            <li>Family Law</li>
            <li>Reviews</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-between">
            <Image src={fb} width={40} height={40} alt="fb icon" />
            <Image src={youtube} width={40} height={40} alt="fb icon" />
            <Image src={linkedin} width={40} height={40} alt="fb icon" />
            <Image src={twitter} width={40} height={40} alt="fb icon" />
            <Image src={instagram} width={40} height={40} alt="fb icon" />
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 All Rights Reserved.</p>
        {/* Add social media icons or links here */}
      </div>
    </footer>
  );
};

export default Footer;
