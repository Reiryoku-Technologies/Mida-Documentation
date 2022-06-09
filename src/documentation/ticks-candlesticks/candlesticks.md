# Candlesticks
Candlesticks are represented by the `MidaPeriod` API.

::: tip
Historical
prices are available in form of candlesticks (or periods), the amount of
data available depends on the trading platform
:::

- **Interface**
```typescript
class MidaPeriod {
    get symbol (): string;
    get startDate (): MidaDate;
    get timeframe (): number;
    get open (): number;
    get high (): number;
    get low (): number;
    get close (): number;
    get volume (): number;
    get body (): number;
    get momentum (): number;
    get ohlc (): number[];
    get isBullish (): boolean;
    get isNeutral (): boolean;
    get isBearish (): boolean;
    get endDate (): MidaDate;
}
```

## getSymbolPeriods()
Used to get the most recent candlesticks of a symbol.

::: warning
- Candlesticks are ordered from oldest to newest
:::

- **Interface**
```typescript
class MidaTradingAccount {
    getSymbolPeriods (symbol: string, timeframe: number): Promise<MidaPeriod[]>;
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
class MidaPeriod {
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
