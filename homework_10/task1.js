function debounce(callback, delay ) {
  let result, mightInvoke = true, timer = null;

  return function() {
    if (mightInvoke) {
      result = callback.apply(this, arguments);
      mightInvoke = false;

      timer = setTimeout(function() {
        mightInvoke = true;
        clearTimeout(timer);
      }, delay);
    } 

    return result;
  }
}
// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
