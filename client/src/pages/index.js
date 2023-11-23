import React from "react";
import Track from "./track";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** importing our pages */
import Tracks from "./tracks";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<Track />} path="/track/:trackId" />
      </Routes>
    </BrowserRouter>
  );
}
