let HTML_number = document.getElementById("num1");
let CSS_number = document.getElementById("num2");
let JS_number = document.getElementById("num3");

let HTML_counter = 0;
let CSS_counter = 0;
let JS_counter = 0;

let htmlInterval = setInterval(() => {
  if (HTML_counter >= 31) {
    clearInterval(htmlInterval);
  } else {
    HTML_counter += 1;
    HTML_number.innerHTML = HTML_counter + "%";
  }
}, 60);

let cssInterval = setInterval(() => {
  if (CSS_counter >= 56) {
    clearInterval(cssInterval);
  } else {
    CSS_counter += 1;
    CSS_number.innerHTML = CSS_counter + "%";
  }
}, 35);

let jsInterval = setInterval(() => {
  if (JS_counter >= 13) {
    clearInterval(jsInterval);
  } else {
    JS_counter += 1;
    JS_number.innerHTML = JS_counter + "%";
  }
}, 170);