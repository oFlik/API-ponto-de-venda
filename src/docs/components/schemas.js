exports.loginReqBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
};

exports.registerReqBody = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
};

exports.userData = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    name: {
      enum: ['Nome do usuário'],
      type: 'string',
    },
    email: {
      enum: ['Email do usuário'],
      type: 'string',
    },
  },
};

exports.productModel = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    description: {
      enum: ['Descrição do produto'],
      type: 'string',
    },
    stock_count: {
      type: 'integer',
    },
    price: {
      type: 'number',
    },
    product_type: {
      type: 'integer',
    },
  },
};
