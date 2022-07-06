const express = require('express')

const router = express.Router()

const { Health } = require('../controller/health')

router.get('/health',Health)

module.exports = { router }