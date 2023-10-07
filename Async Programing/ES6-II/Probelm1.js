function CustomArray() {
    // Create an array to store elements
    this.elements = [];
  
    // Initialize size based on the number of arguments
    this.size = arguments.length;
  
    // Add the arguments as key(index) value pairs in the Array object
    for (let i = 0; i < arguments.length; i++) {
      this.elements[i] = arguments[i];
    }
  }
  
  // Add methods to the Array prototype
  CustomArray.prototype = {
    push: function (element) {
      this.elements.push(element);
      this.size++;
    },
  
    pop: function () {
      if (this.size === 0) {
        return undefined; // Empty stack, nothing to pop
      }
      const poppedElement = this.elements.pop();
      this.size--;
      return poppedElement;
    },
  
    top: function () {
      if (this.size === 0) {
        return undefined; // Empty stack, nothing at the top
      }
      return this.elements[this.size - 1];
    },
  
    print: function () {
      console.log('[' + this.elements.join(',') + ']');
    },
  
    printReverse: function () {
      console.log('[' + this.elements.reverse().join(',') + ']');
    }
  };
  
  // Example usage
  const customArray = new CustomArray(1, 2, 3, 4);
  console.log('Initial Stack:');
  customArray.print(); // Output: [1,2,3,4]
  
  customArray.push(5);
  console.log('After Push:');
  customArray.print(); // Output: [1,2,3,4,5]
  
  customArray.pop();
  console.log('After Pop')
  