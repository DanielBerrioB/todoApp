function getTime(timeStamp) {
  const date = new Date(timeStamp);
  const day = date.getDate();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  const year = date.getFullYear() >= 10 ? date.getFullYear() : "0" + date.getMonth();
  return `${day}/${month}/${year}`;
}

module.exports = { getTime };
