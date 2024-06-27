function computeAge(dob, today) {
  var today = today || new Date(),
    result = {
      years: 0,
      months: 0,
      days: 0,
      toString: function () {
        return (
          (this.years ? this.years : "")
          // (this.years ? this.years + " ปี " : "") +
          // (this.months ? this.months + " เดือน " : "") +
          // (this.days ? this.days + " วัน" : "")
        );
      },
    };
  result.months =
    today.getFullYear() * 12 +
    (today.getMonth() + 1) -
    (dob.getFullYear() * 12 + (dob.getMonth() + 1));
  if (0 > (result.days = today.getDate() - dob.getDate())) {
    var y = today.getFullYear(),
      m = today.getMonth();
    m = --m < 0 ? 11 : m;
    result.days +=
      [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m] +
      (1 == m && y % 4 == 0 && (y % 100 > 0 || y % 400 == 0) ? 1 : 0);
    --result.months;
  }
  result.years = (result.months - (result.months % 12)) / 12;
  result.months = result.months % 12;
  return result;
}
export default computeAge;
