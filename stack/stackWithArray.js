class Stack{
    constructor(){
        this.array = []
    }

    push(value){
            this.array.push(value)
            return this
    }
    pop(){
        if(this.array.length === 0){
            return null
        }else{
            this.array.pop()
            return this
        }
    }
    peek(){
        if(this.length === 0){
            return null
        }else{
            return this.array[this.array.length - 1]
        }
    }
}



const myStack = new Stack()
myStack.push("apple")
myStack.push("mango")
myStack.push("banana")
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())
console.log(myStack)