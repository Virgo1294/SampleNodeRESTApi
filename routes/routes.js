const db = require('../database')
const dbschema = require('../schema')
const dbmodel = db.model("Data", dbschema)
const router = require('express').Router()
const morgan = require('morgan')
const parserBody = require('body-parser')

router.use(morgan('dev'))
router.use(parserBody.urlencoded({extended:false}))
router.use(parserBody.json())


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

router.get("/getall", (req, res) => {
  dbmodel.find({}, (err, result) => {
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

//POST METHOD TRIAL
router.post("/post/:key", (req, res) => {
  newdata = {key:req.params.key, value:JSON.stringify(req.body)}
  console.log(req.body)
  console.log(newdata)
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

router.get("/deleteall", (req, res) => {
  dbmodel.remove({}, (err, result) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json(result)
    }
  })
})

module.exports = router
