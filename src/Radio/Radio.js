import React from "react";

function Radio(props) {
  const styles = {
    width: props.ui.size.w + "px",
    height: props.ui.size.h + "px",
    borderRadius: props.ui.border.r + "%",
    borderWidth: props.ui.border.width + "px",
    stroke: props.ui.stroke,
    marginLeft: props.ui.margin.l + "px",
    marginTop: props.ui.margin.t + "px",
  };
  return (
    <span style={{ marginLeft: 20 }}>
      <label
        style={{
          fontSize: props.ui.content.size + "em",
          letterSpacing: props.ui.content.space + "px",
        }}
      >
        {props.ui.content.txt}
      </label>
      <input type="radio" style={styles} />
    </span>
  );
}

export default Radio;
