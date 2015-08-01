/**
 * Created by anlihuer on 7/25/15.
 */

var CartItem = require('./cart_item.js');

function Cart() {
  this.cartItems = [];
}


Cart.prototype.getTotalPrice = function() {
  var total = 0;
  var cartItems = this.cartItems;
  for (var i in cartItems) {
    total += cartItems[i].getPrice() * (cartItems[i].count - cartItems[i].getPromotionCount());
  }
  return total;
};


Cart.prototype.getSaving = function() {
  var saving = 0;
  var cartItems = this.cartItems;
  for (var i in cartItems) {
    saving += cartItems[i].getPrice() * cartItems[i].getPromotionCount();
  }
  return saving;
};


Cart.prototype.add = function(cartItem) {
  var cartItems = this.cartItems;
  for (var val in cartItems) {
    if (cartItems[val].barcode === cartItem.barcode) {
      cartItems[val].count += cartItem.count;
      return;
    }
  }
  cartItems.push(new CartItem(cartItem.barcode, cartItem.count));
  return;
};


module.exports = Cart;
