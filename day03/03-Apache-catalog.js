var http = require('http')

var fs = require('fs')

var server = http.createServer()

var wwwDir = 'C:/Users/又驭/Desktop/node.JS/www'

server.on('request', function (req, res) {
    var url = req.url
    fs.readFile('./trmplate.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found')
        }
          fs.readdir(wwwDir, function (err, files) {
             if (err) {
                 return res.end('Can not find www dir.')
             }
            //  console.log(files);.
            var content = ''

            files.forEach(function (item) {
                content += `
                 <tr>
                 <td>${item}</td>
                 <td>2</td>
                 <td>3</td>
                 </tr>
                 `
            })
            data = data.toString()

            data = data.replace('^-^', content)

            // console.log(data)
    
            res.end(data)

         })
    })
})

server.listen(3000, function () {
    console.log('running');
})