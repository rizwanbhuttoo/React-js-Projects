import React from "react";
import { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("");

  const bluecolor = () => {
    setColor("bluecolor");
  };

  const graycolor = () => {
    setColor("graycolor");
  };

  const greencolor = () => {
    setColor("greencolor");
  };

  const redcolor = () => {
    setColor("redcolor");
  };

  const yellowcolor = () => {
    setColor("yellowcolor");
  };

  return (
    <div>
      <div className={`screen ${color}`}>
        <div className="container text-center">
          <div className="buttons ">
            <button className="btn btn-primary m-2" onClick={bluecolor}>
              Blue
            </button>
            <button className="btn btn-secondary m-2" onClick={graycolor}>
              Gray
            </button>
            <button className="btn btn-success m-2" onClick={greencolor}>
              Green
            </button>
            <button className="btn btn-danger m-2" onClick={redcolor}>
              Red
            </button>
            <button className="btn btn-warning m-2" onClick={yellowcolor}>
              Yellow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
