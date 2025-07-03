// formUtils.js
function isFormValid(name, item, qty, addr) {
  return name !== '' && item !== '' && qty > 0 && addr !== '';
}

module.exports = { isFormValid };
