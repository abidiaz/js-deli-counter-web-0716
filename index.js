var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0) 
    return "There is nobody waiting to be served!"
  else 
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently: "
    katzDeliLine.forEach(function(person, index){
      string += `${index +1}. ${person}, `;
    }); 
       return string.slice(0, -2);
    }
}