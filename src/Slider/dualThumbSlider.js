import React from "react";
import "./slider.css";
function Slider_dualThumb(props) {
  var type = props.type;
  switch (type) {
    case "dual_thumb":
      return (
        <div className="total">
          <div className="middle">
            <div className="dual">
              <output id="result11" className="dbub1" style={props.ui.style_op}>
                {props.ui.defaultlt}
              </output>

              <output id="result21" className="dbub2" style={props.ui.style_op}>
                {props.ui.defaultrt}
              </output>
              <input
                onInput={() => {
                  dbub_op1("1");
                }}
                type="range"
                className="dthumb"
                min={props.ui.min}
                max={props.ui.max}
                defaultValue={props.ui.defaultlt}
                id="input_left1"
              />

              <input
                onInput={() => {
                  dbub_op2("1");
                }}
                type="range"
                className="dthumb"
                min={props.ui.min}
                max={props.ui.max}
                defaultValue={props.ui.defaultrt}
                id="input_right1"
              />

              <div className="dslider">
                <div
                  className="track"
                  id="slider"
                  style={props.ui.style_track}
                ></div>
                <div
                  className="range_btw"
                  id="diff1"
                  style={props.ui.style_range}
                ></div>
                <div
                  className="thumb"
                  id="thumb_left1"
                  style={props.ui.style_thumb}
                ></div>
                <div
                  className="thumb"
                  id="thumb_right1"
                  style={props.ui.style_thumb}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "dual_thumbicon":
      return (
        <div className="total">
          <div className="middle">
            <div className="dual">
              <output id="result12" className="dbub1" style={props.ui.style_op}>
                {props.ui.defaultlt}
              </output>

              <output id="result22" className="dbub2" style={props.ui.style_op}>
                {props.ui.defaultrt}
              </output>
              <input
                onInput={() => {
                  dbub_op1("2");
                }}
                type="range"
                className="dthumb"
                min={props.ui.min}
                max={props.ui.max}
                defaultValue={props.ui.defaultlt}
                id="input_left2"
              />

              <input
                onInput={() => {
                  dbub_op2("2");
                }}
                type="range"
                className="dthumb"
                min={props.ui.min}
                max={props.ui.max}
                defaultValue={props.ui.defaultrt}
                id="input_right2"
              />

              <div className="dslider">
                <div
                  className="track"
                  id="slider"
                  style={props.ui.style_track}
                ></div>
                <div
                  className="range_btw"
                  id="diff2"
                  style={props.ui.style_range}
                ></div>
                <div
                  className="thumb"
                  id="thumb_left2"
                  style={props.ui.style_thumbicon}
                ></div>
                <div
                  className="thumb"
                  id="thumb_right2"
                  style={props.ui.style_thumbicon}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
  }
  function dbub_op1(id) {
    var thumb1 = document.getElementById("thumb_left" + id);

    var slide1 = document.getElementById("input_left" + id);
    var slide2 = document.getElementById("input_right" + id);
    var range = document.getElementById("diff" + id);
    var minval = Math.min(slide1.value, slide2.value);

    var mini = slide2.min;

    var maxi = slide1.max;
    thumb1.style.left = ((minval - mini) / maxi - mini) * 100 + "%";
    range.style.left = ((minval - mini) / maxi - mini) * 100 + "%";

    document.getElementById("result1" + id).value = minval;
  }
  function dbub_op2(id) {
    var thumb2 = document.getElementById("thumb_right" + id);
    var slide1 = document.getElementById("input_left" + id);
    var slide2 = document.getElementById("input_right" + id);
    var range = document.getElementById("diff" + id);

    var maxval = Math.max(slide1.value, slide2.value);
    var mini = slide1.min;
    var maxi = slide1.max;
    thumb2.style.right = ((maxi - maxval) / maxi - mini) * 100 + "%";
    range.style.right = ((maxi - maxval) / maxi - mini) * 100 + "%";

    console.log(range.style.right);
    document.getElementById("result2" + id).value = maxval;
  }
}
export default Slider_dualThumb;
