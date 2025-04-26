import { useGSAP } from "@gsap/react";
import GSAPRender from "./components/GSAPRender";
import gsap from "gsap"

const App = () => {
  gsap.registerPlugin(useGSAP)
  
  return (
    <div className="text-white">
      <div className="text-center text-3xl text-green-500 py-5 bg-gray-600">
        <h2>GSAP + REACT JS</h2>
      </div>
      <div>
        <GSAPRender />
      </div>
    </div>
  );
};

export default App;
