import { useState } from "react";
import "./App.css";
import { Control } from "./components/Control/Control";
import { Header } from "./components/Header/Header";
import { Meta } from "./components/Meta/Meta";

function App() {
  const [step, setStep] = useState(2);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="left">
          <p className="description">
            Collection of lighting is inspired by the geometric works of the
            great Suprematist artists Kissitzky and Kazimir Malevich.
            <br />
            <br />
            Suprematism is a modernist movement in the art of the early
            twentieth century, focused on the basic geometric forms, such as
            circles, squares, lines and rectangles. The geometric structure of
            the lamps will always look like a small art objects in your house.
          </p>
          <div className="controls">
            <Meta step={step} />
            <Control step={step} setStep={setStep} setIsDark={setIsDark} />
          </div>
        </div>
        <div
          className="right"
          style={
            !isDark ?
            {backgroundImage: "url('/images/Mask-group.png')"} :
            {backgroundImage: "url('/images/Mask-group-dark.png')"}
          }
        >
          {/* {step === 1 && (
            <img
              src={`/images/Lamp-1.png`}
              alt="lamp"
              className={step === 1 ? "active" : ""}
            />
          )}
          {step === 2 && (
            <img
              src={`/images/Lamp-2.png`}
              alt="lamp"
              className={step === 2 ? "active" : ""}
            />
          )}
          {step === 3 && (
            <img
              src={`/images/Lamp-3.png`}
              alt="lamp"
              className={step === 3 ? "active" : ""}
            />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
