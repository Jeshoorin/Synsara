const express = require('express')
const connexionRouter = require('./non technical/connexionRouter')
const dream11Router = require('./non technical/dream11Router')
const gamingRouter = require('./non technical/gamingRouter')
const dubRouter = require('./non technical/dubRouter')
const treasureHuntRouter = require('./non technical/treasureHuntRouter')

const nonTechApp = express()

nonTechApp.use('/connexion', connexionRouter)
nonTechApp.use('/dream11', dream11Router)
nonTechApp.use('/gaming', gamingRouter)
nonTechApp.use('/dub', dubRouter)
nonTechApp.use('/treasure', treasureHuntRouter)

module.exports = nonTechApp
