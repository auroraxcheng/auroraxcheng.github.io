import Navbar from "./components/navbar/navbar";
import Intro from "./components/home/intro";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
