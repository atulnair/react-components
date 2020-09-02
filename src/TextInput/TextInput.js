import React from "react";

function TextInput(props) {
  const styles = {
    height: props.ui.size.h + "px",
    width: props.ui.size.w + "px",
    color: props.ui.color.txt,
    backgroundColor: props.ui.color.bg,
    border: props.ui.border.w + "px " + props.ui.border.style + " " + props.ui.border.color,
    borderRadius: props.ui.border.r + "%",
    margin: props.ui.margin.t + "px " + props.ui.margin.l + "px",
    fontFamily: props.ui.font.fam,
    fontSize: props.ui.font.size + "px",
  };

  return (
    <input
      type={props.ui.type}
      placeholder={props.ui.placeholder}
      style={styles}
    />
  );
}

export default TextInput;
