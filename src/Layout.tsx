import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views";
import { Navbar } from "./components";
import injectContext from "./store/Context";

const Layout: FunctionComponent = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
