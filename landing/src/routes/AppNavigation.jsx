import { Routes, Route } from "react-router-dom";
import { Contact, Home, About, Portfolio } from "../page/exports";
import { Navbar } from "../page/pages/Navbar";
export const AppNavigation = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <h1>Welcome to React Router! 👜 </h1>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
};
