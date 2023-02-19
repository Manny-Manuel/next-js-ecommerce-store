// more robust way to get items from localStorage
// the block try is a way  of handling error in javaScript,
// in case the application fail it is not going to brake the app
// it will throw an error

export function getLocalStorage(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (err) {
    return undefined;
  }
}

// more robust way to set Items to localStorage
export function setLocalStorage(key, value) {
  // if browser different undefined/not assigned
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
