// import React from "react"
// import ReactDOM from "react-dom"

//const reactDom = require("react-dom")

// Vanilla JS, imperative
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// JSX created for React.js
// const element = <div><h1 className="header">JSX</h1><p>Paragraph</p></div>

// console.log(element)

// ReactDOM.render(element, document.getElementById("root"))

// JSX returns plane objects, render turns them in html that browser can process

// const element = <h1>Proba append</h1>

// ReactDOM.render(element, document.getElementById("root"))

// FIRST PROJECT

function Image(){
    return (
        <img src="./pictures/react-logo.png" width={40}></img>
    )
}  
function Title(){
    return (
        <h1>Naslov</h1>
    )
} 

function List(){
    return (
    <ul>
        <li>Item 1</li>       
        <li>Item 2</li>       
        <li>Item 3</li>       
    </ul>
    )
} 
function Page(){
    return (
        <div>
            <Image />
            <Title />
            <List />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))
