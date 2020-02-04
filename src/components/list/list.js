
import React from "react";
import "./list.css";





// const List =(props) =>(
//   <li  onClick={props.clicked} key={props.key}> 
//     {props.item}
//     <span onClick={props.closed} className="close">
//       &times;
//     </span>
  
//   </li>)

  
//  export default List;

//  //classname={classes.join(' ')};

 class List extends React.Component{
   constructor(props){
     super(props);
   }

   render(){
     return(
      <li  onClick={this.props.toggleCheckedHandler} key={this.props.key}> 
      {this.props.item}
      <span onClick={this.props.closed} className="close">
        &times;
      </span>
    
    </li>
     )
   }
 }
 
 export default List;


