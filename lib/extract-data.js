const fs = require('fs');
const buffer = require('buffer');

var file = './non-palette-bitmap.bmp';

function getBitmapData(file, transformer) {
    fs.readFile(file, (err, buf) => {
        let offset = buf.readUInt32LE(10);
        let header = buf.slice([0, offset]);
        let size = buf.readUInt32LE(2);
        let colordata = buf.slice(offset);

        var pixel, pixStr;

        let pixOffset = 0;
        let pixEnd = offset + 3;
        var colorObj = {};
        // let pixel = colordata.slice(pixOffset, pixEnd);
        let counter = 0;
        while (pixEnd <= size) {

            pixel = colordata.slice(pixOffset, pixEnd);

            transformer(pixel);

            pixStr = pixel.toString();

            if(! colorObj[pixStr]) {
                colorObj[pixStr] = true;
            }

            counter ++;
            pixOffset += 3;
            pixEnd += 3;
      
        }

        fs.writeFile('./newBitMap.bmp', buf);

    });
}

function invertColors (pix) {
    var colorA = pix.slice(0, 1);
    var colorB =  pix.slice(1, 2);
    var colorC = pix.slice(2, 3);


    var valA = colorA.readUInt8(0);
    var valB = colorB.readUInt8(0);
    var valC = colorC.readUInt8(0);


    colorA.writeUInt8(255 - valA, 0 , 1);
    colorB.writeUInt8(255 - valB, 0 , 1);
    colorC.writeUInt8(255 - valC, 0, 1);
}



// getBitmapData(file);

exports.getData = getBitmapData;
exports.invertColors = invertColors;