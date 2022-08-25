import "./App.css";
import AboutUs from "./components/AboutUs";
import { Carousel } from "./components/Carousel";
import Header from "./components/Header";
import How from "./components/How";
import Navbar from "./components/Navbar";
import { Options } from "./components/Options";
import { ProfilePage } from "./components/ProfilePage";
import WhyUs from "./components/WhyUs";
import { Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import { Home } from "./components/Home";

function App() {
  let [profile, setProfile] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path={"/profile"} element={<ProfilePage profile={profile} />} />
        <Route
          path={"/"}
          element={<Home profile={profile} setProfile={setProfile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
