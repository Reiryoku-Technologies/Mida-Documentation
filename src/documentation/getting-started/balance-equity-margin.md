# Balance, equity, and margin
Balance, equity and margin can be retrieved from a `MidaBrokerAccount` instance.

## getBalance()
Returns the account balance.
```js
const balance = await myAccount.getBalance();
```

## getEquity()
Returns the account equity.
```js
const equity = await myAccount.getEquity();
```

## getFreeMargin()
Returns the account free margin.
```js
const freeMargin = await myAccount.getFreeMargin();
```
