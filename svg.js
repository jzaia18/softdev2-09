var clear = function() {
  while (slate.children[0])
    slate.removeChild(slate.children[0]);
};

var addCirc = function(e) {
  var circ = document.createElementNS(NS, "circle");
  circ.setAttribute("cx", e.offsetX);
  circ.setAttribute("cy", e.offsetY);
  circ.setAttribute("r", 20);
  circ.setAttribute("fill", "lightsteelblue");
  circ.addEventListener("click", circhameleon);
  slate.appendChild(circ);
};

var circhameleon = function(e) {
  e.stopPropagation();
  if (e.srcElement.getAttribute("fill") == "palevioletred") {
    slate.removeChild(e.srcElement);
    addCirc({offsetX: Math.random() * 500, offsetY: Math.random() * 500}); //cheaty but legal
  }
  else
    e.srcElement.setAttribute("fill", "palevioletred");
};

var NS = "http://www.w3.org/2000/svg";

var slate = document.getElementById("slate");
slate.addEventListener("click", addCirc);
document.getElementById("clear").addEventListener("click", clear);
