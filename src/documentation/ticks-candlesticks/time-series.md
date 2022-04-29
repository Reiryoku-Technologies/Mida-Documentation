# Time series
## getSymbolPeriods()
Returns the past candlesticks of a period.

- Interface
```typescript
getSymbolPeriod (symbol: string, timeframe: number): Promise<MidaSymbolPeriod[]>;
```
- Example
```javascript
const { MidaTimeframe, } = require("@reiryoku/mida");

const m5Candlesticks = await myAccount.getSymbolPeriods("BTCUSD", MidaTimeframe.M5);
const h1Candlesticks = await myAccount.getSymbolPeriods("BTCUSD", MidaTimeframe.H1);
```
