var Promotion = require('../../model/promotion.js');
describe("Promotion", function() {
  describe("constructor", function() {
    it("get promotion", function() {
      var promotion = new Promotion('BUY_TWO_GET_ONE', ['001', '004', '005']);
      expect(promotion.barcodes[0]).toBe('001');
    });
  });
});
