import React from "react"
// import { useExample } from "../hooks"
import Home from "./Home"
import { BrowserRouter as Router, Route } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}
