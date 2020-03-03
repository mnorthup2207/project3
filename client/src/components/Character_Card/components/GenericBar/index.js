import React from 'react';
import "./style.css"

export default function GenericBar(props) {
    const divStyle = {
        width: `${Math.round(props.currentValue / props.total * 100)}%`,
        opacity: `${(props.currentValue > 0) ? ("100%") : ("0%") }`
      };
    // going to need 
    return (
        <div className={`${props.total} barTotal`}>
            <div className={`${props.type} barCurrent`} style={divStyle}></div>
        </div>
    );
}
