class linkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }



    insert(index, value){

        if(index >= this.length){
            return this.append(value)
        }
        const leader = this.traverse(index - 1)
        const holdPoint = leader.next
        const newNode = {
            value: value,
            next: null
        }

        leader.next = newNode
        newNode.next = holdPoint
        this.length++
        return this.printList()
    }
    traverse(index){
        let currentNode = this.head
        let counter = 0
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    printList(){
        let currentNode = this.head
        let array = []
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
        return array
    }


    remove(index){
        if(index >= this.length){
            return this.printList()
        }
        const leader = this.traverse(index-1)
        const holdingPoint = leader.next
        leader.next = holdingPoint.next
        this.length--
        return this.printList()
    }
}




const myFirstLinkedList = new linkedList(10)
myFirstLinkedList.append(5)
myFirstLinkedList.append(7)
myFirstLinkedList.append(9)
myFirstLinkedList.insert(3, 99)
myFirstLinkedList.remove(4)