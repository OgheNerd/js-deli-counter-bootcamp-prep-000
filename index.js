function takeANumber(line, person) {
  line.push(person);

  return `Welcome, ${person}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (!line.length) {
    return `There is nobody waiting to be served!`;
  }
}
