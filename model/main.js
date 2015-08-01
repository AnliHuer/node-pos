var Scanner = require('./scanner.js');
var Cart = require('./cart.js');
var Pos = require('./pos.js');

function printReceipt(inputs) {
  var scanner = new Scanner();
  var cart = new Cart();
  inputs.forEach(function(val) {
    var cartItem = scanner.scan(val);
    cart.add(cartItem);
  });
  var pos = new Pos();
  console.log(pos.setTestString(cart));
}

module.exports = printReceipt;
