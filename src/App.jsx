import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/services";
import Testimonials from "./components/Testimonials";
import CompanyName from "./components/CompanyName";

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
