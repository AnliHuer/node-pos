var Pos = require('../../model/pos.js');
var Cart = require('../../model/cart.js');
var CartItem = require('../../model/cart_item.js');
var DateTime = require('../../model/date_time.js');
describe("Pos", function() {
  describe("setItemString", function() {
    it("print item", function() {
      var itemString = '';
      var cart = new Cart();
      cart.cartItems = [new CartItem('ITEM000000', 3), new CartItem('ITEM000003', 2)];
      for (var i = 0; i < cart.cartItems.length; i++) {
        itemString += "名称：" + cart.cartItems[i].getName() +
          "，数量：" + cart.cartItems[i].count + cart.cartItems[i].getUnit() +
          "，单价：" + cart.cartItems[i].getPrice().toFixed(2) + "(元)" +
          "，小计：" + cart.cartItems[i].getSubTotal().toFixed(2) + "(元)" + "\n";
      }
      var pos = new Pos();
      expect(pos.setItemString(cart)).toBe(itemString);
    });

  });


  describe("setPromotionString", function() {
    it("print item", function() {
      var promotionString = '';
      var cart = new Cart();
      cart.cartItems = [new CartItem('ITEM000000', 3), new CartItem('ITEM000003', 2)];
      for (var i = 0; i < cart.cartItems.length; i++) {
        if (cart.cartItems[i].getPromotionCount()) {
          promotionString += "名称：" + cart.cartItems[i].getName() +
            "，数量：" + cart.cartItems[i].getPromotionCount() + cart.cartItems[i].getUnit() + "\n";
        }
      }
      var pos = new Pos();
      expect(pos.setPromotionString(cart)).toEqual(promotionString);
    });
  });

  describe("setTestString", function() {
    it("print item", function() {
      var cart = new Cart();
      cart.cartItems = [new CartItem('ITEM000000', 3), new CartItem('ITEM000003', 2)];
      var pos = new Pos();
      expect(pos.setTestString(cart)).toBe(
        "***<没钱赚商店>收据***\n" +
        "打印时间：" + new DateTime().date() + "\n" +
        "----------------------\n" +
        pos.setItemString(cart) +
        "----------------------\n" +
        "挥泪赠送商品：\n" +
        pos.setPromotionString(cart) +
        "----------------------\n" +
        "总计：" + cart.getTotalPrice().toFixed(2) + "(元)\n" +
        "节省：" + cart.getSaving().toFixed(2) + "(元)\n" +
        "**********************"
      );
    });
  });
});
