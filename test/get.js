var TaikoKenchi = require('./taikokenchi');
var Graph = require('../lib'); 
var graph = new Graph('http://localhost:7474');

var tests = {
  'get node' : function(test){
    var get_node = graph.node(1).get();
    get_node.on('end', function(res){
      test.equal(res.is_success, true);
      test.equal(res.content.self, 'http://localhost:7474/db/data/node/1');
      test.equal(res.message, 'OK');
      test.finish();
    });
    get_node.on('error', function(res){
      test.error();
    });
  },
  'get properties' : function(test){
    var get_properties = graph.node(1).properties().get();
    get_properties.on('end', function(res){
      test.equal(res.is_success, true);
      test.equal(res.content.foo, 'bar');
      test.equal(res.message, 'OK');
      test.finish();
    });
    get_properties.on('error', function(res){
      test.error();
    });
  },
  'get property' : function(test){
    var get_property = graph.node(1).properties('foo').get();
    get_property.on('end', function(res){
      test.equal(res.is_success, true);
      test.equal(res.content, 'bar');
      test.equal(res.message, 'OK');
      test.finish();
    });
    get_property.on('error', function(res){
      test.error();
    });
  }
};
var taikokenchi = new TaikoKenchi(tests);
taikokenchi.run();
