var client = require('./client');

var Graph = module.exports = function(host, option){
  this.option = option;
  this.host   = host.replace(/\/$/, '');
  this.url    = this.host + '/db/data';

  var that = this;
  this.get = {
    root : function(){
      return client.get(that.url, 'root');
    },
    node : function(id){
      return client.get(that.url + '/node/' + id, 'node');
    },
    property : function(id, key){
      return client.get(that.url + '/node/' + id + '/properties/' + key, 'property');
    }
  };
  this.save = {
    node : function(query){
      return client.post(that.url + '/node', 'node', { json : query });
    }
  };
  this.update = {
    node : function(id, query){
      return client.put(that.url + '/node/' + id + '/properties', 'node', { json : query });
    },
    property : function(id, key, value){
      return client.put(that.url + '/node/' + id + '/properties/' + key, 'property', { json : value });
    }
  };
  this.remove = {
    node : function(id){
      return client.del(that.url + '/node/' + id, 'node');
    },
    property : function(id, key){
      return client.del(that.url + '/node/' + id + '/' + key, 'property');
    }
  };
};
