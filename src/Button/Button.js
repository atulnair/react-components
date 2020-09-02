import React from 'react';


const Button = (props) =>
{

    let styles = {
        height          :props.ui.size.h + 'px',
        width           :props.ui.size.w + 'px',
        color           :props.ui.color.txt,
        backgroundColor :props.ui.color.bg,
        border           :props.ui.border.w +'px ' + props.ui.border.style + ' ' + props.ui.border.color,
        borderRadius    :props.ui.border.r + '%',
        marginLeft      :props.ui.margin.l + 'px',
        marginTop       :props.ui.margin.t + 'px',
        fontSize        :props.ui.content.size + 'em',
        letterSpacing   :props.ui.content.space + 'px'
    }

    return(
        <button className="Button" style = {styles}>{props.ui.content.txt}</button>
    )

}

export default Button;
