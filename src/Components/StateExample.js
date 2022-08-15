import React, { Component } from 'react'
//mandatory import statement

class StateExample extends Component {
    constructor(props) {
        //Constructor is where you define state for the object
        //Constructor is the method that is executed as soon as the object is called
        super(props)

        this.state = {
            message: "Welcome to the Webpage"
        }
        //Here we are setting the initial state of the object
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.singleClickHandler} onDoubleClick={() => this.doubleClickHandler}>CLICK THIS BUTTON</button>
            </div>
        )
    }
}

export default StateExample