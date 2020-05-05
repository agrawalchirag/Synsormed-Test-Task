const _ = require("lodash");

// return nested keys and their values by taking a deepWalk in nested JSON input
const deepWalk = (collection, childKeys, iteratee) => {
  var each = _.partial(_.each, _, function (value, index) {
    iteratee(value, index);
    _(value).pick(childKeys).each(each);
  });
  each(collection);
}

module.exports = deepWalk;
