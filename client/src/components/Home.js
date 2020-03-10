import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/main.css"

import { useCats } from "../hooks"

export default props => {
  const { cats, get } = useCats()

  useEffect(() => {
    get()
  }, [])

  const calendarStyle = {
    border: "solid 1px #777",
    width: "260px",
    height: "200px",
    frameborder: "0",
    scrolling: "no"
  }

  return (
    <div className="container">
      <header>
        <h2>las vegas, NV</h2>
      </header>

      <div className="sidebar">
        <h2>ryanslist</h2>

        <p>create a posting</p>
        <p>my account</p>

        <input className="search" type="text" placeholder="search ryanslist" />

        <div className="calendar">
          <p>event calendar</p>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
            style={calendarStyle}
          ></iframe>
        </div>

        <p>help, faq, abuse, legal</p>
        <p>avoid scams & fraud</p>
        <p>personal safety tips</p>
        <p>terms of use</p>
        <p>privacy policy</p>
        <p>system status</p>

        <p>about ryanslist</p>
        <p>ryanslist is hiring in nv</p>
        <p>ryanslist open source</p>
        <p>ryanslist blog</p>
        <p>best-of-ryanslist</p>
        <p>ryanslist TV</p>
        <p>"ryanslist joe"</p>
        <p>ryan lee philanthropies</p>
      </div>

      <main>
        <div className="categories">
          {cats.map(parent => (
            <div className="parentContainer" key={"p-c-category-" + parent.id}>
              <h4 className="catTitle">
                <Link to={"/" + parent.slug}>{parent.name}</Link>
              </h4>

              <div className="sub">
                {parent.sub.map(child => (
                  <Link
                    className="subCatName"
                    key={"child-cat-" + child.id}
                    to={"/" + child.slug}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
