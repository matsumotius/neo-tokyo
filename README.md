# neo-tokyo
neo-tokyo(ネオ東京) is a driver for neo4j in node.

# Usage
```javascript
var Graph = require('./lib');
var graph = new Graph('http://localhost:7474');

// save node
var save_node = graph.node().save({ foo : 'bar' });
save_node.on('end', function(res){
  console.log(res);
});
save_node.on('error', function(res){
  console.log(res);
});

// get property
var get_property = graph.node(1).properties('foo').get();
get_property.on('end', function(res){
  console.log(res);
});
get_property.on('error', function(res){
  console.log(res);
});
```

## License

(The MIT License)

Copyright (c) 2012 myatsumoto &lt;myatsumoto@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

