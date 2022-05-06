# Symbols
Symbols are represented by the `MidaSymbol` class. A symbol represents an asset pair.

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
- Symbols as strings may not be equal across all platforms
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
Used to get the current bid price.

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
Used to get the current ask price.

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
Used to get the current average price.

- **Interface**
```typescript
class MidaSymbol {
    getAveragePrice (): Promise<number>;
}
```
- **Example**
```javascript
const btcUsdt = await myAccount.getSymbol("BTCUSDT");
const averagePrice = await btcUsdt.getAveragePrice();
```

## isMarketOpen()
Indicates if the market is open.

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

## Asset pair
Because a symbol represents an asset pair, it's possible to access
its assets. An asset pair is composed of a base asset and a quote asset.

- **Interface**
```typescript
class MidaSymbol {
    get baseAsset (): string;
    get quoteAsset (): string;
}
```
- **Example**
```javascript
const btcUsdt = await myAccount.getSymbol("BTCUSDT");
const baseAsset = btcUsd.baseAsset; // <= "BTC"
const quoteAsset = btcUsd.quoteAsset; // <= "USDT"
```
