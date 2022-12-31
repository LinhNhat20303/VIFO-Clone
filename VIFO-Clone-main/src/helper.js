export function formatCurrency(value) {
  if (value) {
    return value
      .toString()
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0;
}
export function randomString(
  length = 12,
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
export function CONVERT_TO_DATE(date) {
  var string = new Date(date);
  if (date) {
    return string.toLocaleDateString("en-US").substring(0, 10);
  }
  return null;
}
export function showStringLength(str, strLength) {
  if (str.length > strLength) {
    str = str.substring(0, strLength);
    return str + "...";
  }
  return str;
}
