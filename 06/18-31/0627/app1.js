var  fs = require("fs")

module.exports = function(dirPath,callback){
    fs.readdir(dirPath,function(err,files){
        if(err){
            throw err
        }

        var dirArr = []
        var  fileArr = []
        var  count = 0 ;
        files.forEach(function(item,i){
            console.log(item)

            var  itemPath = dirPath + '/'+item
            fs.stat(itemPath,function(err,stats){
                if(err){
                    throw err
                }
                if(stats.isFile()){
                    fileArr.push({
                        name:item,
                        type:'file'
                    })
                }else if(stats.isDirectory()){
                    dirArr.push({
                        name:"item",
                        type:"dir"
                    })
                }
                count++ ;
                if(count === files.length){
                    dirArr = dirArr.sort(function(a,b){
                        return a.name > b.name
                    })
                     fileArr = fileArr.sort(function (a, b) {
                        return a.name > b.name
                    })

                    callback(dirArr.concat(fileArr))
                }


            })

        })
    })
}