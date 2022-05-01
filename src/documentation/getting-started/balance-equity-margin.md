# Balance, equity, and margin
Balance, equity and margin can be retrieved from accounts.

## getBalance()
Returns the account balance.

- **Interface**
```typescript
class MidaBrokerAccount {
    getBalance (): Promise<number>;
}
```
- **Example**
```js
const balance = await myAccount.getBalance();
```

## getEquity()
Returns the account equity.

- **Interface**
```typescript
class MidaBrokerAccount {
    getEquity (): Promise<number>;
}
```
- **Example**
```js
const equity = await myAccount.getEquity();
```

## getFreeMargin()
Returns the account free margin.

- **Interface**
```typescript
class MidaBrokerAccount {
    getFreeMargin (): Promise<number>;
}
```
- **Example**
```js
const freeMargin = await myAccount.getFreeMargin();
```

## getUsedMargin()
Returns the account used margin.

- **Interface**
```typescript
class MidaBrokerAccount {
    getUsedMargin (): Promise<number>;
}
```
- **Example**
```js
const usedMargin = await myAccount.getUsedMargin();
```

## getMarginLevel()
Returns the account margin level or `NaN` if no margin is being used.

- **Interface**
```typescript
class MidaBrokerAccount {
    getMarginLevel (): Promise<number>;
}
```
- **Example**
```js
const marginLevel = await myAccount.getMarginLevel();
```
