var MESSAGE = require('./message');

var serializer = module.exports = {
  get_message : function(method, type, code){
    // todo: MESSAGE[type][method][code]
    if(code in MESSAGE[method]){
      return MESSAGE[method][code];
    } else {
      return MESSAGE.ERROR.UNKNOWN;
    }
  },
  parse : function(body){
    if(typeof body == 'string'){
      try {
        return JSON.parse(body);
      } catch(e) {
        return {};
      }
    } else {
      return body;
    }
  },
  serialize : {
    get  : function(type, res){
      return {
        is_success : res.statusCode < 300,
        message    : serializer.get_message('get', type, res.statusCode),
        content    : serializer.parse(res.body)
      };
    },
    post : function(type, res){
      return {
        is_success : res.statusCode < 300,
        message    : serializer.get_message('post', type, res.statusCode),
        content    : res.body
      };
    },
    put  : function(type, res){
      return {
        is_success : res.statusCode < 300,
        message    : serializer.get_message('put', type, res.statusCode),
        content    : res.body
      };
    },
    del  : function(type, res){
      return {
        is_success : res.statusCode < 300,
        message    : serializer.get_message('del', type, res.statusCode),
        content    : res.body
      };
    }
  }
};
