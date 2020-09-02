import React from "react";
import "./slider.css";

function Slider_bubble(props) {
  var type = props.type;
  switch (type) {
    case "slider_hovsidebubble":
      return (
        <div className="range-slider">
          <div>
            <input
              onInput={() => {
                inputfunc("2");
              }}
              id="2"
              className="slider"
              type="range"
              defaultValue={props.ui.defaultvalue}
              min={props.ui.min}
              max={props.ui.max}
            />

            <output id="res2" className="side_bubble" style={props.ui.style_op}>
              {props.ui.defaultvalue}
            </output>
          </div>
          <div className="slider_track" style={props.ui.style_inp}></div>
          <div
            className="slider_thumb"
            id="thumb2"
            style={props.ui.style_thumb}
          ></div>
        </div>
      );
      break;
    case "slider_hovsidebubbleicon":
      return (
        <div className="range-slider">
          <div>
            <input
              onInput={() => {
                inputfunc("3");
              }}
              id="3"
              className="slider"
              type="range"
              defaultValue={props.ui.defaultvalue}
              min={props.ui.min}
              max={props.ui.max}
            />

            <output id="res3" className="side_bubble" style={props.ui.style_op}>
              {props.ui.defaultvalue}
            </output>
          </div>
          <div className="slider_track" style={props.ui.style_inp}></div>
          <div
            className="slider_thumb"
            id="thumb3"
            style={props.ui.style_thumb}
          ></div>
        </div>
      );
      break;
  }
  function inputfunc(id) {
    var result = document.getElementById("res" + id);
    var field1 = document.getElementById(id);
    var mini = field1.min;
    var maxi = field1.max;
    document.getElementById("thumb" + id).style.left =
      ((field1.value - mini) / (maxi - mini)) * 75 + "%";

    result.value = field1.value;
  }
}
export default Slider_bubble;
