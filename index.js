function receivesAFunction (callBack) {
    callBack();
}
function returnsANamedFunction() {
  const namedFn = function hasAName() {
    console.log("I have a name!");
  }
  return namedFn;
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is anonymous!");
    }
}