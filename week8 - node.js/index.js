
console.log('Starting ....\n');

// const calc = require('./calc.js')

// const array = [1,3,6,9]

// const res = calc.sum(array);

// console.log("The result is: "+res+'\n');



var node = require('./8.1.js')
node.automorphic(9)
node.automorphic(25)



var node1 = require('./8.2.stack.js')
var stack = new node1.Stack();

stack.push(8);
stack.push(9);
stack.push(1);
console.log(stack.printStack());
console.log('After popping')
stack.pop()
console.log(stack.printStack());




var node2 = require('./8.2.queue.js')
var q = new node2.Queue();
q.enqueue(10)
q.enqueue(11)
q.enqueue(12)
console.log(q.printQueue());
console.log('After dequeue')
q.dequeue()
console.log(q.printQueue());



var node3 = require('./8.3.js')
node3.circ_area(5);
node3.rect_area(5,6);
node3.tri_area(5,6);