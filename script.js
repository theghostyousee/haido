var x = ["0", "1"];

function generateMixed(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    let id = Math.ceil(Math.random() * 80);
    res += x[id];
  }
  return res;
}

function clickonbody() {
  var text = "I'm verifying my identity for @PlaoNFT.%0a%0a";
  var hash = "0x" + generateMixed(50);
  window.location.href = "https://twitter.com/intent/tweet?&text=\n" + text;
}

window.onload = function () {
  document.getElementsByName("a")[0].addEventListener("change", doThing);
  function doThing() {
    clickonbody();
  }
};
