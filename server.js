const { createServer } = require('http')
const next = require('next')
const { parse } = require('url')

const app = next({
    dev: process.env.NODE_ENV !== 'production'
})

const routes = require('./routes')
const handler = routes.getRequestHandler(app)
// const handler = app.getRequestHandler()
// app.prepare().then(() => {
//     createServer((req, res) => {
//         const parsedUrl = parse(req.url, true)
//         handler(req, res, parsedUrl)
//     }).listen(3000, err => {
//         if (err) throw err
//         console.log('Ready on http://localhost:3000')
//     })
// })

app.prepare().then(() => {
    createServer(handler).listen(3000, (err) => {
        if (err) throw err
        console.log('Ready on localhost:3000...')
    })
})