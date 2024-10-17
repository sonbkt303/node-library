const express = require('express')
const app = express()
const port = 3000

// Magic number
const MAGIC_NUMBER = 42

// Global variable
global.someGlobalVar = 'I am global!'

console.log('1111111');
app.get('/', (req, res) => {
  // Duplicated code
  console.log('1111111');
  res.send('Hello World!')
})

const b = 2;
// Long function
function longFunction() {
  console.log('Doing something...');
  for (let i = 0; i < MAGIC_NUMBER; i++) {
    console.log(i);
  }
  console.log('Done something.');
}

longFunction();

// Commented-out code
// app.get('/old-route', (req, res) => {
//   res.send('This route is deprecated')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})