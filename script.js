//palindrome

// var arrLetters = [] ;
// var word = "madam" ;
// var rword = "" ;

// for (var i = 0; i< word.length; i++){
//     arrLetters.push(word[i])
// }

// for (var i = 0; i< word.length; i++){
//     rword += arrLetters.pop()
// }

// if(rword === word){
//     console.log(word + " is a Palindrome")
// } else {
//     console.log(word + " is not a Palindrome")
// }

//creates a stack
var Stack = function(){
    this.count = 0; //keeps record of how many items are in the stack
    this.storage = {};

    //adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    //returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var myStack = new Stack();

myStack.push(20);
myStack.push(2);
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.size())