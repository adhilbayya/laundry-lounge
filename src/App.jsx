import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
