// import * as fs from "node:fs";
import * as fs from "node:fs/promises";
import path from "node:path"

// function createFile(pathname){
//     //sync
//     // fs.writeFileSync(pathname,"Hello Nodejs");
//     // fs.appendFileSync(pathname,"Hello JavaSCript");
//     //
//     // async
//     fs.writeFile(pathname,"hihihi",(err)=>{
//         if(err){
//             console.log("something went wrong while writing a file").
//             return;
//         }
//          fs.appendFile(pathname,"second append",(err)=>{
//         if(err){
//             console.log("something went wrong while writing a file").
//             return;
//         }
//         console.log("file append successfully ")
//     });
//         console.log("file created successfully ")
//     });
   

//     console.log("file created");
// }
// createFile('./hello.txt');





//promises
// async function createFile(pathname){
//     await fs.writeFile(pathname,'Hello nodejs\n');
//     await fs.appendFile(pathname,'Hello append');


// }
// createFile('./hello.txt');
export async function deleteFile(filePath){
    await fs.unlink(filePath);

}
export async function deleteFolder(folderPath){
    await fs.rm(folderPath,{recursive:true});

}
async function readFile(pathname){
   const data =  await fs.readFile(pathname,'utf-8');
   console.log(data);
}
export async function createFolder(foldername){
    await fs.mkdir(foldername,{recursive:true });
}
export async function writeToFile(pathname,content){
    await fs.appendFile(pathname,content);
}
export async function createFile(pathname,content='') {
    await fs.writeFile(pathname,content);
    
}
async function getFileInfo(filePath){
    const stats = await fs.stat(filePath);
    return {
        size:`${(stats.size/1024).toFixed(2)}KB`,
        created:stats.birthtimeMs,
    }

}
export async function listItems(listPath='./') {
    const items = await fs.readdir(listPath,{withFileTypes:true});
    return items.map(item=>{
        return {
            name:item.name,
            type:item.isDirectory()?'folder':'file',
            path:path.join(import.meta.dirname,item.name),
        };
    })
    console.log(items);
    
}
// createFile('./hello.txt',"yohoyohoyoho\n");
// createFolder('./contents/images/logos');
// readFile('./hello.txt');
// getFileInfo('./hello.txt').then(data=>console.log(data));
// deleteFile('./hello.txt');
// deleteFolder('./contents')