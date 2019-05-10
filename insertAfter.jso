var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);
var span = document.createElement("span");

child.after(span);

console.log(parent.outerHTML);
// "<div><p></p><span></span></div>"

var parent = document.createElement("div");
var child = document.createElement("p"); 
parent.appendChild(child);

child.after("Text"); 

console.log(parent.outerHTML);
// "<div><p></p>Text</div>"

var parent = document.createElement("div");
var child = document.createElement("p"); 
parent.appendChild(child); 
var span = document.createElement("span");

child.after(span, "Text"); 

console.log(parent.outerHTML);
// "<div><p></p><span></span>Text</div>"
