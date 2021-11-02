const parseJsonQuery = function (jsonQuery) {
    return jsonQuery
        ? JSON.parse(jsonQuery)
        : {};
};

module.exports = parseJsonQuery;
