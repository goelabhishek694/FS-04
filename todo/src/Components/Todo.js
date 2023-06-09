import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super() //-> constructor method of Component is called
        this.state = {
            isHungry:true
        }
    }

    //methods in class

    //render method id called initially and vevrytime when state is changed. 
  render() {
    return (
      <div>Todo</div>
    )
  }
}
