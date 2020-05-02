let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunc);

var oldValue = 0;
var i = 1;

function myFunc() {
  let n = document.getElementById("number").value;
  n = parseInt(oldValue) + parseInt(n);
  for (; i <= n; i++) {
    var box = document.createElement("div");
    box.classList.add("myDiv");
    document.getElementById("box").appendChild(box);
    box.innerHTML = i;

    var oldValue = document.getElementById("box").lastElementChild.innerHTML;
    console.log(oldValue);
  }
}
