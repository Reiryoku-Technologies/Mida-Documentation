# Symbols
Symbols are represented by the `MidaSymbol` class. A symbol represents a
tradable asset pair.

## getSymbols()
Returns the symbols available for the account.

- **Interface**
```typescript
class MidaBrokerAccount {
    getSymbols (): Promise<string[]>;
}
```
- **Example**
```javascript
const symbols = await myAccount.getSymbols();
```

## getSymbol()
Returns a `MidaSymbol` instance or `undefined` if the symbol is not found.

::: warning
- Symbols names are case sensitive
- Symbols names may not be the same across all brokers
:::

- **Interface**
```typescript
class MidaBrokerAccount {
    getSymbol (symbol: string): Promise<MidaSymbol | undefined>;
}
```
- **Example**
```javascript
const btcUsd = await myAccount.getSymbol("BTCUSD");
const eurUsd = await myAccount.getSymbol("EURUSD");
const xauUsd = await myAccount.getSymbol("XAUUSD");
```

## Assets
Because a symbol represents a tradable asset pair, it's possible to access
its assets. An asset pair is composed of a base asset and a quote asset.

- **Interface**
```typescript
class MidaSymbol {
    get baseAsset (): MidaAsset;
    get quoteAsset (): MidaAsset;
}
```
- **Example**
```javascript
const btcUsd = await myAccount.getSymbol("BTCUSD");
const baseAsset = btcUsd.baseAsset; // <= "BTC"
const quoteAsset = btcUsd.quoteAsset; // <= "USD"
```
