import React from "react";
import Logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import textFadeIn from "../effects/textFadeIn.jsx";

const Navbar = () => {
  return (
    <textFadeIn>
      <div className=" py-4 lg:py-6">
        <div className="container flex flex-col justify-between items-center">
          {/* logo section */}
          <div className="flex gap-4 items-center">
            <img src={Logo} alt="" className="w-30 rounded-full mr-5 pt" />
          </div>
          <div>
            <p className="text-purple-900 text-2xl lg:text-4xl font-semibold">
              ASTRO
              <span className="text-yellow-600 "> MANDALA</span>
            </p>
          </div>

          {/* Menu section */}
          <div className="flex justify-center items-center gap-10">
            {/* <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">
              Contact
            </li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
          </ul> */}
            {/* logo section2 */}
          </div>
        </div>
      </div>
    </textFadeIn>
  );
};

export default Navbar;
