import { useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CompanyName from "./components/CompanyName.jsx";

function App() {

  return (

    // remove h-[100vh] when scrolling needed, will cause issues
    <div className="bg-[url('../assets/bg.webp')] bg-fixed bg-cover bg-[center_top_9px]  text-black">
      <div className="bg-nav-background h-full flex flex-col justify-center" >
        <CompanyName  />
        <Nav  />
        <Hero  />
        <About  />
        <Services  />
        <Contact  />
        <Testimonials  />
        <Footer  />
      </div>
    </div>
  )
}

export default App
