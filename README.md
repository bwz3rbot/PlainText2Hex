# PlainText2Hex

## About <a name = "about"></a>

Simple uri encoder with pen testing feature.

## Usage <a name = "usage"></a>

Just update the textToConvert value to the text you want to encode. If confuse = true, will add html entity prefix and semi-colon suffix.




example input:
```
textToConvert = "javascript:alert('xss')"
```

example if false:
```
6a 61 76 61 73 63 72 69 70 74 3a 61 6c 65 72 74 28 27 78 73 73 27 29
```

example if true:
```
&#x6a;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x3a;&#x61;&#x6c;&#x65;&#x72;&#x74;&#x28;&#x27;&#x78;&#x73;&#x73;&#x27;&#x29;
```

Your encoded value is stored in your clipboard and ready to be pasted!