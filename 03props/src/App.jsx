// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
import Shoe from "./components/Shoe";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test </h1>
      <br />
      <Card username="Rajeeb Bhowmick" btnName = "Click me" />
      <Card username="Rajeeb Bhowmick" btnName = "Step on me" />
      <Shoe />
    </>
  );
}

export default App;
