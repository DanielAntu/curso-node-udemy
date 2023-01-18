const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    const fillename = q.pathname.substring(1)

    if (fillename.includes('html')) {
        if (fs.existsSync(fillename)) {
            fs.readFile(fillename, function(err,data) {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        } else {
            // 404
            fs.readFile('404.html', function(err,data) {
                res.writeHead(40, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})