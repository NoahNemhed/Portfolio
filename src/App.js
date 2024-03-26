import Navigation from "./components/Navigation";
import SideLinks from "./components/SideLinks";
import { Outlet } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import Work from "./views/Work";
function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      <SideLinks />
    </>
  );
}

export default App;
