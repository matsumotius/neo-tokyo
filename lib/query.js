var path = {
  'index.node' : function(params){
    return '/index/node/' + params.index.value;
  },
  'index.relationship' : function(params){
    return '/index/relationship/' + params.index.value;
  },
  'node' : function(params){
    return '/node/' + params.node.value;
  },
  'node.properties' : function(params){
    return '/node/' + params.node.value + '/properties/' + params.properties.value;
  },
  'node.relationships' : function(params){
    return '/node/' + params.node.value + '/relationships/' + params.relationships.value;
  },
  'relationship' : function(params){
    return '/relationship/' + params.relationship.value;
  },
  'relationship.properties' : function(params){
    return '/relationship/' + params.relationship.value + '/properties/' + params.properties.value;
  }
};
var type = {
  // index, node, properties, relationship
  'index.node'              : 'index',
  'index.relationship'      : 'index',
  'node'                    : 'node',
  'node.properties'         : 'properties',
  'node.relationships'      : 'relationship',
  'relationship'            : 'relationship',
  'relationship.properties' : 'properties'
};
var Query = module.exports = function(){
  this.path = path;
  this.type = type;
  this.keys = ['index', 'node', 'relationship', 'relationships', 'property', 'properties'];
  this.params = {};
  for(var i=0;i<this.keys.length;i++){
    this.params[this.keys[i]] = { is_set : false, value : '' };
  }
};
Query.prototype.get_pattern = function(){
  var pattern = '';
  for(var i=0;i<this.keys.length;i++){
    var key = this.keys[i];
    if(this.params[key].is_set) pattern += (key + '.');
  }
  return pattern.replace(/\.$/, '');
};
Query.prototype.reset_params = function(){
  this.params = {};
  for(var i=0;i<this.keys.length;i++){
    this.params[this.keys[i]] = { is_set : false, value : '' };
  }
};
Query.prototype.get_path = function(pattern){
  if(pattern in this.path) return this.path[pattern](this.params);
};
Query.prototype.build = function(){
  var pattern = this.get_pattern();
  return { path : this.get_path(pattern), type : this.type[pattern] };
};
Query.prototype.set = function(key, value){
  if(key in this.params){
    this.params[key] = { 
      is_set : true,
      value  : value == undefined || value == null ? '' : value
    };
  }
};
