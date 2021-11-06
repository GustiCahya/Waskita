const wix = require("../services/crud/wix");

const pagination = async (Model, query, pageNumber = 1, limitPerPage) => {
  const skip = Number((pageNumber - 1) * limitPerPage);
  const limit = Number(limitPerPage);
  const aggregate = [];
  if (query) {
    const arrMatch = Object.entries(query).filter(
      (item) => item[0] !== "pipeline"
    );
    if (arrMatch.length >= 1) {
      const match = arrMatch.reduce(
        (total, item) => ({ ...total, [item[0]]: item[1] }),
        {}
      );
      aggregate.push({ $match: match });
    }
  }
  if (skip) {
    aggregate.push({ $skip: skip });
  }
  if (limit) {
    aggregate.push({ $limit: limit });
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
  // if aggregate empty
  if (aggregate.length <= 0) {
    aggregate.push({ $match: {} });
  }
  const result = await Model.aggregate(aggregate);
  const count = await Model.countDocuments(query);
  const pagesLength = Math.ceil(count / limit);
  return { result, pagesLength };
};

const paginationWix = async (
  collection,
  query,
  pageNumber = 1,
  limitPerPage
) => {
  const skip = Number((pageNumber - 1) * limitPerPage);
  const limit = Number(limitPerPage);
  const result = await wix
    .get({
      query: {
        collection,
        jsonQuery: JSON.stringify({
          ...query,
          $skip: skip,
          $limit: limit,
        }),
      },
    })
    .then((data) => data.result);
  const count = await wix
    .count({
      query: {
        collection,
        jsonQuery: JSON.stringify(query),
      },
    })
    .then((data) => data.result);
  const pagesLength = Math.ceil(count / limit);
  return { result, pagesLength };
};

module.exports = {
  pagination,
  paginationWix,
};
