Apply the Visitor Pattern to FizzBuzz

[FizzBuzz Requirements](./FizzBuzz.md)

#### Applying the Visitor Pattern
[Visitor Pattern](https://en.wikipedia.org/wiki/Visitor_pattern)
- It should be possible to define a new operation for (some) classes of an object structure without changing the classes.
- Define a separate (visitor) object that implements an operation to be performed on elements of an object structure.
- Clients traverse the object structure and call a dispatching operation accept (visitor) on an element — that "dispatches" (delegates) the request to the "accepted visitor object". The visitor object then performs the operation on the element ("visits the element").