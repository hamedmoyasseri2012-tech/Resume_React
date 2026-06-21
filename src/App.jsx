// import { useState } from "react";
import { useState } from "react";
import Header from "./assets/Component/Header";
import Home from "./Pages/Home";
import TemplatePage from "./Pages/TemplatePage";

const App = () => {
  const [step, setStep] = useState("Home");
  return (
    <div>
      <Header />
      <Home step={step} setStep={setStep} />
      <TemplatePage />
    </div>
  );
};

export default App;
