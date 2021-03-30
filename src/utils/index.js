const adjacency = require('./adjacency');
const containment = require('./containment');
const intersection = require('./intersection');

module.exports = { 
  ...adjacency,
  ...containment,
  ...intersection
};