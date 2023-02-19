import Cookies from 'js-cookie';

// more robust way of get  cookies without parsing all the time
export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);
  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue); // type should be string
  } catch (err) {
    return undefined;
  }
}

// more robust way to set Items to set cookies without stringify all the time
export function setLocalStorage(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
