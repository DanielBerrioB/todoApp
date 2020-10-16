function getTime(timeStamp) {
  var date = new Date(timeStamp);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  var year =
    date.getFullYear() >= 10 ? date.getFullYear() : "0" + date.getMonth();
  return day + "/" + month + "/" + year;
}

module.exports = { getTime };
