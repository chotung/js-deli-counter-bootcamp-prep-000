var katzDeli = [];

function takeANumber(katzDeliLine, name)  {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}

function nowServing (katzDeliLine)  {
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine)  {
  if(katzDeliLine.length > 0) {
    
    var current = "The line is currently:";
    
    for(let i = 0; i < katzDeliLine.length; i++) {
     if(i > 0)  {
       current += ',';
     }
     current += ' ' + (i+1) + ". ";
     current += katzDeliLine[i];
     }
    return current;
   
  }
  else{
    return "The line is currently empty.";
  }
}

var counter = 0;
var toBeServ = 0;

function takeANumber() {
  counter++;
  return `Welcome you are number ${counter}`;
}

function nextToServe () {
  if(counter > toBeServe)  {
    toBeServed++
    return toBeServe;
  }
  else{
    return "no 1"
  }
}


function nowServing (katzDeliLine)  {
  if(counter > 0){
    return `Currently serving ${counter}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}