import React from 'react';
import { useSpring, animated } from 'react-spring';

function SpeedDial(props) {
    const [ toggle, setToggle ] = React.useState(false);

    const topStyles = useSpring({
        position : "absolute",
        backgroundColor: props.ui.color.backgroundColor,
        height: props.ui.size + "px",
        width: props.ui.size + "px",
        borderRadius: props.ui.borderRadius + "%",
        zIndex:30,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        boxShadow: "3px 3px 5px " + props.ui.color.shadowColor,
    })

    const imgStyles = {
        height: props.ui.size-10 + "px",
        width: props.ui.size-10 + "px",
        borderRadius: props.ui.borderRadius + "%",
    }

    const SetStyles = (index) => {
        let margin = "margin" + props.ui.direction;
        const styles = useSpring({
            [margin]: toggle ? index*(props.ui.size + props.ui.size/5) : 0,
            position : "absolute",
            backgroundColor: props.ui.color.backgroundColor,
            height: props.ui.size + "px",
            width: props.ui.size + "px",
            borderRadius: props.ui.borderRadius,
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            boxShadow: "3px 3px 5px " + props.ui.color.shadowColor,
        })

        return (
            styles
        );
    }

    return (
    <div>
        {props.ui.srcs.map((src,index) => (
            index===0 ? (
                <animated.div onClick={ () => { setToggle(animated => !animated)} } style = {topStyles}>
                    <img src = {src} alt={src} style = {imgStyles}/>
                </animated.div>
            ) : (
                <animated.div style = {SetStyles(index)}>
                    {console.log(src)}
                    <img src = {src} alt={src} style = {imgStyles}/>
                </animated.div>
            )
        )
        )}
    </div>
    );
}

export default SpeedDial;
