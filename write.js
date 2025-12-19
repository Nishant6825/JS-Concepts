const fs = require("fs");

// const writeStream = fs.createWriteStream("output.txt");

// writeStream.write("Hello ");
// writeStream.write("World");
// writeStream.end();


const readStream = fs.createReadStream('output.txt', {
    encoding: 'utf-8'
})

readStream.on('data', chunck => {
    console.log(chunck);
})