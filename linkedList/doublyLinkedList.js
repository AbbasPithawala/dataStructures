class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }


    append(value){
        const prevNode = this.tail
        const newNode = {
            value: value,
            prev: prevNode, 
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this.printList()
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this.printList()
    }

    insert(index, value){

        if(index >= this.length){
            return this.append(value)
        }

        const leader = this.traverse(index-1)
        const holdingPointer = leader.next

        const newNode = {
            value: value,
            prev: null,
            next: null
        }

        newNode.prev = leader
        newNode.next = holdingPointer
        holdingPointer.prev = newNode
        leader.next = newNode
        this.length++
        return this.printList()
    }


    remove(index){
        if(index >= this.length){
            return this.printList()
        }
        const leader = this.traverse(index-1)
        const holdingPointer = leader.next
        const newPointer = holdingPointer.next



        leader.next = holdingPointer.next
        newPointer.pre = leader
        this.length--
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
}

const doubly = new DoublyLinkedList(10)
doubly.append(20)
doubly.append(30)
doubly.prepend(40)
doubly.insert(1, 50)
doubly.remove(1)


console.log(doubly)
