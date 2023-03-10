import React from "react";
import logo from "/logo.svg";
import restart from "/icons/icon-restart.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-bgColor overflow-x-hidden">
      <div class="max-w-80 md:w-1/2 mx-auto  min-h-screen ">
        <div class="mt-10 p-7 flex justify-between items-center ">
          <div >
            <img src={logo}  alt="logo" />
          </div>
          <div className="bg-gray p-2 w-1/3 text-center rounded-lg">Turn X </div>
          <div className="bg-gray p-2 rounded-lg text-center">
            <img src={restart} className="w-5 h-5"alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center  my-5">
          <div className="rounded-lg bg-gray-100 md:p-6">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <button
                  key={index}
                  className="w-20 h-20 md:w-40 md:h-20 bg-gray-100 shadow-black bg-square rounded-lg shadow-md focus:outline-none"
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div class=" my-10  flex p-3 justify-between items-center text-center ">
          <div className="bg-yellow p-3 rounded-xl w-1/3 shadow-md shadow-black">
            <p>X (YOU)</p>
            <p className="text-center font-bold">0</p>
          </div>
          <div className="bg-gray p-3  shadow-md shadow-black rounded-xl w-1/3 mx-4">
            <p>TIES</p>
            <p className="text-center font-bold">0</p>
          </div>
          <div className="bg-green p-3 shadow-md shadow-black rounded-xl w-1/3">
            <p>O (CPU)</p>
            <p className="text-center font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
