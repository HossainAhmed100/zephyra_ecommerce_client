import { useState } from "react";
import "./NumberCounter.css";
import AnimatingNumber from "./animating-number";


export default function NumberCounter() {
  // -- Up/Down Buttons -- //
  const [counter, setCounter] = useState(500);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <div className="mx-auto mt-12 w-56">
      <AnimatingNumber value={counter} />
      <div className="flex justify-evenly">
        <button className="bg-gray-400 px-4 py-2 rounded-md" onClick={decrease}>
          <span role="img" aria-label="decrease">
            ⬇️
          </span>
        </button>
        <button className="bg-gray-400 px-4 py-2 rounded-md" onClick={increase}>
          <span role="img" aria-label="increase">
            ⬆️
          </span>
        </button>
      </div>
    </div>
  );
}
