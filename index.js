function takeANumber(line, person) {
  line.push(person);

  return `Welcome, ${person}. You are number ${line.length} in line.`
}


function nowServing(line, person) {
  if (!line.length) {
    return `There is nobody waiting to be served!`;
  }

  return `Currently serving ${line.shift(person)}.`
}

function currentLine(line, person) {
  if (!line.length) {
    return `The line is currently empty.`
  }
}