import React from "react";
import "./list.css";

const list = (props) =>(
    <ul>
     {
        this.props.items.map((item,index) =><li key={index}>{item}</li>)
     }
     </ul>
);
 export default list;
