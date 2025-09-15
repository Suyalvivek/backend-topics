#!/usr/bin/env node
//shebang
import * as readline from "node:readline/promises";
import {stdin,stdout} from "node:process";
import{createFolder, createFile, writeToFile, deleteFile, deleteFolder, listItems} from "./fs.js";
import chalk from "chalk";

const rl = readline.createInterface({
    input:stdin,
    output:stdout
})
async function menu(){
    console.clear();
    console.log(chalk.blueBright.bold('📁 File Manager \n'));
    const options = [
        'Create Folder',
        'Create File',
        'Write to File',
        'Delete File',
        'Delete Folder',
        'List Items',
        'Exit'
    ];
    options.forEach((opt,i)=>{
        console.log(chalk.yellow(i+1)+"."+chalk.cyan(opt))
    });
    const answer = await rl.question(chalk.yellowBright('\n Select any option to start: '));
    switch(answer){
        case '1':
            const folderPath = await rl.question(chalk.cyan('Folder Path: '));
            await createFolder(folderPath);
            console.log(chalk.greenBright("Folder Created Successfully ✅"));
            break;
        case '2':
            const fileName = await rl.question(chalk.yellowBright('\n File Name : '));
            const initialContent = await rl.question(chalk.yellowBright('\n File Content: '));
            await createFile(fileName,initialContent);
            console.log(chalk.greenBright(`${fileName} File Created Successfully ✅`));
            break;
        case '3':
            const appendfilePath = await rl.question(chalk.yellowBright('\n File Path : '));
            const appendContent = await rl.question(chalk.yellowBright('\n File Content: '));
            await writeToFile(appendfilePath,`\n ${appendContent}`);
            console.log(chalk.greenBright(`${appendfilePath} File Content Added ✅`));
            break;
        case '4':
            const deleteFilePath = await rl.question(chalk.yellowBright('\n File Path to Delete : '));
            await deleteFile(deleteFilePath);
            console.log(chalk.greenBright(`${deleteFilePath} File Deleted Added ✅`));
            break;
         case '5':
            const deleteFolderPath = await rl.question(chalk.yellowBright('\n Folder Path to Delete : '));
            await deleteFolder(deleteFolderPath);
            console.log(chalk.greenBright(`${deleteFolderPath} Folder Deleted Added ✅`));
            break;
        case '6':
            const listPath = await rl.question(chalk.yellowBright('\n Folder path (Press enter for current path)'));
            const items = await listItems(listPath ||'./');
            console.log(chalk.blue('\n Contents:'));
            items.forEach(
                item=>{
                    const icon = item.type=='folder'?'📁':'📄';
                    console.log(`${icon} ${chalk.greenBright(item.name)}`);
                }
            )
            break;
        case '7':
            rl.close();
            return;
        default:
            console.log(chalk.red("‼️invalid option"));
    }
    console.log('Option',answer,'executed successfully');
    await rl.question(chalk.gray('\n Press ENTER to Continue...'));
    menu();
   
}
menu();