var allItems = require('../../model/load_all_items.js');
describe("loadAllItems", function() {
  it("get all item", function() {
    expect(allItems[0].barcode).toBe('ITEM000000');
    expect(allItems[0].name).toBe('可口可乐');
    expect(allItems[0].unit).toBe('瓶');
    expect(allItems[0].price).toBe(3.00);

  });
});
