const express = require("express")
const router = express.Router()
const conn = require("../db")

// router.post("/newListing", (req, res, next) => {
//   const category = req.body.category

//   const sql = `
//   INSERT INTO sub-categories (name)
//   VALUES (?)
//   `

//   conn.query(sql, [username, password, salt], (err, results, fields) => {
//     res.json({
//       message: `listing added successfully`
//     })
//   })
// })

router.get("/categories", (req, res, next) => {
  const sql = `
  SELECT * 
  FROM categories
  `

  conn.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
