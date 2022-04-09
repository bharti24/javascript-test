

// Write Javascript code!
//get id of all the buttons
let pro1 = document.getElementById("product-1");
let pro2 = document.getElementById('product-2');
let pro3 = document.getElementById('product-3');
let pro4 = document.getElementById('product-4');
let pro5 = document.getElementById('product-5');
let pro6 = document.getElementById('product-6');
let pro7 = document.getElementById('product-7');


//add function on onclick of all the buttons
pro1.addEventListener("click", function(){addwish(pro1)});
pro2.addEventListener("click", function(){addwish(pro2)});
pro3.addEventListener("click", function(){addwish(pro3)});
pro4.addEventListener("click", function(){addwish(pro4)});
pro5.addEventListener("click", function(){addwish(pro5)});
pro6.addEventListener("click", function(){addwish(pro6)});
pro7.addEventListener("click",function(){addwish(pro7)});


//function to print wishlist of product
function addwish(a){
  var ul = document.getElementById("wishlist");
  var value = a.getAttribute('data-name');
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value))
  ul.appendChild(li);
  a.disabled = true;
}