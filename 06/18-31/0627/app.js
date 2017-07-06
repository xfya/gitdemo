var  http = require('http');
var fs = require('fs');
var  mime = require('mime')
var template = require('art-template')
var getStructure = require("./app1.js")


var  server = http.createServer()

server.on('request',function(req,res){
    var  url = req.url;
//   s
  var dirPath = decodeURI('./' + url) // 这里的 ./ 是相对于在哪执行 node 命令所处的目录而言的

    if(url === "/"){

       var   html  = template(__dirname+"/template.html",{})
       fs.stat(dirPath,function(err,stats){
             if (err) {
                // 标识没有 structure/xx 路径
                return res.end('404 Not Found.')
            }
            if(stats.isFile()){
                  fs.readFile(dirPath, function (err, data) {
                        res.end(data)
                  })
            }else if(stats.isDirectory()){
                getStructure(dirPath,function(files){
                    var htmlStr = template(__dirname + '/template.html', {
                            files: files,
                            url: url,
                            prevUrl: url.substr(0, url.lastIndexOf('/')) || '/'
                    })

                    res.end(htmlStr)
                })
            }

       })
        // res.end(html)
    }else{
        res.end('404')
    }

})

server.listen(3030, function () {
  console.log('running...')
})

