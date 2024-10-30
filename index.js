const express = require('express')
const app = express()
const port = 3000

const MAGIC_NUMBER = 42

console.log('Initializing server...');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const b = 2;

function longFunction() {
  console.log('Doing something...');
  for (let i = 0; i < MAGIC_NUMBER; i++) {
    console.log(i);
    // Deeply nested loop
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 5; k++) {
        console.log(`Nested loop: ${i}, ${j}, ${k}`);
      }
    }
  }
  // Magic number
  let result = 0;
  for (let m = 0; m < 100; m++) {
    result += m;
  }
  console.log('Done something.');
  // Unused variable
  let unusedVar = 'This variable is never used';
}


const c = '12312312';

const aslnl123 = 'asdasd';

const aslnl123 = 'asdasd';
const aslnl123 = 'asdasd';

longFunction();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



const mike123123 = 'asdasd';


const sonbkt303 = '123123';

const lana123123455 = 1;