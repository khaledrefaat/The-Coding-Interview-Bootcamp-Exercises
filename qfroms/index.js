// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// [1, 2, 3]
// [3, 2, 1]

const Stack = require('./stack');

// This is my solution and it is just like stephen's solution
class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(item) {
    this.firstStack.push(item);
  }

  peek() {
    // reverse the data in firstStack and store it in secondStack
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    // get the record of the peek you want and store it in a variable
    const record = this.secondStack.peek();
    // re delete the items in second stack and store it back as it was at the first stack
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return record;
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    const record = this.secondStack.pop();
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return record;
  }
}

module.exports = Queue;
