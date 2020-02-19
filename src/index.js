module.exports = function towelSort(matrix) {
    if (!arguments.length) return [];
    let vector = [];
    matrix.forEach((val, i) => {
        if (i % 2 === 0)
            Array.prototype.push.apply(vector, val);
        else
            Array.prototype.push.apply(vector, val.reverse());
    });
    return vector;
}
