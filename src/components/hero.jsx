import React from "react";
import HeroImg from "../assets/kundli.png";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import TextSlideInLeft from "../effects/textSlideInLeft";
import SlideInRight from "../effects/slideInRight";

const Hero = () => {
  return (
    <div className="hero drop-shadow-xl w-screen rounded-md">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-150 w-screen">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          {/* <h2 className="text-xl lg:text-2xl font-semibold">Who Am I</h2> */}
          <TextSlideInLeft>
            <h2 className="text-yellow-600 text-xl lg:text-4xl font-semibold">
              Hello, I am Kundan
            </h2>
          </TextSlideInLeft>
          <TextSlideInLeft>
            <p className="text-purple-900 text-2xl">
              I am an experienced astrologer with over 12 years of dedicated
              learning, practice, and a deep passion for the ancient science of
              astrology. My approach is positive, practical, insightful, and
              rooted in a strong belief in karma and its powerful influence on
              our lives, guiding our choices and shaping our path.
            </p>
          </TextSlideInLeft>
          <TextSlideInLeft>
            <div className="flex gap-1 items-center md:justify-start justify-center">
              <div className="btn text-yellow-900 hover:scale-105 duration-200">
                Facebook
                <TiSocialFacebook />
              </div>
              <div className="btn text-yellow-900 hover:scale-105 duration-200">
                Instagram
                <SlSocialInstagram />
              </div>
              <div className="btn text-yellow-900 hover:scale-105 duration-200">
                Tiktok
                <SiTiktok />
              </div>
            </div>
          </TextSlideInLeft>
        </div>

        {/* image section */}
        <SlideInRight>
          <div className="flex flex-col justify-center mt-25">
            <img
              src={HeroImg}
              alt=""
              className="img-shadow  mx-auto opacity-80 "
            />
          </div>
        </SlideInRight>
      </div>
    </div>
  );
};

export default Hero;
