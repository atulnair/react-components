import React, { Component } from "react";
function Select(props) {
  const styles = {
    height: props.ui.size.h + "px",
    width: props.ui.size.w + "px",
    color: props.ui.color.val,
    backgroundColor: props.ui.color.bg,
    borderWidth:props.ui.border.w +'px ' + props.ui.border.style + ' ' + props.ui.border.color,
    borderRadius: props.ui.border.r + "%",
    marginLeft: props.ui.margin.l + "px",
    marginTop: props.ui.margin.t + "px",
  };
  return (
    <select style={styles}>
      {props.ui.options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
}
export default Select;
