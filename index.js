var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var arr = [];
  for (var i = 0; i<katzDeli.length; i++) {
    arr.push(`'Welcome ${katzDeli[i]}. You are number ${i+1} in line.'`) ;
  }
  return arr;
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var arr = [];
  for (var i = katzDeliLine.length; i < katzDeliLine.length+1; i++) {
    arr.push(`Welcome, ${name}. You are number ${i} in line.`) ;
  }
  return arr;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return ("There is nobody waiting to be served!");
  }
  var m = katzDeliLine.shift();
  return (`Currently serving ${m}.`);
}

function currentLine(line) {
  if (line.length == 0) {
    return 'The line is currently empty.';
  } else {
    var output1 = 'The line is currently: ';
    // var output2 = [];
    for(var i = 0; i < line.length; i++) {
      output1 += `${i+1}. ${line[i]}`;
      if (i < line.length - 1) {
        output1 += ', ';
      }
    }
    //output2.push(`The line is currently: ${output1}`);
    return output1;
  }
}
