const express = require('express');
const router = express.Router();
const phones = require('../controllers/phones.controller')

router.get('/', phones.list);
router.get('/:id', phones.get);
router.post('/', phones.create);
router.delete('/:id', phones.delete)

module.exports = router;