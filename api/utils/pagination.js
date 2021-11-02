const pagination = async (
  Model,
  query,
  pageNumber = 1,
  limitPerPage,
  sortBy,
  lookups,
  addFields
) => {
  const skip = Number((pageNumber - 1) * limitPerPage);
  const limit = Number(limitPerPage);
  const sort = sortBy ? JSON.parse(sortBy) : undefined;
  const aggregate = [];
  if (query) {
    // divide pipeline and ordinary match
    const [pipeline, match] = Object.entries(query).reduce(
      ([p, m], d) =>
        /^\$/gi.test(d[0])
          ? [[...p, { [d[0]]: d[1] }], m]
          : [p, { ...m, [d[0]]: d[1] }],
      [[], {}]
    );
    aggregate.push({ $match: match });
    if (pipeline.length >= 1) {
      aggregate.push(...pipeline);
    }
  }
  if (skip) {
    aggregate.push({ $skip: skip });
  }
  if (limit) {
    aggregate.push({ $limit: limit });
  }
  if (sort) {
    aggregate.push({ $sort: sort });
  }
  if (lookups) {
    lookups.forEach((lookup) => {
      aggregate.push({ $lookup: lookup });
    });
  }
  if (addFields) {
    aggregate.push({ $addFields: addFields });
  }
  const result = await Model.aggregate(aggregate);
  const count = await Model.countDocuments(query);
  const pagesLength = Math.ceil(count / limit);
  return { result, pagesLength };
};

module.exports = {
  pagination,
};
