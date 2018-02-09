function takeANumber(line, person) {
  line.push(person);

  return `Welcome, ${person}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (!line.length) {
    return `There is nobody waiting to be served!`;
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line, person) {
  if (!line.length) {
    return `The line is currently empty.`
  }

  const numberName =  []

  for (let i = 0; l = line.length; i < l; i++) {
    // return `The line is currently: ${}`
  }
}
