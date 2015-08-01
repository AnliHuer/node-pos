var Cart = require('../../model/cart.js');
var CartItem = require('../../model/cart_item.js');
describe("Cart", function() {

  describe('getTotalPrice', function() {
    it('get total_price', function() {
      var cart = new Cart();
      cart.cartItems = [new CartItem('ITEM000000', 3), new CartItem('ITEM000003', 2)];
      expect(cart.getTotalPrice()).toBe(36.00);
    });
  });


  describe('getSaving', function() {
    it('get saving', function() {
      var cart = new Cart();
      cart.cartItems = [new CartItem('ITEM000000', 3), new CartItem('ITEM000003', 2)];
      expect(cart.getSaving()).toBe(3.00);
    });
  });

  describe('add', function() {
    it('add', function() {
      var cart = new Cart();
      cart.cartItems = [new CartItem('ITEM000000', 3), new CartItem('ITEM000003', 2)];
      cart.add({
        barcode: 'ITEM000000',
        count: 2
      });
      expect(cart.cartItems[0].barcode).toBe('ITEM000000');
      expect(cart.cartItems[0].count).toBe(5);
    });
  });
});
