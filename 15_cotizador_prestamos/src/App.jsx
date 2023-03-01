import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [ cantidad, setCantidad ] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;


  function handleChange(e) {
    setCantidad(Number(e.target.value));
  }

  
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
    </div>
  )
}

export default App
