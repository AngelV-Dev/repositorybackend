require('dotenv').config()
const http = require('http')

function requestController(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    
    res.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Despliegue Node.js</title>
            <style>
                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #000;
                    color: #00bfff;
                    font-family: monospace;
                }

                h1 {
                    font-size: 4rem;
                    letter-spacing: 4px;
                }
            </style>
        </head>
        <body>
            <h1>HELLO WORLD</h1>
        </body>
        </html>
    `)

    res.end()
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})