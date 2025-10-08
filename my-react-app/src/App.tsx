import Navigation from "./components/Navigation";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Work from "./sections/Work";
import "./App.css";

const App = () => {
  return (
    <div id="top" className="app">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;