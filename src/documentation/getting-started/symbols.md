# Symbols
## getSymbols()
Returns the symbols available for the account.
- Interface
```typescript
getSymbols(): string[];
```
- Example
```javascript
const symbols = await myAccount.getSymbols();
```


## getSymbol()
Returns a `MidaSymbol` instance or `undefined` if the symbol is not found.

::: warning
- Symbols names are case sensitive
- Symbols names may not be the same across all brokers
:::

- Interface
```typescript
getSymbol(symbol: string): MidaSymbol | undefined;
```
- Example
```javascript
const btcUsd = await myAccount.getSymbol("BTCUSD");
const eurUsd = await myAccount.getSymbol("EURUSD");
const xauUsd = await myAccount.getSymbol("XAUUSD");
```
