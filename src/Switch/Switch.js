import React from "react";
import "./Switch.css";

const Switch = (props) => {
  let styles = {
    slider: {
      height: props.ui.height + "px",
      width: props.ui.width + "px",
      borderRadius: props.ui.radius + "px",
      background: props.ui.color,
    },
    button: {
      height: (parseInt(props.ui.height) * 40) / 45 + "px",
      width: (parseInt(props.ui.width) * 40) / 100 + "px",
      borderRadius: props.ui.radius + "px",
      background: props.ui.button,
    },
  };

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        style={styles.slider}
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} style={styles.button} />
      </label>
    </>
  );
}

export default Switch;
