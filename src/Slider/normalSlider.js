import React from "react";
import "./slider.css";

function Slider_normal(props) {
  const type = props.type;
  switch (type) {
    case "normal":
      return (
        <form>
          <input
            type="range"
            defaultValue={props.ui.defaultvalue}
            style={props.ui.style_inp}
            min={props.ui.min}
            max={props.ui.max}
            defaultValue={props.ui.defaultvalue}
          />
        </form>
      );
      break;
    case "normal_w_value":
      return (
        <div className="range-slider">
          <input
            onInput={() => {
              inputfunc();
            }}
            id="1"
            type="range"
            style={props.ui.style_inp}
            min={props.ui.min}
            max={props.ui.max}
            defaultValue={props.ui.defaultvalue}
          />
          <output id="result" style={props.ui.style_op} className="side_bubble">
            {props.ui.defaultvalue}
          </output>
        </div>
      );
      break;
  }
  function inputfunc() {
    var result = document.getElementById("result");
    var field1 = document.getElementById("1");

    result.value = field1.value;
  }
}

export default Slider_normal;
