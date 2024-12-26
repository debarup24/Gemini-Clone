import React from "react";
import { assets } from "../../assets/assets";

const PromptCards = () => {
  return (
    <div className="flex flex-row w-[900px] m-auto gap-4 p-3">
      <div className="h-52 p-4  relative cursor-pointer bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-cyan-300">
        <p className="text-gray-600 font-semibold mt-1">
          Suggest beautiful places to visit on an upcoming road trip
        </p>
        <img
          className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
          src={assets.compass_icon}
          alt=""
        />
      </div>

      <div className="h-52 p-4  relative cursor-pointer bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-sky-400">
        <p className="text-gray-600 font-semibold mt-1">
          Briefly summarize this concept: startup product market fit
        </p>
        <img
          className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
          src={assets.bulb_icon}
          alt=""
        />
      </div>

      <div className="h-52 p-4  relative cursor-pointer  bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-purple-300">
        <p className="text-gray-600 font-semibold mt-1">
          Tell me the difference between React js and React native
        </p>
        <img
          className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
          src={assets.code_icon}
          alt=""
        />
      </div>

      <div className="h-52 p-4  relative cursor-pointer  bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-red-300">
        <p className="text-gray-600 font-semibold mt-1">
          Brainstorm team bonding activities for our work retreat
        </p>
        <img
          className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
          src={assets.message_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default PromptCards;