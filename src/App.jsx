import { useEffect, useState } from "react";
import Button from "./Button";
import Screen from "./Screen";
import ThemeMode from "./ThemeMode";



const App = () => {
  const [value, setValue] = useState(null);
  const [calculation, setCalculation] = useState([]);


 

  // Effect to handle keyboard actions
  useEffect(() => {
    const keyboardAction = (e) => {
      // console.log(e, e.keyCode);
      if (e.key === "Backspace") {
        setCalculation((prevCalculation) => prevCalculation.slice(0, -1));
        setValue(null);
      } else if (e.key === "Delete") {
        setCalculation([]);
        setValue(null);
      } else if (e.keyCode >= 96 && e.keyCode <= 111 && e.keyCode !== 108) {
        setCalculation((prevCalculation) => [...prevCalculation, e.key]);
      } else if(e.keyCode == 57 || e.keyCode == 48){
        setCalculation((prevCalculation) => [...prevCalculation, e.key]);
      } else if(e.key === "Enter"){
        setValue(eval(calculation.join('')))
      }else {
        console.log(`Unhandled key: ${e.key}`);
      }
    };

    document.body.addEventListener("keyup", keyboardAction);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("keyup", keyboardAction);
    };
  }, [calculation]);

  const inputValue = (e) => {
    if (e.target.tagName === "BUTTON") {
      switch (e.target.innerText) {
        case "AC":
          setCalculation([]);
          setValue(null);
          break;

        case "CE":
          setCalculation(calculation.slice(0, -1));
          setValue(null);
          break;

        case "=":
          setValue(eval(calculation.join("")));
          break;

        default:
          setCalculation([...calculation, e.target.innerText]);
      }
    }
  };

  return (
    <>
      <section id="bodyChange" className="bodyChange relative bg-light-theme-color h-[100vh] flex place-items-center p-10">
        <div className="absolute text-[2.5rem] sm:text-[3rem] top-[4%] right-[4%] cursor-pointer">
          <ThemeMode />
        </div>
        <div className="containerChange bg-dark-container-color p-[1rem] w-[60vw] md:w-[35vw] lg:w-[30%] xl:w-[25%] m-auto">
          <Screen value={value} calculation={calculation} />

          <div
            className="grid grid-cols-4 text-[1.5rem] sm:text-[2rem] font-bold gap-4 text-light-text-color"
            onClick={inputValue}>
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
