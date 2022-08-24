import React, { Component } from 'react'

export class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.greetHandler("Child")}>Click to Greet</button>
            </div>
        )
    }
}

export default ChildComponent