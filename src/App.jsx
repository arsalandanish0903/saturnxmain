import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import About from "./pages/About/About.jsx";
import Service from "./pages/Services/Service.jsx";
import Technology from "./pages/Technology/Technology.jsx";
import Industries from "./pages/Industries/Industries.jsx";
import Government from "./pages/Government/Government.jsx";
import HealthCareWellBeing from "./pages/HealthCare/HealthCareWellBeing.jsx";
import Construction from "./pages/Construction/Construction.jsx";
import FinancialBanking from "./pages/FinancialBanking/FinancialBanking.jsx";
import Automative from "./pages/Automative/Automative.jsx";
import Ecommerce from "./pages/Ecommerce/Ecommerce.jsx";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="technology" element={<Technology />} />
            <Route path="contact" element={<Contact />} />
            <Route path="industries-overview" element={<Industries />} />
            <Route path="government-&-non-profit" element={<Government />}/>
            <Route path="healthcare-&-well-being" element={<HealthCareWellBeing />}/>
            <Route path="constructions-&-infrastructure" element={<Construction />}/>
            <Route path="financial-&-banking-solutions" element={<FinancialBanking />}/>
            <Route path="automotive-&-mobility-solutions" element={<Automative />}/>
            <Route path="ecommerce" element={<Ecommerce />}/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
