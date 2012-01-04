var EventEmitter = require('events').EventEmitter;
var request      = require('request');
var serializer   = require('./serializer');

var extend = function(a, b){
  for(var key in b) a[key] = b[key];
  return a;
};
var client = module.exports = {
  request : function(method, query){
    var ev = new EventEmitter();
    var params = extend({ headers : { Accept : 'application/json' } }, query);
    request[method](params, function(error, res, body){
      if(error){
        ev.emit('error');
      } else {
        ev.emit('end', { method : method, res : res });
      }
    });
    return ev;
  },
  filter : function(req){
    return {
      by : function(type){
        var ev = new EventEmitter();
        req.on('end', function(data){
          var result = serializer.serialize[data.method](type, data.res);
          var _event = result.is_success ? 'end' : 'error';
          ev.emit(_event, result);
        });
        req.on('error', function(res){
          ev.emit('error');
        });
        return ev;
      }
    };
  },
  get  : function(url, type){
    var req = client.request('get', { url : url });
    return client.filter(req).by(type);
  },
  post : function(url, type, option){
    var req = client.request('post', extend({ url : url }, option));
    return client.filter(req).by(type);
  },
  put  : function(url, type, option){
    var req = client.request('put', extend({ url : url }, option));
    return client.filter(req).by(type);
  },
  del  : function(url, type){
    var req = client.request('del', { url : url });
    return client.filter(req).by(type);
  }
};
