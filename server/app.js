const express = require("express")
const listingRoutes = require("./routes/listings")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", listingRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
