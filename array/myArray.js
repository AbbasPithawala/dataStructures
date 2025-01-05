class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item
        this.length++
    }
   
    pop(){
        delete this.data[this.length - 1]
        this.length--
    }

    delete(index){
        // delete  an element on a certain index and then shift all the index
        delete this.data[index]
        this.length--
        this.shift(index)
    }

    shift(index){
        for(let i = index; i < this.length; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length]
    }
}

const newArray = new MyArray()
newArray.push("grapes")
newArray.push("mango")
newArray.push("apple")
newArray.push("guava")
console.log(newArray)
// newArray.pop()
newArray.delete(1)
console.log(newArray)

