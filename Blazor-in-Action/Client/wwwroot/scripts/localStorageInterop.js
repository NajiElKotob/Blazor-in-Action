
var localStorageInterop = {}; //namespace

localStorageInterop.setLocalStorage = function (key, data) {
    localStorage.setItem(key, data);
}
localStorageInterop.getLocalStorage = function (key) {
    return localStorage.getItem(key);
}



