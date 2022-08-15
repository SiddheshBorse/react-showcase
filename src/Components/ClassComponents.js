import React, { Component } from 'react'
////this is an essential import statement in order to make a component in react

class ClassComponents extends Component {
    //Class component is a class that extends the Component class in React
    render() {
        //This is the render method that renders the elements inside the class 
        return (
            //The return statement inside the render method returns the required JSX
            <div>
                <h1>_____________________________</h1>
                <h1>This is a Class Component</h1>
            </div>
        )

    }
}

export default ClassComponents