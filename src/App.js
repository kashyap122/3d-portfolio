import React from 'react';
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Work from "./Components/Work/Work";
import ContactUs from "./Components/ContactUs/ContactUs";
import "./App.css"

const App = () => {
  return (
    <div className='contain'>
      <Home />
      <AboutMe />
      <Work />
      <ContactUs />
    </div>
  )
}

export default App;