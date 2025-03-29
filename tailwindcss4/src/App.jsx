import { Suspense, lazy } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Wrapper from "./component/wrapper";
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Achievement = lazy(() => import("./component/Achievement"));
const Skill = lazy(() => import("./component/Skill"));
const Contact = lazy(() => import("./component/Contact"));
const Projects = lazy(() => import("./component/Projects"));



const App = () => {
  return (
   <Wrapper>
      <Header />
      <Suspense fallback={<div className="text-center">Loading...</div>}>
  <div id="home"><Home /></div>
  <div id="about"><About /></div>
  <div id="achievement"><Achievement /></div>
  <div id="skill"><Skill /></div>
  <div id="contact"><Contact /></div>
  <div id="project" className="overflow-hidden"><Projects /></div>
</Suspense>

     
      
      <Footer />
    </Wrapper>
  );
};

export default App;
