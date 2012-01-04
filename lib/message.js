module.exports = {
  get : {
    200 : 'OK',
    204 : 'OK, no properties found',
    404 : 'Node not found'
  },
  post : {
    201 : 'OK, a node was created',
    400 : 'Invalid data sent',
  },
  put : {
    204 : 'OK, no content returned',
    400 : 'Invalid data sent',
    404 : 'Node not found'
  },
  del : {
    204 : 'OK, no content returned',
    404 : 'Node not found',
    409 : 'Node could not be deleted (still has relationships?)'
  },
  ERROR : {
    UNKNOWN : 'Undefined error'
  }
};
