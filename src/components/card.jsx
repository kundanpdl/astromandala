import React from "react";
import ScrollFade from "../effects/scrollFade";
import TextFadeIn from "../effects/textFadeIn";
import BgImage from "../assets/galaxy.png";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Card = () => {
  return (
    <div className="grid grid-cols-1 pt-10 bg-base-100/20 pb-15">
      <TextFadeIn>
        <div className="flex flex-col justify-center gap-3 text-center md:text-left pt-24 md:p-0 pb-10 ">
          <h2 className="text-yellow-700 text-3xl lg:text-6xl font-semibold text-center">
            Our Services
          </h2>
          <h3 className="text-purple-900 text-xl text-center mb-10">
            We believe in unrestricted domain for queries, you can ask just
            about anything.
          </h3>
        </div>
      </TextFadeIn>
      <ScrollFade>
        <div className="flex flex-col justify-center md:flex-row gap-4">
          {/* Card 3 */}
          <div className="card bg-base-100/40 min-h-125 w-screen shadow-sm transition-transform duration-500 ease-in-out hover:scale-102">
            {/* <figure className="px-15 pt-5 mt-5">
              <img src={Planets} alt="planets" className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center mt-5">
              <h1 className="card-title text-4xl text-yellow-700">
                Birth Chart Creation
              </h1>
              <ul className="text-purple-900 text-lg mt-15">
                <li>&#8226; Birth Chart Digital Copy</li>
                <li>&#8226; Astrocartography Map</li>
              </ul>
              <h2 className="text text-3xl mt-17 text-purple-900">$25 USD </h2>
              <div className="card-actions pt-15">
                <a
                  className="btn text-yellow-700 bg-white/50"
                  href="https://buy.stripe.com/00weVc4HKgA00QE33l7g401"
                  target="_blank"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="card bg-base-100/40 min-h-125 w-screen shadow-sm transition-transform duration-500 ease-in-out hover:scale-102">
            {/* <figure className="px-15 pt-5 mt-5">
              <img src={Planets} alt="planets" className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center mt-5">
              <h1 className="card-title text-4xl text-yellow-700">
                Audio Recording Consultation
              </h1>
              <ul className="text-lg mt-15 text-purple-900">
                <li> &#8226; 10 Minute Long Audio Recording</li>
                <li>&#8226; Birth Chart Digital Copy</li>
                <li>&#8226; Astrocartography Map</li>
              </ul>
              <h2 className="text text-3xl mt-10 text-purple-900">$55 USD </h2>
              <div className="card-actions pt-15">
                <a
                  className="btn text-yellow-700 bg-white/50"
                  href="https://buy.stripe.com/3cI14m5LO0B2czm9rJ7g402"
                  target="_blank"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100/40 min-h-125 w-screen shadow-sm transition-transform duration-500 ease-in-out hover:scale-102">
            {/* <figure className="px-15 pt-5 mt-5">
              <img src={Planets} alt="planets" className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center mt-5">
              <h1 className="card-title text-3xl text-yellow-700">
                Video Consultation
                <br />
                30 Minutes
              </h1>
              <ul className="text-lg mt-15 text-purple-900">
                <li> &#8226; Video Recording Of The Session</li>
                <li>&#8226; Birth Chart Digital Copy</li>
                <li>&#8226; Astrocartography Map</li>
              </ul>
              <h2 className="text text-3xl mt-12 text-purple-900">$75 USD </h2>
              <div className="card-actions pt-15">
                <a
                  className="btn text-yellow-700 bg-white/50"
                  href="https://zcal.co/astro-mandala/30min"
                  target="_blank"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
};

export default Card;
