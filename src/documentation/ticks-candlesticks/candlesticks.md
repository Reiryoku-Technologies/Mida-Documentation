# Candlesticks
Candlesticks are represented by the `MidaSymbolPeriod` API. Historical
prices are available in form of candlesticks (or periods), the amount of
data available is at the trading platform discretion.

- **Interface**
```typescript
class MidaSymbolPeriod {
    get symbol (): string;
    get startDate (): MidaDate;
    get timeframe (): number;
    get open (): number;
    get high (): number;
    get low (): number;
    get close (): number;
    get volume (): number;
    get endDate (): MidaDate;
}
```

## getSymbolPeriods()
Used to get the most recent periods (or candlesticks) of a symbol.

::: warning
- The candlesticks are ordered from newest to oldest
:::

- **Interface**
```typescript
class MidaTradingAccount {
    getSymbolPeriods (symbol: string, timeframe: number): Promise<MidaSymbolPeriod[]>;
}
```
- **Example 1**
```javascript
const { MidaTimeframe, } = require("@reiryoku/mida");

const m5Candlesticks = await myAccount.getSymbolPeriods("BTCUSDT", MidaTimeframe.M5);
```
- **Example 2**
```javascript
const { MidaTimeframe, } = require("@reiryoku/mida");

const h1Candlesticks = await myAccount.getSymbolPeriods("BTCUSDT", MidaTimeframe.H1);
```

## OHLC
The period OHLC (open, high, low, close).

- **Interface**
```typescript
class MidaSymbolPeriod {
    get ohlc (): number[];
}
```
- **Example**
```javascript
const { MidaTimeframe, } = require("@reiryoku/mida");

const h1Candlesticks = await myAccount.getSymbolPeriods("TRXUSDT", MidaTimeframe.H1);
const lastCandlestick = h1Candlesticks[h1Candlesticks.length - 1];
const [ open, high, low, close, ] = lastCandlestick.ohlc;
```
