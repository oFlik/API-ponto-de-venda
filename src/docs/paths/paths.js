const index = require('./routes/index');
const auth = require('./routes/auth');
const user = require('./routes/user');
const client = require('./routes/client');
const product = require('./routes/products');
const transaction = require('./routes/transaction');

const paths = {
  index,
  auth,
  user,
  product,
  client,
  transaction,
};

module.exports = paths;
