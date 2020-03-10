import React, { useState } from "react"

import { usePosts } from "../hooks"

export default props => {
  const [name, setName] = useState("")
  const [descr, setDescr] = useState("")

  const { create } = usePosts()

  function handleSubmit(e) {
    e.preventDefault()
    create(props.match.params.slug, name, descr).then(id => {
      props.history.push("/posting/" + id)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Name</label>

          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Posting Name"
          />

          <label>Post Description</label>

          <textarea
            onChange={e => setDescr(e.target.value)}
            value={descr}
          ></textarea>

          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  )
}
