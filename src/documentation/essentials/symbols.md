# Symbols
Symbols are represented by the `MidaSymbol` API.

::: tip
A symbol represents a pair of assets
:::

## getSymbols()
Used to get the account available symbols.

- **Interface**
```typescript
class MidaTradingAccount {
    getSymbols (): Promise<string[]>;
}
```
- **Example**
```javascript
const symbols = await myAccount.getSymbols();
```

## getSymbol()
Used to get a symbol by its string representation, returns `undefined` if the symbol is not found.

::: warning
- Symbols as strings are case sensitive
- Symbols as strings may not be equal across all trading platforms
:::

- **Interface**
```typescript
class MidaTradingAccount {
    getSymbol (symbol: string): Promise<MidaSymbol | undefined>;
}
```
- **Example 1**
```javascript
const btcUsdt = await myAccount.getSymbol("BTCUSDT");
```
- **Example 2**
```javascript
const ethUsdt = await myAccount.getSymbol("ETHSDT");
```
- **Example 3**
```javascript
const tslaUsd = await myAccount.getSymbol("#TSLA");
```
- **Example 4**
```javascript
const xauUsd = await myAccount.getSymbol("XAUUSD");
```

## getBid()
Used to get the current best bid price for the symbol.

- **Interface**
```typescript
class MidaSymbol {
    getBid (): Promise<number>;
}
```
- **Example**
```javascript
const btcUsdt = await myAccount.getSymbol("BTCUSDT");
const bidPrice = await btcUsdt.getBid();
```

## getAsk()
Used to get the current best ask price for the symbol.

- **Interface**
```typescript
class MidaSymbol {
    getAsk (): Promise<number>;
}
```
- **Example**
```javascript
const btcUsdt = await myAccount.getSymbol("BTCUSDT");
const askPrice = await btcUsdt.getAsk();
```

## getAverage()
Used to get the current average price for the symbol.

- **Interface**
```typescript
class MidaSymbol {
    getAverage (): Promise<number>;
}
```
- **Example**
```javascript
const btcUsdt = await myAccount.getSymbol("BTCUSDT");
const averagePrice = await btcUsdt.getAverage();
```

## isMarketOpen()
Indicates if the symbol market is open.

- **Interface**
```typescript
class MidaSymbol {
    isMarketOpen (): Promise<boolean>;
}
```
- **Example**
```javascript
const xauUsd = await myAccount.getSymbol("XAUUSD");
const isGoldMarketOpen = await xauUsd.isMarketOpen();
```
