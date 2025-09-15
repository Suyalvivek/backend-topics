import{createServer} from "node:http";
import fs, { read } from "node:fs";
// import fsPromises  from "node:fs/promises";
let count = 0;
const server = createServer(async (req,res)=>{
    if(req.url=='/'){
        const htmlPage = fs.createReadStream('./stream.html');
        htmlPage.pipe(res);

    }else if(req.url=='/stream'){
        res.writeHead(200,{
            'content-type':'text/event-stream',
            'cache-control':'no-cache',
             connection:'keep-alive',

        });
        setInterval(()=>{
            res.write(`data : The Count is -${count++}\n\n`)
        },1000);
    }
    // if(req.url=='/'){
    //     // const data = await fs.readFile('./index.html');
    //      res.writeHead(200,{'content-type':'text/html'})

    //     const dataStream =  fs.createReadStream('./index.html');
    //     dataStream.pipe(res);
    //     // dataStream.on('data',(chunk)=>{
    //     //     res.write(chunk)
    //     // })
    //     // dataStream.on('end',()=>{
    //     //     res.end();
    //     // })
        
    //     // console.log(dataStream);

    // // res.end(data);

    // }else if(req.url=='/logs'){
    //       res.writeHead(200,{'content-type':'text/html'})
    //       res.end('<h1>Hello from nodejs Logs');
    // }else if(req.url=='/expenses'){
    //     //APIS
    //     if(req.method=='POST'){
    //         //read data from request
    //         let  buff = ''
    //         req.on('data',(chunk)=>{
    //             buff= buff+chunk.toString();
    //         });
    //         req.on('end',async()=>{
    //             const data = await fsPromises.readFile('./db.json');
    //             const dbData = JSON.parse(data);
    //             dbData.push(JSON.parse(buff));
    //             await fsPromises.writeFile('./db.json',JSON.stringify(dbData,null,2));
    //             res.end('ok');
    //         })
    //     }else if(req.method=='GET'){
    //         const data = await fsPromises.readFile('./db.json');
    //         res.end(data);

    //     }

    // }
    console.log('request recieved');
    // res.end("Hello from Node.js server");
   

})
server.listen(3000,()=>{
    console.log("server is running on port 3000")
})