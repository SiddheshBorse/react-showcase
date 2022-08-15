import React from 'react'
//this is an essential import statement in order to make a component in react

function FunctionalComponents() {
    //A functional component is nothing but a function that returns JSX
    return (
        //All JSX must be enclosed in a single parent therefor this div tag has been used here
        <div>
            <h1>Hey Linkedin</h1>
            <h1>This is a Functional Component</h1>
        </div>
    )
}

export default FunctionalComponents
//This is a default export, this is used to call this functional component in the App.js File