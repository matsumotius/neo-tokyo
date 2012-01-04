var TaikoKenchi = require('./taikokenchi');
var Query = require('../lib/query'); 

var tests = {
  'get pattern' : function(test){
    var query = new Query();
    query.set('node', 1);
    query.set('index', 1);
    test.equal(query.get_pattern(), 'index.node');
    test.finish();
  },
  '/node' : function(test){
    var query = new Query();
    query.set('node');
    test.equal(query.get_path('node'), '/node/');
    test.finish();
  },
  '/node/:id' : function(test){
    var query = new Query();
    query.set('node', 1);
    test.equal(query.get_path('node'), '/node/1');
    test.finish();
  },
  '/node/:id/property' : function(test){
    var query = new Query();
    query.set('node', 1);
    test.equal(query.get_path('node.properties'), '/node/1/properties/');
    test.finish();
  },
  '/node/:id/property/:key' : function(test){
    var query = new Query();
    query.set('node', 1);
    query.set('properties', 'foo');
    test.equal(query.get_path('node.properties'), '/node/1/properties/foo');
    test.finish();
  },
  '/node/:id/relationships' : function(test){
    var query = new Query();
    query.set('node', 1);
    query.set('relationships');
    test.equal(query.get_path('node.relationships'), '/node/1/relationships/');
    test.finish();
  },
  '/relationship/:id' : function(test){
    var query = new Query();
    query.set('relationship', 1);
    test.equal(query.get_path('relationship'), '/relationship/1');
    test.finish();
  },
  '/relationship/:id/properties' : function(test){
    var query = new Query();
    query.set('relationship', 1);
    query.set('properties');
    test.equal(query.get_path('relationship.properties'), '/relationship/1/properties/');
    test.finish();
  },
  '/relationship/:id/properties/:key' : function(test){
    var query = new Query();
    query.set('relationship', 1);
    query.set('properties', 'foo');
    test.equal(query.get_path('relationship.properties'), '/relationship/1/properties/foo');
    test.finish();
  }
};
var taikokenchi = new TaikoKenchi(tests);
taikokenchi.run();
