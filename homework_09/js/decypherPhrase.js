'use strict';

function decypherPhrase(lettersMap, phrase) {
    let decodeMap = {};
    for (key in lettersMap) {
        decodeMap[lettersMap[key]] = key;
    }
    return cypherPhrase(decodeMap, phrase);
}