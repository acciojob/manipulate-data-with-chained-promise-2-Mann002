 function getArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);  // Initial array
        }, 3000);
      });
    }

    // Function to filter even numbers with 1s delay
    function filterEvenNumbers(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = arr.filter(num => num % 2 === 0);
          document.getElementById("output").textContent = evens.join(",");
          resolve(evens);
        }, 1000);
      });
    }

    // Function to multiply numbers by 2 with 2s delay
    function multiplyByTwo(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = arr.map(num => num * 2);
          document.getElementById("output").textContent = doubled.join(",");
          resolve(doubled);
        }, 2000);
      });
    }

    // Chaining promises
    getArray()
      .then(filterEvenNumbers)  // First transformation
      .then(multiplyByTwo);  