import { useState } from "react";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Nav from "./components/nav.jsx";
import Services from "./components/services.jsx";
import Testimonials from "./components/testimonials.jsx";
import CompanyName from "./components/company-name.jsx";

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
