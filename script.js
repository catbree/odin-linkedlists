class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
        } else {
            
            function findLastNode(node) {
                if (node.nextNode === null) {
                    return node;
                } else {
                    return findLastNode(node.nextNode);
                }
            }

            let currentLastNode = findLastNode(this.headNode);
            currentLastNode.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        let previousHeadNode = this.headNode;

        this.headNode = newNode;
        this.headNode.nextNode = previousHeadNode;

    }

    toString() {
        let printStatement = '';
        
        function printNextNode(node) {
            if (node.nextNode === null) {
                printStatement += `( ${node.value} ) -> null`
            } else {
                printStatement += `( ${node.value} ) -> `
                printNextNode(node.nextNode);
            }
        }
        printNextNode(this.headNode);
        console.log(printStatement);
    }

    size() {
        let count = 1;
        let currentNode = this.headNode;

        if (this.headNode === null) {
            count = 0;
        } else {
            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
                count++;
            }
        }
        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let selectedNode = this.headNode;
        while (selectedNode.nextNode !== null) {
            selectedNode = selectedNode.nextNode;
        }
        return selectedNode;
    }

    at(index) {
        let selectedNode = this.headNode;

        for (let i=0; i<index; i++) {
            selectedNode = selectedNode.nextNode;
        }

        return selectedNode;
    }

    pop() {
        let selectedNode = this.headNode;
        while (selectedNode.nextNode.nextNode !== null) {
            selectedNode = selectedNode.nextNode;
        }
        selectedNode.nextNode = null;
    }

    contains(value) {
        let selectedNode = this.headNode;

        while (selectedNode !== null) {
            if (selectedNode.value == value) {
                return true;
            } else {
                selectedNode = selectedNode.nextNode;
            }
        }

        return null;
    }

    find(value) {
        if (this.contains(value) === true) {
            let count = 0;
            let selectedNode = this.headNode;

            while (selectedNode.value !== value.toString()) {
                selectedNode = selectedNode.nextNode;
                count ++;
            }
            
            return count;
        } else {
            return null;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const linkedList = new LinkedList();

linkedList.append("1");
linkedList.append("2");
linkedList.append("3");
linkedList.append("4");
linkedList.append("5");
linkedList.prepend("0");
linkedList.toString();
linkedList.pop();
linkedList.pop();
linkedList.toString();
// console.log(linkedList.contains(2));
// console.log(linkedList.contains(3));
// console.log(linkedList.contains(5));
// console.log(linkedList.size());
// console.log(linkedList.head());
// console.log(linkedList.tail());
// console.log(linkedList.at(0));
// console.log(linkedList.at(1));
// console.log(linkedList.at(2));
// console.log(linkedList.at(4));
console.log(linkedList.find(1));
console.log(linkedList.find(2));
console.log(linkedList.find(5));
console.log(linkedList.find('elephant'));







// const listWithoutNodes = new LinkedList();
// console.log(listWithoutNodes.size());

