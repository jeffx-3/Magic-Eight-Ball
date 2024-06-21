
let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I become a successful developer?';

// Log the user's question, including their name if provided
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

// Step 5: Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// array of possible answers
const answers = [
  'It is certain',
  'It is decidedly so',
  'Reply hazy, try again',
  'Cannot predict now',
  'Do not count on it',
  'My sources say no',
  'Outlook not so good',
  'Signs point to yes'
];
// Get the answer based on the random number
let eightBallAnswer = answers[randomNumber];

// Log the answer
console.log(`The Magic Eight Ball says: ${eightBallAnswer}`);
