
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


const { url} = await inquirer.prompt([
    {
        type:'input',
        name: 'url',
        message: 'Enter url:',

    } 
]);
console.log(`You entered: ${url}`);
const qr_png = qr.image(url, {type: 'png'});

const qrPath = 'qr_output.png';
const qrStream = fs.createWriteStream(qrPath);
qr_png.pipe(qrStream);
qrStream.on('finish', ()=>{
    console.log(`QR code  image saved as ${qrPath}`);

});
fs.writeFile('input.txt', url, (err)=>{
    if(err) throw err;
    console.log(`URL saved to input.txt`);
});


