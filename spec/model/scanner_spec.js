var Scanner = require('../../model/scanner.js');
describe("Scanner", function() {
  var result = {
    barcode: '001',
    count: 2
  };
  describe("scan", function() {
    it("scan inputs", function() {
      var scanner = new Scanner();
      var cartItem = scanner.scan('001-2');
      expect(cartItem.barcode).toBe(result.barcode);
      expect(cartItem.count).toBe(result.count);
    });
  });
});
