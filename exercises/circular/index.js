// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slowForward = list.getFirst();
  let fastForward = list.getFirst();

  while(fastForward && fastForward.next && fastForward.next.next) {
    slowForward = slowForward.next;
    fastForward = fastForward.next.next;

    if (slowForward === fastForward) {
      return true
    }
  }

  return false;
}

module.exports = circular;
