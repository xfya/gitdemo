var  fs = require("fs")
var  path = require("path")
var  mime = require("mime")
var  template = require("art-template")

function showIndex(req,res){

    //  res.render = function(templateName,obj){
    //    var templatePath = path.join(__dirname, "./views" +templateName + ".html" );
    //    fs.readFile(templatePath , function(err,data){
    //        if(err){
    //            res.end("can't  find  template")
    //         }
    //        res.writeHead(200,{
    //             "Content-Type":"text/html"
    //         })
    //         var result = template.compile(data.toString())(obj)
    //         res.end(result)

    //    })
    //  }
       res.render("index",{
            title:"xfa"
          })




}


function showAdd(req,res){

          res.render("index",{
            title:"add"
          })
}


function handlePublic(req,res){
 var  filePath = path.join(__dirname,req.url);
   fs.readFile(filePath, function(err,data){
             if(err){
                throw err
            }
              res.writeHead(200,{
                //   mime  响应css和 js 的要求
                "Content-Type":mime.lookup(filePath)
            })
            res.end(data)
        })
}







module.exports.showIndex = showIndex
module.exports.showAdd = showAdd
module.exports.handlePublic = handlePublic