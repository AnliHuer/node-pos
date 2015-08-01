var Item = require('../../model/item.js');
describe("Item", function() {
  describe("constructor", function() {
    it("create item", function() {
      var item = new Item('001', '雪碧', '瓶', 2);
      expect(item.barcode).toBe('001');
      expect(item.name).toBe('雪碧');
      expect(item.unit).toBe('瓶');
      expect(item.price).toBe(2);
    });
  });
});
