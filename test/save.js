var TaikoKenchi = require('./taikokenchi');
var Graph = require('../lib'); 

var graph = new Graph('http://localhost:7474');
var tests = {
  'save node' : function(test){
    var save_node = graph.node().save({ foo : 'bar' });
    save_node.on('end', function(res){
      test.equal(res.is_success, true);
      test.finish();
    });
    save_node.on('error', function(res){
      test.error();
    });
  }
};
var taikokenchi = new TaikoKenchi(tests);
taikokenchi.run();
