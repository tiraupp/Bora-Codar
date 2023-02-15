function insert(num) {
  var number = document.getElementById("last-calc").innerHTML;
  var result = document.getElementById("result-display").innerHTML;
  if ((num == '/')||(num == '-')||(num == '+')||(num ==  '*')) {
    if (result == '0') {
      if (number == '0') {
        document.getElementById("last-calc").innerHTML = '0';
      } else {
      document.getElementById("last-calc").innerHTML = number+num;
      }
    } else {
        document.getElementById("last-calc").innerHTML = result+num;
        document.getElementById("result-display").innerHTML = '0';
    }
  } else {
    if (result == '0') {
      if (number == '0') {
        document.getElementById("last-calc").innerHTML = num;
      } else {
      document.getElementById("last-calc").innerHTML = number+num;
      }
    } else {
        document.getElementById("last-calc").innerHTML = num;
        document.getElementById("result-display").innerHTML = '0';
    }
  } 
} 

function result() {
  var result = document.getElementById("last-calc").innerHTML;
  var calc = eval(result);
  if (calc % 1 == 0) {
    document.getElementById("result-display").innerHTML = calc;
  } else {
    document.getElementById("result-display").innerHTML = calc.toFixed(4);
  }
}

function ce() {
  document.getElementById("last-calc").innerHTML = '0';
  document.getElementById("result-display").innerHTML = '0';
}

function back() {
  var result = document.getElementById("last-calc").innerHTML;
  if (result != '0') {
    if (result.length >= 1){
      document.getElementById("last-calc").innerHTML = result.substring(0, result.length -1);
      if (result.length == 1){
        document.getElementById("last-calc").innerHTML = '0';
      } 
    } 
  }
}

function invert() {
  var result = parseFloat(document.getElementById("result-display").innerHTML);
  if (result != '0') {
    result = -result;
    document.getElementById("result-display").innerHTML = result;
  }
}

function percent() {
  var result = document.getElementById("last-calc").innerHTML;
  var percent = result.split(/[-/+*]/);
  var number = result.substring(0, result.length -percent[1].length);
  var calc = parseFloat(number) * (percent[1]/100);
  if (result != '0') {
    document.getElementById("last-calc").innerHTML = result +'%';
    document.getElementById("result-display").innerHTML = eval(number+calc);
  } 
} 