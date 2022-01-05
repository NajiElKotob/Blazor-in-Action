
var BlazorInActionInterop = {}; //namespace

BlazorInActionInterop.setLocalStorage = function (key, data) {
    localStorage.setItem(key, data);
}
BlazorInActionInterop.getLocalStorage = function (key) {
    return localStorage.getItem(key);
}



