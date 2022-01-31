class MyArray {

    constructor() {
        this.argument = arguments;
        
    }

    myFind(condition) {
        for (const item of this.argument) {
            if (condition(item)) {
                return item;
            }
        }
    }

    myPush(newItem) {

        return this.argument[this.argument.length++] = newItem;
    }
      
    
}
let arr = new MyArray(1,2,3,4,5);

console.log(arr);
console.log(arr.myPush(10));
console.log(arr);

function checkAge(age) {
    return age > 4;
  }
console.log(arr.myFind(checkAge));