import "./App.css";
import Header from "./compoents/Header";
import Hero from "./compoents/Hero";
import Slider from "./compoents/Slider";
import Virtual from "./compoents/Virtual";
import Products from "./compoents/Products";
import Testimonials from "./compoents/Testimonials";
import Footer1 from "./compoents/Footer1";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer1 />
    </div>
  );
}

export default App;
