const db = require('../database')
const dbschema = require('../schema')
const dbmodel = db.model("Data", dbschema)
const router = require('express').Router()

router.get("/get/:key", (req, res) => {
  dbmodel.find({ key: req.params.key }, (err, result) => {
    if (err) {
      res.json({ error: err })
    } else {
      if (!result.length) {
        res.json({ message: "Data not found" })
      } else {
        res.json(result)
      }
    }
  })
})

router.get("/set/:key/:val", (req, res) => {
  newdata = new dbmodel({key:req.params.key, value:req.params.val})
  dbmodel.insertMany(newdata,(err, result) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json(result)
    }
  })
})

router.get("/delete/:key", (req, res) => {
  dbmodel.remove({key:req.params.key}, (err, result) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json(result)
    }
  })
})

module.exports = router
