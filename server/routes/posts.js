const express = require("express")
const router = express.Router()
const conn = require("../db")

router.post("/post", (req, res, next) => {
  const getSQL = `SELECT id FROM categories WHERE slug = ?`

  const insertSql = `INSERT INTO posts (name, posting, category_id) VALUES (?, ?, ?)`

  let imageSql = `INSERT INTO images (url, post_id) VALUES`
  const images = req.body.images

  images.forEach(image => {
    imageSQL += `(?, ?), `
  })

  imageSql = imageSql.substr(0, imageSql.length - 1)

  conn.query(getSQL, [req.body.slug], (err, results, fields) => {
    const catId = results[0].id

    conn.query(
      insertSql,
      [req.body.name, req.body.post, catId],
      (err2, results2, fields2) => {
        const postId = results2.insertId

        const imgarr = []
        images.forEach(img => {
          imgarr.push(img, postId)
        })

        conn.query(imageSql, imgarr, (err3, results3, fields3) => {
          if (err3) {
            console.log(err3)
          } else {
            res.json({ id: postId })
          }
        })

        res.json({
          id: results2.insertId
        })
      }
    )
  })
})

router.get("/posts/:id", (req, res, next) => {
  const sql = `SELECT * FROM posts WHERE id = ?`

  conn.query(sql, [req.params.id], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
