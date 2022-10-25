export const getStorge = (key: string) => {
  const value: any = sessionStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return "";
  }
};

export const setStorge = (key: string, value: any) => {
  if (key && value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeToken = (key: string) => {
  sessionStorage.removeItem(key);
};

export const clearStorge = () => {
  sessionStorage.clear();
};
