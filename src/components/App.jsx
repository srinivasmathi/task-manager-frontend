
import React from 'react';
import {BrowserRouter,Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <>
      <><BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
