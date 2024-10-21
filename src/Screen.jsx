import React, { useEffect, useRef } from "react";

const Screen = ({ value, calculation }) => {
  const valueRef = useRef(null);
  const calculationRef = useRef(null);

  useEffect(() => {
    // Automatically scroll the value element to the end when it updates
    if (valueRef.current) {
      valueRef.current.scrollLeft = valueRef.current.scrollWidth;
    }

    // Automatically scroll the calculation element to the end when it updates
    if (calculationRef.current) {
      calculationRef.current.scrollLeft = calculationRef.current.scrollWidth;
    }
  }, [value, calculation]);

  return (
    <div className="valueColorChange text-light-text-color font-bold pt-[5rem]">
      <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold flex justify-between">
        <span className="text-btn-operator-color">=</span>
        <h1
          ref={valueRef}
          className="w-[90%] text-end overflow-x-scroll whitespace-nowrap"
        >
          {value}
        </h1>
      </div>
      <p
        ref={calculationRef}
        className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] w-[100%] text-end overflow-x-scroll whitespace-nowrap"
      >
        {calculation.join("")}
      </p>
    </div>
  );
};

export default Screen;