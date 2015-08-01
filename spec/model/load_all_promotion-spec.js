var allPromotion = require('../../model/load_all_promotion.js');

describe("loadAllPromotion", function() {
  it("get all promotion", function() {
    expect(allPromotion[0].type).toBe('BUY_TWO_GET_ONE_FREE');
    expect(allPromotion[0].barcodes[0]).toBe('ITEM000000');
  });
});
