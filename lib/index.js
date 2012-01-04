var Query  = require('./query');
var client = require('./client');

var Graph = module.exports = function(host, option){
  this.option = option;
  this.host   = host.replace(/\/$/, '');
  this.url    = this.host + '/db/data';
  this.client = client;
  this.query  = new Query();
};
Graph.prototype.node = function(id){
  this.query.set('node', id);
  return this;
};
Graph.prototype.properties = function(key){
  this.query.set('properties', key);
  return this;
};
Graph.prototype.relationship = function(query){
  this.query.set('relationship', query);
  return this;
};
Graph.prototype.get = function(){
  var req = this.query.build();
  this.query = new Query();
  return this.client.get(this.url + req.path, req.type);
};
Graph.prototype.save = function(json){
  var req = this.query.build();
  this.query = new Query();
  return this.client.post(this.url + req.path, req.type, { json : json });
};
Graph.prototype.update = function(json){
  var req = this.query.build();
  this.query = new Query();
  return this.client.put(this.url + req.path, req.type, { json : json });
};
Graph.prototype.remove = function(){
  var req = this.query.build();
  this.query = new Query();
  return this.client.del(this.url + req.path, req.type);
};
