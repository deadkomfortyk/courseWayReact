import "./index.css"
import Header from "./Component/Header";
import Courses from "./Component/Courses";
import Features from "./Component/Features";
import Partners from "./Component/Partners";
import Promo from "./Component/Promo";
import Team from "./Component/Team";
import Register from "./Component/Register";
import FooterEnd from "./Component/Footer";
function App() {
  return (
    <><Header />
      <Features/>
       <Courses/>
       <Partners/>
       <Promo/>
       <Team/>
       <Register/>
       <FooterEnd/>
    </>
  );
} 

export default App;
