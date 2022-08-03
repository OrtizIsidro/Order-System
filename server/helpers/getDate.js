const getDate = () => {
  const date = new Date().toString().split(" ").splice(0, 4).join("-");
  return date;
};
module.exports = getDate;
