// Challenge #1
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //   1.
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(`${this.question} \n ${this.options.join('\n')}`)
    );

    // Register answer
    if (typeof answer === 'number' && answer <= this.answers.length - 1) {
      this.answers[answer]++;
    } else {
      console.log('Try again!');
      return;
    }

    // Get type
    let type = '';
    type = prompt('How do you want to display the results (string or array)?');
    this.displayResults(type);
  },

  // 3.
  displayResults(type = 'array') {
    if (type === 'array' || type === '') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    } else {
      console.log('Wrong type, try again!');
    }
  },
};

// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const data1Display = poll.displayResults.call({ answers: data1 }, 'string');
const data2Display = poll.displayResults.call({ answers: data2 }, 'array');
*/

// Challenge #2
// Function is called immediately and only once
(function () {
  const header = document.querySelector('h1');
  // Header color is changed to red once
  header.style.color = 'red';
  // Even though the parent function has finished executing, the callback function in the eventListener is still present. It has closed over the IIFE function and its header variable, preserving them in the closure's Variable Environment.
  document.body.addEventListener('click', () => {
    // Toggle colors
    header.style.color === 'blue'
      ? (header.style.color = 'red')
      : (header.style.color = 'blue');
  });
})();
