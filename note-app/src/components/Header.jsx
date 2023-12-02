import React from "react";
export default function Header(props){
    return(
        <div className="header">
            <h1>myNote</h1>
            <div className="toggler">
                <div className="light-text">Light</div>
                <div className="toggler-slider"
                onClick={props.setMode}>
                    <div className="toggler-circle"></div>
                </div>
                <div className="dark-text">Dark</div>
            </div>
        </div>
    );
}