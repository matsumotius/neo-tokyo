var TaikoKenchi = require('./taikokenchi');
var Graph = require('../lib');

var graph = new Graph('http://localhost:7474'); 
var tests = {
  'build query' : function(test){
    var query = graph.node(1).properties().query.build();
    test.equal(query.path, '/node/1/properties/');
    test.finish()
  }
};
var taikokenchi = new TaikoKenchi(tests);
taikokenchi.run();
