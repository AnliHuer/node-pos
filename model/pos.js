/**
 * Created by anlihuer on 7/25/15.
 */

var DateTime = require('./date_time.js');

function Pos() {}



Pos.prototype.setItemString = function(cart) {
  var itemString = '';
  //var cart = this.cart;
  cart.cartItems.forEach(function(val) {
    itemString += "名称：" + val.getName() +
      "，数量：" + val.count + val.getUnit() +
      "，单价：" + val.getPrice().toFixed(2) + "(元)" +
      "，小计：" + val.getSubTotal().toFixed(2) + "(元)" + "\n";
  });
  return itemString;
};


Pos.prototype.setPromotionString = function(cart) {
  var promotionString = '';
  //var cart = this.cart;
  cart.cartItems.forEach(function(val) {
    if (val.getPromotionCount()) {
      promotionString += "名称：" + val.getName() +
        "，数量：" + val.getPromotionCount() + val.getUnit() + "\n";
    }
  });
  return promotionString;
};


Pos.prototype.setTestString = function(cart) {
  var resultString = '';
  var temp = cart.getTotalPrice();
  var printString = "***<没钱赚商店>收据***\n" +
    "打印时间：" + new DateTime().date() + "\n" +
    "----------------------\n" +
    this.setItemString(cart) +
    "----------------------\n" +
    "挥泪赠送商品：\n" +
    this.setPromotionString(cart) +
    "----------------------\n" +
    "总计：" + cart.getTotalPrice().toFixed(2) + "(元)\n" +
    "节省：" + cart.getSaving().toFixed(2) + "(元)\n" +
    "**********************";

  return printString;
};

module.exports = Pos;
