import { useState } from "react";

const LayerSelector = ({ name, setName }) => {
    const handleChange = (e) => {
      setName(e.target.value);
    };

  return (
    <div className="flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none h-10">
      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input
          type="radio"
          name="radio"
          value="mapbox://styles/2211101132/cm9g0l6et00je01s73cj927g8"
          className="peer hidden"
          onChange={handleChange}
          checked={setName === "mapbox://styles/2211101132/cm9g0l6et00je01s73cj927g8"}
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
          Manit Layer
        </span>
      </label>

      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input
          type="radio"
          name="radio"
          value="mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g"
          className="peer hidden"
          onChange={handleChange}
          checked={setName === "mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g"}
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
          Custom Layer
        </span>
      </label>

      <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
        <input
          type="radio"
          name="radio"
          value="mapbox://styles/2211101132/cm8ym66c4003e01r47eos8xom"
          className="peer hidden"
          onChange={handleChange}
          checked={setName === "mapbox://styles/2211101132/cm8ym66c4003e01r47eos8xom"}
        />
        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
          Satellite Layer
        </span>
      </label>
    </div>
  );
};

export default LayerSelector;
