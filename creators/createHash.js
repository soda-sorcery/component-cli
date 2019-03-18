const createHash = (value) => {
    const salt = 37;
    const hashSize = 137;
    let aggregateHash = value.split('').map(v => v.charCodeAt())
        .reduce((accumulator,  v) => {
            return ((salt * accumulator) + v);
        });
    aggregateHash = aggregateHash % hashSize;
    return parseInt(aggregateHash);
};

module.exports = createHash;