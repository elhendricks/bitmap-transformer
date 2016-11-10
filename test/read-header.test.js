var readHeader = require('../lib/read-header');
var assert = require('assert');
// var mocha = require('mocha');
// var chai = require('chai');
var fs = require('fs');

describe('read-header', () => {
    it('gets palette file format', done => {
        fs.readFile('./palette-bitmap.bmp', function(err, data){
            assert.equal(readHeader(data), {
                'format' : (parseInt('424d', 16)).toString(16),
                'size': parseInt('462b0000', 16).toString(16),
                'offset': parseInt('3600', 16).toString(16),
            });

            done();
        });
    });


    // it('gets non-palette file format', done => {
    //     assert.equal(readHeader())
    // });
});