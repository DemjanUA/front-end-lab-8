'use strict';

function collectIds(movies) {
    let ratinged = getFilteredArray(movies, e => e.rating > 3);
    let filtered = getTransformedArray(ratinged, e => e.id);

    return filtered;
}