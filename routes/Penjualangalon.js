const router = require('express').Router()
const penjualangalonController = require('../controller/Penjualangalon')

router.post('/insert', (req, res)=> {
    penjualangalonController.create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall', (req, res)=> {
    penjualangalonController.showAllData()
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res)=> {
    penjualangalonController.showDataById(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.put('/update/:id', (req, res)=> {
    penjualangalonController.update(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res)=> {
    penjualangalonController.delete(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})
module.exports = router