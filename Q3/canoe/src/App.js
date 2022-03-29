import React, { useState } from "react";
import axios from "axios";

const ChoiceForm = () => {
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const choicesArray = [choice1, choice2, choice3];
    let testBool = false;
    for (let i = 0; i < choicesArray.length; i++) {
      if (choicesArray[i].toLowerCase() === "calculus") {
        testBool = true;
      }
    }
    if (testBool) {
      alert("Thank you for submitting!");
      const API = "http://127.0.0.1:1337/addChoices";

      axios
        .post(API, {
          choice1: choice1,
          choice2: choice2,
          choice3: choice3,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setChoice1("");
      setChoice2("");
      setChoice3("");
    } else {
      alert("One of your choices must contain calculus!");
    }
  };

  return (
    <form>
      <label>
        Choice 1:{" "}
        <input
          value={choice1}
          onChange={(event) => setChoice1(event.target.value)}
          type="text"
          name="choice1"
        />
      </label>
      <label>
        Choice 2:{" "}
        <input
          value={choice2}
          onChange={(event) => setChoice2(event.target.value)}
          type="text"
          name="choice2"
        />
      </label>
      <label>
        Choice 3:{" "}
        <input
          value={choice3}
          onChange={(event) => setChoice3(event.target.value)}
          type="text"
          name="choice3"
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ChoiceForm;
