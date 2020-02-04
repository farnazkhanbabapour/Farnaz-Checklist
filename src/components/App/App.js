

import React from 'react';
import './App.css';
import List from '../list/list';



 class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term: " ",
      items:[ ],
      ischecked: false,
    }
  }
  toggleCheckedHandler= () =>{
      const doesShow=this.state.ischecked;
      this.setState({ischecked:!doesShow})

  }
  checkedHandler(index){
    //const classes=[];
    if(this.state.ischecked){
      //classes.push("checked");
      const doesShow=this.state.ischecked;
      this.setState({ischecked:!doesShow})
    }
  }
  onchange= (event) => {
    this.setState({term: event.target.value});
  }
  onsubmit= (event) =>{
    event.preventDefault();
    this.setState({
      term:" ",
      items:[...this.state.items,this.state.term],
      
    })
  }
  deletdHandler=(index)=>{
    const items= [...this.state.items];
    items.splice(index,1);
    this.setState({items:items})
  };
 render(){
      
     const delList=this.state.items.map((item,index)=> {
         return (
         <List key={index} item={item} 
           closed={()=>this.deletdHandler(index)} 
           clicked={()=>this.checkedHandler(index)}
          />)
      })
   
     return(
    <div>
      <form className="header" onClick={this.onsubmit} >
        <h2>My Checklist</h2>
        <input value={this.state.term} onChange={this.onchange} className="input" type="text" name="checklist" placeholder="Title..." />
        <span class="addbtn" >Add</span>
      </form>
      {this.state.items}
      <ul>

      {delList}
      </ul>

     </div> 
   );
 }
}

export default App;


 

 
