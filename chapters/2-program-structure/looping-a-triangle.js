// Solution 1
let message = '#'
for (let i = 1; i <= 7; i++) {
  console.log(message)
  message += '#';
}

console.log('-'.repeat(10));

// Solution 2
for (let n = 1; n <=7; n++){
  console.log('#'.repeat(n))
}

console.log('-'.repeat(10));

// Solution 3
let logMessage = '#'
while(logMessage.length < 8) {
  console.log(logMessage)
  logMessage +='#'
}