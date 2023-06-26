/**
 * @description: Similar to queue but Stack follow "Last in First Out" model, just like a stack of books, you take out the one at the very top then the next one below it. It has all the function from the queue. The only difference it how you take and read the data.
 */
type EachStackNode<T> = {
  value: T;
  next?: EachStackNode<T>;
};

export default class Stack<T> {
  public length: number;
  public head?: EachStackNode<T>;
  public tail?: EachStackNode<T>;

  constructor() {
    this.length = 0;
    this.tail = this.head = undefined;
  }

  push(item: T): void {
    const newNode = { value: item } as EachStackNode<T>;
    this.length++;

    if (!this.tail && !this.head) {
      this.head = this.tail = newNode;
    }
    const oldNodeTail = this.tail;
    this.tail = newNode;
    newNode.next = oldNodeTail;

    /* Or you can do the following. First Point to the old tail and make new node the new tail */
    // newNode.next = this.tail;
    // this.tail = newNode; /* Then, make newTail  */
  }
  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (!this.tail && !this.head) return undefined;
    if (this.head === this.tail) {
      const value = this.tail?.value;
      this.head = this.tail = undefined;
      return value;
    }

    const value = this.tail?.value;
    this.tail = this.tail?.next;

    return value;
  }
  peek(): T | undefined {
    return this.tail?.value;
  }
}
const stack = new Stack<number>();
stack.push(98);
stack.push(88);
stack.push(78);
console.log(stack.peek());
