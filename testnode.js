let http=require('http');
let fs=require('fs');
let url=require('url');
let server=http.createServer();
server.on('request',(request,response)=>{

//response.writeHead(200,{'Content-Type':'text/plain' })//type de request
//response.end('salut request')//affichage dans les navigateurs
/*fs.readFile('index.html', (err, data) => {//read file html
    if (err) {
        response.writeHead(404);
        response.end("ERREUR");

    }
    else{response.end(data);}
  });*/
  response.writeHead(200)
  //console.log(request.url)//loger la requette dans l'url
  let query=url.parse(request.url,true).query
  response.end('bonjour '+query.name)

})
server.listen('8081')