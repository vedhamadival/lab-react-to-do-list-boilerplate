import { Component } from 'react'
import './App.css'
import Input from './components/input'
import List  from './components/List'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       value: "",
       data:[]
    }
  }
  
  handleChange =(text) =>{
    this.setState({value:text})
  }

  handlesubmit = () => {
    //a simple if condition here for the edge case.
    if(this.state.value!==null && this.state.value!==""){
      this.state.data.push(this.state.value)
      console.log(this.state.data)
      this.setState({value:""})
    }

  }

  handleDelete = (index) => {
    this.state.data.splice(index,1)
    this.setState({data:this.state.data})
  }

  handleUpdate =(index)=>{
    //a simple if condition here for the edge case.
    const data =  prompt("Enter the new text")
    if(data!==null && data!==""){
      this.state.data[index] = data
      this.setState({data:this.state.data})
    }

  }

  render() {
    return (
      <>
      {/* <div id="input">
      <input type="text" placeholder='Enter Text' value={this.state.value} onChange={(e) => {this.setState({value:e.target.value},() => console.log(this.state.value))}}/>
      <button onClick={this.handlesubmit}>Create</button>
      </div> */}

      <Input inputValue={this.state.value} handlesubmit={this.handlesubmit} handleChange={this.handleChange}/>

    <div id='text'>
      <h1>{this.state.value}</h1>
    </div>


    {/* <div id='list'>
      {
        this.state.data.map((el,index)=>{
          return <div key={index}>
            <h2>{el}</h2>
            <button onClick={() => this.handleDelete(index)}>Delete</button>
            <button onClick={() => this.handleUpdate(index)}>Update</button>
          </div>
        })
      }
    </div> */}

    <List data={this.state.data} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </>
    )
  }
}

export default App
