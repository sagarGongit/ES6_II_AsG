let arr = [1,2,3,4];
   function Array(arr){
       this.arr = arr;
    }
    Array.prototype.push = function(ele,arr){
        arr.push(ele);
        console.log(arr);
    }
    Array.prototype.pop = function(arr){
       arr.pop();
       console.log(arr);
    }
    Array.prototype.top = function(arr){
        let lastEl = arr.slice(-1);
        console.log(lastEl);
    }
    Array.prototype.print = function(arr){
        console.log(arr);
    }
    Array.prototype.printReverse = function(arr){
        console.log(arr.reverse());
    }
    Array.prototype.size = function(arr){
        let length = arr.length;
        console.log(length);
    }
   
   let arrayFunctions = new Array(arr);
   console.log(arrayFunctions);
    // arrayFunctions.pop(arr);
    // arrayFunctions.push(6,arr);
    // arrayFunctions.top(arr);
    // arrayFunctions.print(arr);
    // arrayFunctions.printReverse(arr);
    // arrayFunctions.size(arr);