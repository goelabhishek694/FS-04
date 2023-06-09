import React, { Component } from 'react'
// uuid
export default class Todo extends Component {
    constructor() {
      console.log('constructor is called');
    super(); //-> constructor method of Component is called
      this.state = {
          tasks: [{id:1,value:'Revise JavaScript'}, {id:2,value:'Revise DSA'}],
          currTask:'',
          counter:0
    };
  }

    componentDidMount() {
        console.log('CDM is called');
        let data = setTimeout(() => {
            this.setState({ counter: this.state.counter + 1 })
        },2000)
    }

    componentWillUpdate() {
        console.log('comp will update is called just before state is chnaged');
    }

    componentDidUpdate() {
        console.log('comp did update is called after state is changed ');
    }

  //methods in class
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
          currTask:e.target.value
      })
  }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, value: this.state.currTask }],
            currTask:''
        })
    }
    
    handleDelete = (id) => {
        const newTasks = this.state.tasks.filter(taskObj => taskObj.id != id)
        this.setState({
            tasks:[...newTasks]
        })
    }

  //render method id called initially and everytime when state is changed.
    render() {
      console.log('render is called');
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Your Task"
                onChange={this.handleChange}
                value={this.state.currTask}
        />
            <button onClick={this.addTask}>Add Task</button>
            {/* to render my tasks */}
            {this.state.tasks.map((taskObj,idx) => {
                return (
                  <li className="list" key={taskObj.id}>
                    <p>{`${idx + 1}. ${taskObj.value}`}</p>
                        <button onClick={() => this.handleDelete(taskObj.id)
                        }>
                      Delete
                    </button>
                  </li>
                );
            })}
      </div>
    );
  }
}


// let btn = document.getElementById(add)
// btn.addEventListener('click', addTask);