import React from "react";
import Ganesha from "../assets/ganesha.png";

const WhyAstro = () => {
  return (
    <div className="hero bg-base-100/20 drop-shadow-xl w-screen rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Ganesha} className=" rounded-lg shadow-xl px-5 pt-10" />
        <div className="flex flex-col w-screen items-center px-5">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center pt-10 text-yellow-800">
            Vedic Astrology, A Brief Discussion
          </h1>
          <p className="text-purple-900 text-xl mt-5">
            Astrology offers a unique way to reflect on life, helping us better
            understand ourselves and the world around us. It can be both
            insightful and inspiring, depending on how you choose to approach
            it. Some of the domains of life that most people like to dig into
            are:
          </p>
          <ul className="text-yellow-900 mt-5 mb-5 text-center">
            <li>✓ Self-awareness </li>
            <li>✓ Personal growth</li>
            <li>✓ Relationship insights</li>
            <li>✓ Compatibility guidance</li>
            <li>✓ Decision support</li>
            <li>✓ Emotional clarity</li>
            <li>✓ Mental balance</li>
            <li>✓ Spiritual connection</li>
            <li>✓ Life patterns</li>
            <li>✓ Inner strengths</li>
            <li>✓ Cosmic perspective</li>
            <li>✓ Fun exploration</li>
          </ul>
          <p className="text-purple-900 text-xl">
            Whether you view astrology as a meaningful guide or simply an
            interesting perspective, it can add depth, clarity, and curiosity to
            your everyday life. However, it is imperative that one should not
            view it simply as a tool for future prediction. It is, for the most
            part, used to see what is potentially coming towards you head-first
            in life. Then you make necessary arrangements to deal with them with
            your efforts, or in fancy term: your Karma. Remember, your planets
            are locked in on your chart, they cannot be changed. In that sense,
            it is YOU we work on, always!
          </p>
          <a
            className="btn  text-yellow-700 bg-white/50 mt-15 h-15 mx-auto"
            href="https://zcal.co/astro-mandala/30min"
            target="_blank"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyAstro;
