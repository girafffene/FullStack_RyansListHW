import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import moment from "moment"

import { useCats } from "../hooks"

export default props => {
  const { posts, getPosts, currentCategory } = useCats()

  useEffect(() => {
    getPosts(props.match.params.slug)
  }, [props.match.params])

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>{currentCategory}</h1>

      <Link to={props.match.params.slug + "/create"}>Create Post</Link>
      {posts.map(p => (
        <div key={"c-posting" + p.id}>
          <Link to={`/posting/${p.id}`}>
            {p.name} - {moment(p.time_created).fromNow()}
          </Link>
        </div>
      ))}
    </div>
  )
}
