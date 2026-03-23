import React from "react";
import HeroImg from "../assets/moon_galaxy.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import TextSlideInLeft from "../effects/textSlideInLeft";
import SlideInRight from "../effects/slideInRight";

const Hero2 = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 mt-25 mb-0">
        <TextSlideInLeft>
          {/* image section */}
          <div className="flex flex-col justify-center xx-15">
            <img
              src={HeroImg}
              alt=""
              className="img-shadow mx-auto opacity-85"
            />
          </div>
        </TextSlideInLeft>
        <SlideInRight>
          {/* text section */}
          <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
            <h2 className="text-yellow-700 lg:text-4xl font-semibold">
              Why Choose Us?
            </h2>
            <ul className="text-purple-900">
              <li>
                ¥ Unveil Your Cosmic Blueprint: Your natal chart is a sacred map
                of your soul’s design.
              </li>
              <li>
                ¥ Navigate Life’s Cycles with Grace: Transits, progressions, and
                lunar phases bring constant change.
              </li>
              <li>
                ¥ Cultivate Inner Alignment & Confidence: Astrology reveals the
                patterns behind your thoughts, emotions, and behaviors.
              </li>
              <li>
                ¥ Co-Create Your Future with Intention The stars offer insight,
                not fixed fate.
              </li>
            </ul>
            <p className="text-purple-900 font-semibold">
              The stars offer insight, not fixed fate. Armed with cosmic
              awareness, you can make aligned decisions, set soul-honoring
              intentions, and actively shape a life that resonates with your
              highest potential.
            </p>
            <div className="flex gap-4 items-center md:justify-start justify-center">
              <div className="btn hover:scale-105 duration-200">
                <TiSocialFacebook />
              </div>
              <div className="btn text-black hover:scale-105 duration-200">
                <SlSocialInstagram />
              </div>
              <div className="btn text-black hover:scale-105 duration-200">
                <SiTiktok />
              </div>
            </div>
          </div>
        </SlideInRight>
      </div>
    </div>
  );
};

export default Hero2;
