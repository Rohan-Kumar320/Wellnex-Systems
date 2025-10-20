// import { useState, useCallback } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Hero from "./components/sections/Hero";
// import About from "./components/sections/About";
// import Features from "./components/sections/Features";
// import AppsShowcase from "./components/sections/AppsShowcase";
// import Testimonials from "./components/sections/Testimonials";
// import ComingSoon from "./components/sections/ComingSoon";
// import Waitlist from "./components/sections/Waitlist";
// import Footer from "./components/layout/Footer";
// import Preloader from "./components/ui/Preloader";

// function wait(ms) {
//   return new Promise((res) => setTimeout(res, ms));
// }

// function RouterWrapper() {
//   const [preVisible, setPreVisible] = useState(false);
//   const navigate = useNavigate();

//   const navigateWithPreload = useCallback(
//     async (to, opts = {}) => {
//       if (!to) return;
//       const showMs = typeof opts.showMs === "number" ? opts.showMs : 120;
//       const revealMs = typeof opts.revealMs === "number" ? opts.revealMs : 420;

//       console.debug("[Router] navigateWithPreload ->", to, { showMs, revealMs });

//       setPreVisible(true);
//       await wait(showMs);

//       navigate(to);
//       await wait(revealMs);

//       setPreVisible(false);
//     },
//     [navigate]
//   );

//   return (
//     <>
//       <Preloader visible={preVisible} onExited={() => { /* optional cleanup */ }} />
//       <Navbar navigateWithPreload={navigateWithPreload} />
//       <Routes>
//         <Route path="/" element={<Hero navigateWithPreload={navigateWithPreload} />} />
//         <Route path="/about" element={<About navigateWithPreload={navigateWithPreload} />} />
//         <Route path="/features" element={<Features navigateWithPreload={navigateWithPreload} />} />
//         <Route path="/apps" element={<AppsShowcase navigateWithPreload={navigateWithPreload} />} />
//         <Route path="/testimonials" element={<Testimonials navigateWithPreload={navigateWithPreload} />} />
//         <Route path="/coming-soon" element={<ComingSoon navigateWithPreload={navigateWithPreload} />} />
//         <Route path="/waitlist" element={<Waitlist navigateWithPreload={navigateWithPreload} />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <RouterWrapper />
//     </BrowserRouter>
//   );
// }

import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import AppsShowcase from "./components/sections/AppsShowcase";
import Testimonials from "./components/sections/Testimonials";
import ComingSoon from "./components/sections/ComingSoon";
import Waitlist from "./components/sections/Waitlist";
import Footer from "./components/layout/Footer";
import Preloader from "./components/ui/Preloader";
import Contact from "./components/sections/Contact";

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function RouterWrapper() {
  const [preVisible, setPreVisible] = useState(false);
  const navigate = useNavigate();

  const navigateWithPreload = useCallback(
    async (to, opts = {}) => {
      if (!to) return;
      const showMs = typeof opts.showMs === "number" ? opts.showMs : 120;
      const revealMs = typeof opts.revealMs === "number" ? opts.revealMs : 420;

      setPreVisible(true);
      await wait(showMs);

      navigate(to);
      await wait(revealMs);

      // signal pages that preloader is about to exit — pages should start their brand reveal on this event
      window.dispatchEvent(new CustomEvent("preloader:exit-start", { detail: { route: to } }));

      // now hide the preloader which will run its exit animation
      setPreVisible(false);
    },
    [navigate]
  );

  return (
    <>
      <Preloader visible={preVisible} onExited={() => {}} />
      <Navbar navigateWithPreload={navigateWithPreload} />
      <Routes>
        <Route path="/" element={<Hero navigateWithPreload={navigateWithPreload} />} />
        <Route path="/about" element={<About navigateWithPreload={navigateWithPreload} />} />
        <Route path="/features" element={<Features navigateWithPreload={navigateWithPreload} />} />
        <Route path="/apps" element={<AppsShowcase navigateWithPreload={navigateWithPreload} />} />
        <Route path="/testimonials" element={<Testimonials navigateWithPreload={navigateWithPreload} />} />
        <Route path="/coming-soon" element={<ComingSoon navigateWithPreload={navigateWithPreload} />} />
        <Route path="/waitlist" element={<Waitlist navigateWithPreload={navigateWithPreload} />} />
        <Route path="/contact" element={<Contact navigateWithPreload={navigateWithPreload} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  );
}

