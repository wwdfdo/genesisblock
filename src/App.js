import { Routes, Route } from "react-router-dom";
import "./App.css";
// import AutoSlidingComponent from "./Components/AutoSlidingComponent/AutoSlidingComponent";
import Homepage from "./Components/Homepage/Homepage";
import Layout from "./Components/Layout/Layout";
import Catogories from "./Components/pages/Catogories/Catogories";
import HowItWorks from "./Components/pages/HowItWorks/HowItWorks";
import OurTasks from "./Components/pages/OurTasks/OurTasks";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catogories" element={<Catogories />} />
          <Route path="/ourtasks" element={<OurTasks />} />
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
      </Layout>

      {/* <AutoSlidingComponent /> */}
    </div>
  );
}

export default App;
