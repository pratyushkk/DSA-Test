const stack = [];

function push(item) {
  stack.push(item);
}

function pop() {
  return stack.pop();
}

function isEmpty() {
  return stack.length === 0;
}

console.log(isEmpty()); // true
push("item1");
push("item2");
push("item3");
console.log(isEmpty()); // false
console.log(pop()); // item3
console.log(pop()); // item2
console.log(pop()); // item1
console.log(isEmpty()); // true
