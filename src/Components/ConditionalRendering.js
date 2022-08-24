import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloggedin: true
            //this is the controlling bool in the constructor
        }
    }
    changelogin = () => {
        this.state.isloggedin ?
            this.setState({
                isloggedin: false
            }, console.log("The login is set to false now")) : this.setState({
                isloggedin: true
            }, console.log("The login is now set to true"))
        //a tertiary operator to change states
    }


    render() {
        //conditional rendering using if else statements
        // if (this.state.isloggedin) {
        //     return (
        //         <div>
        //             <h1>Hello Siddhesh </h1>
        //              <button onClick={() => this.changelogin()}>click to login</button>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h1>Hello Stranger </h1>
        //             <button onClick={() => this.changelogin()}>click to login</button>
        //         </div>
        //     )

        // }
        // let message;
        // if (this.state.isloggedin) {
        //     message = <div>
        //         <h1>Hello Siddhesh </h1>
        //         <button onClick={() => this.changelogin()}>click to login</button>
        //     </div>
        // }
        // else {
        //     message = <div>
        //         <h1>Hello Stranger </h1>
        //         <button onClick={() => this.changelogin()}>click to login</button>
        //     </div>
        // }
        // return (
        //     <>
        //         {message}
        //     </>
        // )
        return (
            this.state.isloggedin ?
                <div>
                    <h1>Hello Siddhesh </h1>
                    <button onClick={() => this.changelogin()}>click to login</button>
                </div> :
                <div >
                    <h1>Hello Stranger </h1>
                    <button onClick={() => this.changelogin()}>click to login</button>
                </div>
        )


    }
}

export default ConditionalRendering