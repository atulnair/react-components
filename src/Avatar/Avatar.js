import React from 'react';

function Avatar(props) {

    let divStyles = {
        height: props.ui.size + "px",
        width: props.ui.size + "px",
        borderRadius: props.ui.borderRadius + "%",
        backgroundColor: props.ui.color.backgroundColor,
        color: props.ui.color.textColor,
        fontSize: (props.ui.size/2) + 5 + "px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: props.ui.position,
        left: props.ui.left + "%"
    }

    let imgStyles = {
        height: props.ui.size + "px",
        width: props.ui.size + "px",
        borderRadius: props.ui.borderRadius + "%",
        opacity: props.ui.imgOpacity,
    }

    if(props.ui.imgSrc === undefined || props.ui.imgSrc === "") {
        return (
            <div style = {divStyles} >
                {props.ui.letter===undefined || props.ui.letter==="" ? "A": props.ui.letter}
            </div>
        );
    }
    else {
        return (
            <div style = {divStyles} >
                <img src={props.ui.imgSrc} alt = "" style = {imgStyles} />
            </div>
        );
    }
}

export default Avatar;
