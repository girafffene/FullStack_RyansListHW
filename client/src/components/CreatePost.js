import React, { useState } from "react"

import { usePosts } from "../hooks"
import ImageForm from "./ImageForm"

export default props => {
  const [name, setName] = useState("")
  const [descr, setDescr] = useState("")
  const [images, setImages] = useState([])
  const limit = 10

  const { create } = usePosts()

  function handleSubmit(e) {
    e.preventDefault()
    create(props.match.params.slug, name, descr, images).then(id => {
      props.history.push("/posting/" + id)
    })
  }

  function handleClick(e) {
    e.preventDefault()
    if (images.length < limit) {
      setImages([...images, ""])
    }
  }

  function addImage(img) {
    if (images.length < limit) {
      setImages([...images, img])
    }
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

          {images.map(image => (
            <ImageForm addImage={addImage} />
          ))}

          <button onClick={handleClick}>Add Image</button>

          {images.map(img => (
            <p>
              <img src={img} />
            </p>
          ))}

          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  )
}
