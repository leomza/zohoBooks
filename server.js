const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
const path = require('path')
const pathToPublicFolder = path.resolve(__dirname, './public')

app.use(express.json())
app.use(express.static(pathToPublicFolder))

//I use this to read a cookie
app.use(cookieParser())

//Route (I import the routes of activities)
const userRoute = require('./routes/routeUsers')
const clientRoute = require('./routes/routeClients')
const invoiceRoute = require('./routes/routeInvoices')

//Use of that Routes that I imported
app.use('/users', userRoute)
app.use('/clients', clientRoute)
app.use('/invoices', invoiceRoute)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
