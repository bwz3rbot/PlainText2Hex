// https://www.browserling.com/tools/text-to-hex

// Converts text to hexadecimal values, then adds html entity prefix and semi-colon suffix.
// The return value can then be passed as a query param to bypass filtering.

const clipboardy = require('clipboardy'),
    colors = require('colors');


const textToHex = function (text, confuse = true, hex = false) {
    var bytes = [];
    for (var i = 0; i < text.length; i++) {
        var realBytes = unescape(encodeURIComponent(text[i]));
        for (var j = 0; j < realBytes.length; j++) {
            bytes.push(realBytes[j].charCodeAt(0));
        }
    }
    var converted = '';
    var textToHexFormat = '%x';
    for (var i = 0; i < bytes.length; i++) {

        var byte = bytes[i];
        var hexByte = byte.toString(16);
        if (hexByte.length == 1) {

            hexByte = '0' + hexByte;
        }
        var char = textToHexFormat;
        if (i > 0 && !confuse && !hex) {
            hexByte = " " + hexByte
        }
        if (confuse) {
            hexByte = "&#x" + hexByte + ';'
        }
        if (hex) {
            hexByte = "%" + hexByte + ';'
        }

        char = char.replace(/%x/g, hexByte);
        converted += char;
    }
    return converted;
};

textToConvert = "javascript:alert('hello')"
if (process.argv[2]) {
    textToConvert = process.argv[2]
}



console.log(`${textToConvert}`.green)
hexed = textToHex(textToConvert)
clipboardy.writeSync(hexed)
console.log(hexed.red)