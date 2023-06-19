/**
 * @description: Queue follow first in first out method. Or last in last out.
 * @example: This is similar to a real world queue or (line) infront of a cashier in a store.
 */

type EachNodeInQueue<T> = {
  data: T;
  next?: EachNodeInQueue<T>;
};

class Queue<T> {
  constructor(
    public length: number = 0,
    public head?: EachNodeInQueue<T>,
    public tail?: EachNodeInQueue<T>
  ) {}

  // adding value on Tail. enqueue.
  // removing value from the front head. dequeue.
  // No random access.

  enqueue = (valueToAdd: T) => {
    const newNode: EachNodeInQueue<T> = {
      data: valueToAdd,
      next: undefined,
    };

    if (!this.head) {
      // if the queue is empty
      this.head = this.tail = newNode;
      return;
    }
    this.tail!.next = newNode; // update the pointer to new node.
    this.tail = newNode; // make the new node the new tail
    this.length++;
  };

  dequeue = () => {
    // if the queue is empty:
    if (!this.length) return undefined;

    const removedValue = this.head!.data;

    // if there is only one item in the list.
    if (this.head === this.tail) {
      this.head === null;
      this.tail === null;
    }
    // if there are more than 1 items in the list
    if (this.head && this.head.next) this.head = this.head.next;

    this.length--;
    return removedValue;
  };

  peek = () => {
    return this.head?.data;
  };
}

const queue = new Queue<number>();

queue.enqueue(88);
queue.enqueue(78);
queue.enqueue(68);
queue.enqueue(58);

console.log(queue.peek());
