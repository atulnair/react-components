import React from "react";

function Checkbox(props) {
  switch (props.ui.uncheckedIcon) {
    case "":
      return (
        <div>
          <label>
            <input type="checkbox" />
            Click
          </label>
        </div>
      );

    default:
      const properties = {
        icon: props.ui.uncheckedIcon,
        click: false,
        uncheckedIcon: props.ui.uncheckedIcon,
        checkedIcon: props.ui.checkedIcon,
        height: props.ui.height,
        width: props.ui.width,
      };
      let styles = {
        height: props.ui.height + "px",
        width: props.ui.width + "px",
      };
      return (
        <div>
          <span className="icon">
            <img
              id="icon"
              style={styles}
              src={properties.icon}
              onClick={() => {
                checked();
              }}
            />
          </span>
          <label> </label>
        </div>
      );
      function checked() {
        var imag = document.getElementById("icon");
        properties.click = properties.click == true ? false : true;
        console.log(properties.click);
        if (properties.click) {
          imag.src = properties.checkedIcon;
        } else {
          imag.src = properties.uncheckedIcon;
        }
      }
  }
}

export default Checkbox;
