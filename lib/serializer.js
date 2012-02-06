var MESSAGE = require('./message');

var serializer = module.exports = {
  get_message : function(method, type, code){
    if(type in MESSAGE[method] && 
       code in MESSAGE[method][type]){
      return MESSAGE[method][type][code];
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
        code       : res.statusCode,
        message    : serializer.get_message('get', type, res.statusCode),
        content    : serializer.parse(res.body)
      };
    },
    post : function(type, res){
      return {
        is_success : res.statusCode < 300,
        code       : res.statusCode,
        message    : serializer.get_message('post', type, res.statusCode),
        content    : serializer.parse(res.body)
      };
    },
    put  : function(type, res){
      return {
        is_success : res.statusCode < 300,
        code       : res.statusCode,
        message    : serializer.get_message('put', type, res.statusCode),
        content    : serializer.parse(res.body)
      };
    },
    del  : function(type, res){
      return {
        is_success : res.statusCode < 300,
        code       : res.statusCode,
        message    : serializer.get_message('del', type, res.statusCode),
        content    : serializer.parse(res.body)
      };
    }
  }
};
