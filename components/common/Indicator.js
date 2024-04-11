import React from "react";
import {MoonLoader} from "react-spinners";

const Indicator = () => {
    return (
        <div style={{paddingLeft: "48%"}}>
            <h5>Loading ...</h5>
            <MoonLoader/>
        </div>
    )
}

export default Indicator;