import React, { useEffect } from "react"
import axios from "axios"

export default props => {
  useEffect(() => {
    axios.get("/api/categories").then(resp => {
      console.log(resp)
    })
  }, [])

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
