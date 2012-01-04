var TaikoKenchi = require('./taikokenchi');
var Graph = require('../lib'); 
var graph = new Graph('http://localhost:7474');

var tests = {
  'get root' : function(test){
    var get_root = graph.get.root();
    get_root.on('end', function(res){
      test.equal(res.is_success, true);
      test.finish();
    });
    get_root.on('error', function(res){
      test.error();
    });
  },
  'get node' : function(test){
    var get_node = graph.get.node(1);
    get_node.on('end', function(res){
      test.equal(res.is_success, true);
      test.equal(res.content.self, 'http://localhost:7474/db/data/node/1');
      test.finish();
    });
    get_node.on('error', function(res){
      test.error();
    });
  },
  'get property' : function(test){
    var get_property = graph.get.property(1, 'foo');
    get_property.on('end', function(res){
      test.equal(res.is_success, true);
      test.equal(res.content, 'bar');
      test.finish();
    });
    get_property.on('error', function(res){
      test.error();
    });
  }
};
var taikokenchi = new TaikoKenchi(tests);
taikokenchi.run();
