const fs = require('fs');
const readHeader = require('./lib/read-header');
// const sliceFile = require('./lib/slice-file');

function transform(path) {
    fs.readFile(path, (err, data) => {
        if (err) return err;
        var header = readHeader(data);
        console.log(data);
         //write file after you do the things.
    });
}

var path = 'palette-bitmap.bmp';
transform(path);

transform('non-' + path);