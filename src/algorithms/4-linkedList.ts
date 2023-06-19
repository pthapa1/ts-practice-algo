// type EachNode<T> = {
//   data: T;
//   next?: EachNode<T>;
// };

/**
 * @description: Eihter Use the Type above or Class below for Each Node. I am using class because calss can be implemented in javascript as well
 */
class EachNode<T> {
  constructor(public data: T, public next?: EachNode<T>) {}
}

class LinkedList<T> {
  constructor(public length: number = 0, public head?: EachNode<T>) {}

  add = (newValue: T) => {
    const newNode = new EachNode<T>(
      newValue
    ); /** @description: Creating node while using class */

    /**
     * @description: If you are using Types instead of class for EachNode, create newNode using the format below.
     * @constant: const newNode: EachNode<T> = {data: newValue};
     */

    let newSpace = this.head;
    this.head = newNode;
    newNode.next = newSpace;
    this.length++;
  };

  delete = (valueToDelete: T) => {
    // given a value to delete, delete the value from the linked list.
    // handle cases:
    // when there is no linked list
    if (!this.length) return;
    // when the value is the header itself.
    if (this.head?.data === valueToDelete) {
      // update the header.
      this.head = this.head.next;
      this.length--;
      return;
    }
    let check = this.head;
    // keep going until you find a node whose next value is valueToDelete.
    while (check?.next?.data !== valueToDelete) {
      if (check?.next?.data === undefined) return;
      check = check.next; // keep moving forward
    }
    check.next = check.next.next;
    this.length--;
  };
  read = () => {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  };

  update = (valueToUpdate: T, newValue: T) => {
    // what if there is not such value you want to replace. End of line.
    // and move to the next node until you reach the node whose next.data === valueToUpdate
    if (!newValue || !valueToUpdate) return;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === valueToUpdate) {
        currentNode.data = newValue;
        return;
      }
      currentNode = currentNode.next;
    }
  };
}

const linkedList = new LinkedList<number>();

function printList() {
  linkedList.add(33);
  linkedList.add(43);
  linkedList.add(53);
  linkedList.add(63);
  return linkedList;
}
const data = printList();

// console.log(data.read());

console.log('Linked list values:');
data.read();

console.log('Update result:');
data.update(43, 13);

console.log('Updated linked list values:');
data.read();
