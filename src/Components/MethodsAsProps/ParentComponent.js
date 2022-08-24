import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "Parent"
        }
    }

    execmethod = (childname) => {
        alert(`Hi ${this.state.parentName} from ${childname}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.execmethod} />
            </div>
        )
    }
}

export default ParentComponent