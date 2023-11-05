import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import Rewards from "./components/RewardsHistory";
import Profile from "./components/Profile";
import Leader from "./components/LeaderBoard";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/RewardsHistory" element={<Rewards />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/LeaderBoard" element={<Leader />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
