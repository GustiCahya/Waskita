const pagination = async (Model, query, pageNumber = 1, limitPerPage) => {
  const skip = Number((pageNumber - 1) * limitPerPage);
  const limit = Number(limitPerPage);
  const aggregate = [];
  let $match;
  if (query) {
    const arrMatch = Object.entries(query).filter(
      (item) => item[0] !== "pipeline"
    );
    if (arrMatch.length >= 1) {
      const match = arrMatch.reduce(
        (total, item) => ({ ...total, [item[0]]: item[1] }),
        {}
      );
      $match = match;
      aggregate.push({ $match });
    }
  }
  // handle pipeline
  let _query;
  let _query$pipeline;
  if (
    (_query = query) === null || _query === void 0
      ? void 0
      : (_query$pipeline = _query.pipeline) === null ||
        _query$pipeline === void 0
      ? void 0
      : _query$pipeline.length >= 1
  ) {
    aggregate.push(...query.pipeline);
  }
  // Get Count
  const count = (await Model.aggregate([
    ...aggregate,
    { $group: { _id: null, n: { $sum: 1 } } },
  ]))?.[0]?.n || 0;
  // handle pagination
  if (skip) {
    aggregate.push({ $skip: skip });
  }
  if (limit) {
    aggregate.push({ $limit: limit });
  }
  // if aggregate empty
  if (aggregate.length <= 0) {
    aggregate.push({ $match: {} });
  }
  const result = await Model.aggregate(aggregate);
  const pagesLength = Math.ceil(count / limit);
  return { result, pagesLength, count };
};

module.exports = {
  pagination,
};
