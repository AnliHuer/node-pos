var CartItem = require('../../model/cart_item.js');

describe("CartItem", function() {
  describe("constructor", function() {
    it("get CartItem", function() {
      var cartItem = new CartItem('ITEM000000', 3);
      expect(cartItem.barcode).toBe('ITEM000000');
      expect(cartItem.count).toBe(3);
    });
  });


  describe("getName", function() {
    it("get cartItem name", function() {
      var cartItem = new CartItem('ITEM000000', 3);
      expect(cartItem.getName()).toBe('可口可乐');
    });
  });

  describe("getPrice", function() {
    it("get cartItem price", function() {
      var cartItem = new CartItem('ITEM000000', 3);
      expect(cartItem.getPrice()).toBe(3.00);
    });
  });

  describe("getUnit", function() {
    it("get cartItem unit", function() {
      var cartItem = new CartItem('ITEM000000', 3);
      expect(cartItem.getUnit()).toBe('瓶');
    });
  });


  describe("getPromotionCount", function() {
    it("get cartItem promotion count", function() {
      var cartItem = new CartItem('ITEM000000', 3);
      expect(cartItem.getPromotionCount()).toBe(1);
    });
  });

  describe("getSubTotal", function() {
    it("get cartItem subtotal", function() {
      var cartItem = new CartItem('ITEM000000', 3);
      expect(cartItem.getSubTotal()).toBe(6.00);
    });
  });
});
