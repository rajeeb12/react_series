import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("orange");


  return (
    <div
      className="m-0 p-0 h-screen w-scren flex flex-wrap justify-center relative "
      style={{ background: color }}
    >
      <div className="fixed border-2 border-black h-[6vh] w-[80vw] rounded-xl bg-slate-200 absolute bottom-10 flex flex-wrap justify-evenly duration-75">
        <button className= "text-white border-2 border-black rounded-full w-20 m-2 " onClick={()=> setColor("red")}>
          Red
        </button>
        <button className="border-2 border-black rounded-full w-20 m-2 hover:bg-red-200"  onClick={()=> setColor("green")}>
          Green
        </button>

        <button className="border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>
          Blue
        </button>
        <button className="bg-green-900 border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "olive"}} onClick={()=> setColor("olive")}>
          Olive
        </button>

        <button className=" bg-slate-600 border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "grey"}} onClick={()=> setColor("grey")}>
          Gray
        </button>
        <button className=" bg-yellow-400 border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>
          Yellow
        </button>

        <button className=" bg-red-400 border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "pink"}} onClick={()=> setColor("pink")}>
          Pink
        </button>
        <button className=" bg-blue-900 border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "#D580FF"}} onClick={()=> setColor("#D580FF")}>
          Purple
        </button>

        <button className="  border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "#800080 "}} onClick={()=> setColor("#80080")}>
          Lavander
        </button>
        <button className="border-2 border-black rounded-full w-20 m-2 " style={{backgroundColor: "white"}} onClick={()=> setColor("white")}>
          White
        </button>
        <button className="border-2 border-black rounded-full w-20 m-2 text-white "style={{backgroundColor: "black"}} onClick={()=> setColor("black")}>
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
