const jsonParser = (text) => {
  // functionality for parsing date
  const reISO =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
  const reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
  const dateParser = function (key, value) {
    if (typeof value === "string") {
      let a = reISO.exec(value);
      if (a) return new Date(value);
      a = reMsAjax.exec(value);
      if (a) {
        const b = a[1].split(/[-+,.]/);
        return new Date(b[0] ? +b[0] : 0 - +b[1]);
      }
    }
    return value;
  };
  return JSON.parse(text, dateParser);
};

const parseJsonQuery = function (jsonQuery) {
  return jsonQuery ? jsonParser(jsonQuery) : {};
};

module.exports = parseJsonQuery;
