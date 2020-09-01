// https://www.browserling.com/tools/text-to-hex

// Converts text to hexadecimal values, then adds html entity prefix and semi-colon suffix.
// The return value can then be passed as a query param to bypass filtering.

const textToHex = function (text, confuse) {
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
        if (i > 0 && !confuse) {
            hexByte = " " + hexByte
        }
        if (confuse) {
            hexByte = "&#x" + hexByte + ';'
        }

        char = char.replace(/%x/g, hexByte);
        converted += char;
    }
    return converted;
};

textToConvert = 
"javascript:alert('xss')"

let converted = textToHex(textToConvert,false)
console.log(converted)