# Events
Events are represented by the `MidaEvent` and `MidaEmitter` APIs.

## on()

- **Interface**
```typescript
on (type: string): Promise<MidaEvent>;
on (type: string, listener: MidaEventListener): string;
```
- **Example 1**
```javascript
myOrder.on("execute", (event) => {
   // The order has been executed 
});
```
- **Example 2**
```javascript
const event = await myOrder.on("execute");
```

## removeEventListener()
Used to remove an event listener, `on()` returns a string which is a UUID
assosciated to the event listener. The UUID can be used to
remove the event listener.

- **Interface**
```typescript
removeEventListener (uuid): void;
```
- **Example**
```javascript
const uuid = myAccount.on("trade", (event) => {
    // A trade has been executed
    // ...
    myAccount.removeEventListener(uuid);
});
```
