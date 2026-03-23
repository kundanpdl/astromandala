import { useState } from "react";
import Card from "./components/card.jsx";
import ContactForm from "./components/contactForm.jsx";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import "./index.css";
import BgImage from "./assets/galaxy.png";
import Testimonials from "./components/testimonials.jsx";
import SocialProof from "./components/socialProof.jsx";
import Hero2 from "./components/hero2.jsx";
import WhyAstro from "./components/whyastro.jsx";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />

        <Hero />

        <Card />

        <Hero2 />

        <SocialProof />

        <Testimonials />

        <WhyAstro />

        <ContactForm />

        <Footer />
      </div>
    </div>
  );
};

export default App;
