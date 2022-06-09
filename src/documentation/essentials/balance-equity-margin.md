# Balance, equity and margin
Balance, equity and margin can be retrieved from trading accounts.

## Primary asset
The primary asset of a trading account is decided by the trading platform,
for forex brokers usually it is a currency like `USD`, `EUR` or `GBP`,
for crypto exchanges usually it is `BTC` or `USDT`.

````typescript
class MidaTradingAccount {
    get primaryAsset (): string;
}
````

## getBalance()
Used to get the account primary asset balance

- **Interface**
```typescript
class MidaTradingAccount {
    getBalance (): Promise<number>;
}
```
- **Example**
```js
const balance = await myAccount.getBalance();
```

## getBalanceSheet()
Used to get the account assets balance (all the owned assets)

- **Interface**
```typescript
class MidaTradingAccount {
    getBalanceSheet (): Promise<MidaAssetStatement[]>;
}
```
- **Example**
```js
const balanceSheet = await myAccount.getBalanceSheet();
```

## getEquity()
Used to get the account primary asset balance if all the owned assets were liquidated for it.

- **Interface**
```typescript
class MidaTradingAccount {
    getEquity (): Promise<number>;
}
```
- **Example**
```js
const equity = await myAccount.getEquity();
```

## getUsedMargin()
Used to get the account used margin.

- **Interface**
```typescript
class MidaTradingAccount {
    getUsedMargin (): Promise<number>;
}
```
- **Example**
```js
const usedMargin = await myAccount.getUsedMargin();
```

## getFreeMargin()
Used to get account the free margin.

- **Interface**
```typescript
class MidaTradingAccount {
    getFreeMargin (): Promise<number>;
}
```
- **Example**
```js
const freeMargin = await myAccount.getFreeMargin();
```

## getMarginLevel()
Used to get the account margin level, returns `NaN` if no margin is used.

- **Interface**
```typescript
class MidaTradingAccount {
    getMarginLevel (): Promise<number>;
}
```
- **Example**
```js
const marginLevel = await myAccount.getMarginLevel();
```
