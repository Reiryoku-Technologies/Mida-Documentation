# Time series
Historical prices are available in form of candlesticks,
the amount of data available is at the broker's discretion.

## getSymbolPeriods()
Returns the past candlesticks of a period.

- **Interface**
```typescript
class MidaBrokerAccount {
    getSymbolPeriods (symbol: string, timeframe: number): Promise<MidaSymbolPeriod[]>;
}
```
- **Example**
```javascript
const { MidaTimeframe, } = require("@reiryoku/mida");

const m5Candlesticks = await myAccount.getSymbolPeriods("BTCUSD", MidaTimeframe.M5);
const h1Candlesticks = await myAccount.getSymbolPeriods("BTCUSD", MidaTimeframe.H1);
```
