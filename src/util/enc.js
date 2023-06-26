export const encode = (string) => {
  return encodeURIComponent(btoa(encodeURIComponent(string)));
};
export const decode = (string) => {
  return decodeURIComponent(atob(decodeURIComponent(string)));
};
