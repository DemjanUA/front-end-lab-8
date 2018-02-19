'use strict';

function getFilteredArray(arr, callback) {
    let res = [];
    forEach(arr, function (e, i) {
        if (callback(e)) res.push(e);
    });
    return res;
}