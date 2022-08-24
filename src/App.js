import "./App.css";
import AboutUs from "./components/AboutUs";
import { Card } from "./components/Card";
import { Carousel } from "./components/Carousel";
import Header from "./components/Header";
import How from "./components/How";
import Navbar from "./components/Navbar";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <Card /> */}
      <Carousel />
      <AboutUs />
      <WhyUs />
      <How />
    </div>
  );
}

export default App;
