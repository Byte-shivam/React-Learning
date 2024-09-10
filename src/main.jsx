import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    // use always uper case not right myApp , right is MyApp 
    return (
        <div>
            <h1> hii boii!!</h1>
        </div>
    )
}
// we can not use our own method in react.


// const reactElement={
//     type: 'a',
//     props : {
//         href : "https://www.google.com",
//         target: "_blank"
//     },
//     children: "click me to visit google.com"
// }

//     const another =(
//         <a href="https://google.com" target="_blank"> google </a>
// )

// so we have to use a well defined method provided by react tha is React.createElement()

const reactElement= React.createElement(
    // 1- type
    'a',
    // 2- object with props
    {href: "https://google.com", target: "_blank"},
    // 3- children
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />

    // reactElement
    // it is not works

    // another
    // it works 

    // reactElement
    // it works

    < App/>
  
)
