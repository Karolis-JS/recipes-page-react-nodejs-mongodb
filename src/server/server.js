const express = require('express')
const cors = require('cors')

const app = express()
app.listen(8080)
app.use(cors())
app.use(express.json())