var TaikoKenchi = require('./taikokenchi');
var Graph = require('../lib'); 
var graph = new Graph('http://localhost:7474');

var tests = {
  'update node' : function(test){
    var update_node = graph.update.node(1, { bar : 'foo' });
    update_node.on('end', function(){
      var get_node = graph.get.node(1);
      get_node.on('end', function(res){
        test.equal(res.is_success, true);
        test.equal(res.content.self, 'http://localhost:7474/db/data/node/1');
        test.finish();
      });
      get_node.on('error', function(res){
        test.error();
      });
    });
    update_node.on('error', function(){
      test.error();
    });
  }
};
var taikokenchi = new TaikoKenchi(tests);
taikokenchi.run();
