import React from "react";
import Heading from "../Containers/Header/heading";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Heading />
      </div>
    </BrowserRouter>
  );
}
