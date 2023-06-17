// type EachNode<T> = {
//   data: T;
//   next?: EachNode<T>;
// };

class EachNode<T> {
  constructor(public data: T, public next?: EachNode<T>) {}
}

class LinkedList<T> {
  constructor(public length: number = 0, private head?: EachNode<T>) {}

  add = (newValue: T) => {
    const newNode = new EachNode<T>(newValue);

    /**
     * @name: Use this class while using Type above
     * @example:
     * Construct new Node while using TS type
          const newNode: EachNode<T> = {
                                  data: newValue,
                                  };
     */
    // Construct new Node while using TS type
    // const newNode: EachNode<T> = {
    //   data: newValue,
    // };

    let newSpace = this.head;
    this.head = newNode;
    newNode.next = newSpace;
    this.length++;
  };
}

const linkedList = new LinkedList<number>();

function printList() {
  linkedList.add(34);
  linkedList.add(43);
  return linkedList;
}
const data = printList();

console.log(data);
