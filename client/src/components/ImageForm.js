import React, { useState } from "react"

export default props => {
  const [image, setImage] = useState("")

  return (
    <div>
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="enter image url"
        onBlur={e => props.addImage(image)}
      />
    </div>
  )
}
