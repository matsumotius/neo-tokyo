module.exports = {
  get : {
    index : {
      200 : 'OK'
    },
    node : {
      200 : 'OK',
      404 : 'Node not found'
    },
    properties : {
      200 : 'OK',
      204 : 'OK, no properties found',
      404 : 'Node or property not found'
    },
    relationship : {
      200 : 'OK',
      404 : 'Node not found'
    }
  },
  post : {
    index : {
      201 : 'OK, the index was created (or was already created)'
    },
    node : {
      201 : 'OK, a node was created',
      400 : 'Invalid data sent'
    },
    relationship : {
      201 : 'OK, a relationship was created',
      400 : 'Invalid data sent',
      404 : '"to" node, or the node specified by the URI not found'
    }
  },
  put : {
    node : {
      204 : 'OK, no content returned',
      400 : 'Invalid data sent',
      404 : 'Node node found'
    },
    properties : {
      204 : 'OK, no content returned',
      400 : 'Invalid data sent'
    },
    relationship : {
      204 : 'OK, no content returned',
      400 : 'Invalid data sent',
      404 : 'Relationship node found'
    }
  },
  del : {
    index : {
      204 : 'OK, no properties found',
      404 : 'Index entry not found'
    },
    node : {
      200 : 'OK',
      404 : 'Node not found',
      409 : 'Node could not be deleted (still has relationships?)'
    },
    properties : {
      204 : 'OK, no properties found',
      404 : 'Node or property not found'
    },
    relationship : {
      204 : 'OK, no content returned',
      404 : 'Relationship not found'
    }
  },
  ERROR : {
    UNKNOWN : 'Undefined error'
  }
};
