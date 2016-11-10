var fs = require('fs');
var buffer = require('buffer');

function readHeader(data) {

    var header = 
        {
            'format' : data.readUInt16LE(),
            'size': data.readUInt32LE(2),
            'offset': data.readUInt32LE(10),
            // 'headersize': data.readUInt32LE(14),
            // 'noColors': data.readUInt32LE(46)
        };

    return header;
}

module.exports = readHeader;
