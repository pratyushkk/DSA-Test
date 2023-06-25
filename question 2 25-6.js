const queue = [];

function enqueue(item) {
  queue.push(item);
}

function dequeue() {
  if (queue.length === 0) {
    return null;
  }

  const item = queue.shift();
  return item;
}

function isEmpty() {
  return queue.length === 0;
}

console.log(isEmpty()); // true
enqueue("item1");
enqueue("item2");
enqueue("item3");
console.log(isEmpty()); // false
console.log(dequeue()); // item1
console.log(dequeue()); // item2
console.log(dequeue()); // item3
console.log(isEmpty()); // true
