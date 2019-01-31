// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
    }
    size(){
        let itr = this.head;
        let n = 0;
        while(itr){
            n++;
            itr = itr.next;
        }
        return n;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head) return null;
        let itr = this.head;
        while(itr.next){
            itr = itr.next;
        }
        return itr;
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(!this.head) return;
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head || !this.head.next){
            this.head = null;
            return;
        }
        let itr = this.head;
        while(itr.next && itr.next.next){
            itr = itr.next;
        }
        itr.next = null;
    }
    insertLast(data){
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
        }
        else{
            this.head = new Node(data);
        }
    }
    getAt(index){
        let i = 0;
        let node = this.head;
        while(node && i<index){
            node = node.next;
            i++;
        }
        return node;
    }
    removeAt(index){
        if(!this.head || index<0) return;
        if(index==0){
            this.removeFirst();
            return;
        }
        const previous = this.getAt(index-1);
        if(!previous || !previous.next) return;
        previous.next = previous.next.next;
    }
    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index===0){
            this.head = new Node(data,this.head);
            return;
        }
        const previous = this.getAt(index-1) || this.getLast();
        const node = new Node(data,previous.next);
        previous.next = node;
    }
    forEach(func){
        let index = 0;
        let node = this.head;
        while(node){
            func(node,index);
            node = node.next;
            index++;
        }
    }
}

module.exports = { Node, LinkedList };
