'use strict';

function getTransformedArray(arr, callback) {
    let res = [];
    forEach(arr, function (e, i) {
        res[i] = callback(e);
    });
    return res;
}