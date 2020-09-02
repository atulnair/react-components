import React from 'react';
import Avatar from './Avatar';

function AvatarGroup(props) {

    const getChild = React.Children.map(props.children,(child,index) => {
        const styles = {...child.props.ui,position: "absolute",left:index*3};

        const extra = {
            size: child.props.ui.size,
            borderRadius: child.props.ui.borderRadius,
            color: { backgroundColor: "gray",textColor: "white"},
            imgOpacity: 1,
            letter:"+1",
            position:"absolute",
            left:props.max*3
        }

        if (props.max === React.Children.count(props.children)) {
            return React.cloneElement(child, {
                ui: styles
                }
            )
        }
        else if (props.max < React.Children.count(props.children)) {
            while(index<props.max) {
                return React.cloneElement(child, {
                    ui: styles
                    }
                )
            }
            return (<Avatar ui = {extra}/>)
        }
    })

    return (
        <div style = {{ display:"flex", flexDirection:"row" }}>
            {getChild}
        </div>
    )
}

export default AvatarGroup;
