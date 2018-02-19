'use strict';

function cypherPhrase(lettersMap, phrase) {
    return getTransformedArray(phrase.split(''), e => lettersMap[e] || e).join('');
}