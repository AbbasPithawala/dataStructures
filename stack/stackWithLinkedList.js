class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
};

    


    class Stack{
        constructor(){
            this.top = null
            this.bottom = this.top
            this.length = 0
        }
        peek(){
            return this.top
        }

        pop(){
            if(!this.top){
                return null
            }
            if(this.top == this.bottom){
                this.bottom = null
            }
            this.top = this.top.next
            this.length--
            return this
        }

        push(value){
            const newNode = new Node(value)
            if(this.length == 0){
                this.top = newNode
                this.bottom = newNode
            }else{
                const holdinPointer = this.top
                this.top = newNode
                this.top.next = holdinPointer
            }
            this.length++
            return this
        }

    }


    const myStack = new Stack()
    myStack.push("google")
    console.log(JSON.stringify(myStack))
    myStack.push("udemy")
    console.log(JSON.stringify(myStack))
    myStack.push("abbas")
    console.log(JSON.stringify(myStack))
    console.log("====", myStack.peek())
    myStack.pop()
    console.log(JSON.stringify(myStack))
    myStack.pop()
    console.log(JSON.stringify(myStack))