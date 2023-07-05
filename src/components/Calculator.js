import React, { useState } from "react";

const Calculator = () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // looping the number of button
  const [currentValue, setValue] = useState(""); // initialize new number to be inputed
  const [prevalue, setpreValue] = useState(""); // initialize new number to be inputed
  const [operator, setOperator] = useState(null); //selecting operators
  const [decimal, hasDecimal] = useState(false); //selecting operators

  // setting the number when click the button array
  const handleOnclickNumber = (number) => {
    if (currentValue === "" && number !== ".") {
      setValue(number);
    } else if (number === "." && !decimal) {
      setValue(currentValue + ".");
      hasDecimal(true);
    } else if (number !== ".") {
      setValue(currentValue + number);
    }
  };

  //capture all the value together
  const handleOnclickOperator = (operator) => {
    setpreValue(currentValue);
    setOperator(operator);
    setValue("");
    hasDecimal(false);
  };

  // handle all the mathematical function convert the input to number then after total convert it to string
  const handleOnclickTotal = () => {
    const num1 = parseFloat(prevalue);
    const num2 = parseFloat(currentValue);
    let total;

    if (operator === "+") {
      total = num1 + num2;
    } else if (operator === "-") {
      total = num1 - num2;
    } else if (operator === "/") {
      total = num1 / num2;
    } else if (operator === "x") {
      total = num1 * num2;
    }

    if (!isNaN(total)) {
      setValue(total.toString());
    } else {
      return `error`;
    }
  };

  // Display percentage of user input(numbers)
  const handleClickPercentage = (operator) => {
    const num1 = parseFloat(currentValue);
    const num2 = 0.01;
    let perTotal = num1 * num2;
    if (operator === "%") {
      setValue(perTotal.toString());
    }
  };

  // reset the display
  const handleOnclickReset = () => {
    setValue("");
  };

  return (
    <>
      <div className="cal-container">
        <div className="cal-wrapper">
          <div className="cal-item-x text">
            <p className="inpt" placeholder="Input number">
              {currentValue}
            </p>
          </div>
          <button onClick={handleOnclickReset} className="cal-item resets">
            AC
          </button>
          <button
            onClick={() => handleClickPercentage("%")}
            className="cal-item percent"
          >
            %
          </button>

          <button
            onClick={() => handleOnclickNumber(".")}
            className="cal-item poin"
          >
            .
          </button>

          <button
            onClick={() => handleOnclickOperator("/")}
            className="cal-item divide"
          >
            ÷
          </button>

          <div className="cal-item-z array">
            {numberArray.map((number) => (
              <button onClick={() => handleOnclickNumber(number.toString())}>
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleOnclickOperator("x")}
            className="cal-item mult"
          >
            x
          </button>

          <button
            onClick={() => handleOnclickOperator("-")}
            className="cal-item minus"
          >
            -
          </button>
          <button
            onClick={() => handleOnclickOperator("+")}
            className="cal-item plus"
          >
            +
          </button>
          <button className="cal-item jero">0</button>
          <button onClick={handleOnclickTotal} className="cal-item total">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
