import React, { Component } from 'react'

export class IncrementExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    clickhandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    incrementfive = () => {
        this.clickhandler()
        this.clickhandler()
        this.clickhandler()
        this.clickhandler()
        this.clickhandler()
        console.log(this.state.counter)
    }

    render() {
        return (
            <div>
                <h1>Increment example for state demonstration</h1>
                <h1>-----------------------------------------</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.incrementfive()}>Increment</button>
            </div>
        )
    }
}


export default IncrementExample