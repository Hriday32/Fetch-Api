import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Comonent/Page/Home";
import View from "./Comonent/Page/Staff/View";
import Edit from "./Comonent/Page/Staff/Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
