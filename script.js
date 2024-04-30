class LinkedList {
    constructor() {
        this.nodes = [];
    }

    append(value) {
        const node = new Node(value);
        this.nodes[this.nodes.length] = node;
    }

    toString() {
        let printStatement = '';
        this.nodes.forEach( (node) => {
            printStatement += `(${node.value}) -> `
        });
        printStatement = printStatement + ` null`;
        console.log(printStatement);
    }
    
    //insert functions here
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }

    //insert functions here
}

const linkedlist = new LinkedList();
linkedlist.append(24);
linkedlist.append(232);
linkedlist.append(92);
linkedlist.toString();