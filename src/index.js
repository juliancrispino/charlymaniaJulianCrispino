
// 1) Tener a React en scope
import React from 'react'
import "./Index.css"

// 2) Tener a ReactDOM en scope
import ReactDOM from 'react-dom'


// 3) Tener al menos un componente
import App from "./App"


// 4) 
ReactDOM.render(<App/> , document.getElementById('root'))