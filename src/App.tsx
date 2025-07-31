import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderRounded from './components/HeaderRounded';
// import Footer from './components/Footer';
// import FooterRounded from './components/FooterRounded';
import Home from './pages/Home';
import HomeRounded from './pages/HomeRounded';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import './i18n';

function App() {
  const [isSharpTheme, setIsSharpTheme] = useState(true);

  const toggleTheme = () => {
    setIsSharpTheme(!isSharpTheme);
  };

  return (
    <Router>
      <div className="App">
        {isSharpTheme ? <Header /> : <HeaderRounded />}
        <Routes>
          <Route path="/" element={isSharpTheme ? <Home /> : <HomeRounded />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* {isSharpTheme ? <Footer /> : <FooterRounded />} */}
        <ThemeSwitcher isSharp={isSharpTheme} onToggle={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;