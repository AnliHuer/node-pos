var DateTime = require('../../model/date_time');

dateDigitToString = function(num) {
  return num < 10 ? '0' + num : num;
};
var currentDate = new Date(),
  year = dateDigitToString(currentDate.getFullYear()),
  month = dateDigitToString(currentDate.getMonth() + 1),
  date = dateDigitToString(currentDate.getDate()),
  hour = dateDigitToString(currentDate.getHours()),
  minute = dateDigitToString(currentDate.getMinutes()),
  second = dateDigitToString(currentDate.getSeconds()),
  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

describe("DateTime", function() {
  describe("date", function() {
    it("get current datetime", function() {
      var currentTime = new DateTime().date();
      expect(currentTime).toBe(formattedDateString);
    });
  });
});
