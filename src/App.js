import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';

const useEmojiCursor = (defaultEmoji = "🍥", hoverEmoji = "⭐️") => {
  const [currentEmoji, setCurrentEmoji] = useState(defaultEmoji);

  useEffect(() => {
    const createCursorStyle = (emoji) => {
      return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${emoji}</text></svg>"), auto`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCurrentEmoji(hoverEmoji);
      } else {
        setCurrentEmoji(defaultEmoji);
      }
    };

    document.body.style.cursor = createCursorStyle(currentEmoji);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "default";
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [currentEmoji, defaultEmoji, hoverEmoji]);
};

function App() {
  useEmojiCursor("🍥", "⭐️");
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;