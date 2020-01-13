import React  from 'react'
import './App.css';


 class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term: " ",
      items:[ ],
    }
  }
   updateInput(key, value){
     this.setState({
       [key]:value
     })
   }

  onchange= (event) => {
    this.setState({term: event.target.value});
  }
 addItem()  {
   const term={
     id : 1+ Math.random(),
     value: this.state.term.slice(),

   }
   items.push(term);
   const items=[...this.state.items];
   this.setState({term:" ",items});
  } 

 render(){
   return(
    <div>
    <form className="header"  >
    <h2>My Checklist</h2>
    <input value={this.state.term} onChange={this.onchange} className="input" type="text" name="checklist" placeholder="Title..." />
    <span class="addbtn" onClick={this.addItem}>Add</span>
    </form>
   
   </div> 
   );
 }
}
export default App;


 