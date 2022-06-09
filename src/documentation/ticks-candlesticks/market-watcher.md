# Watchers
Real-time ticks and candlesticks can be listened through the `MidaMarketWatcher` API.

- **Interface**
```typescript
class MidaMarketWatcher {
    constructor (parameters: MidaMarketWatcherParameters);
}
```

## watch()
Used to watch a symbol according to the specified directives.

- **Interface**
```typescript
class MidaMarketWatcher {
    watch (symbol: string, directives: MidaMarketWatcherDirectives): Promise<void>;
}
```

## Ticks listener
Ticks can be listened through the `watchTicks` directive.

- **Example**
```javascript
import { MidaMarketWatcher, } from "@reiryoku/mida";

const marketWatcher = new MidaMarketWatcher({ tradingAccount: myAccount, });

await marketWatcher.watch("BTCUSDT", { watchTicks: true, });
marketWatcher.on("tick", (event) => {
    const { tick, } = event.descriptor;
    const btcUsdtBid = tick.bid;
    const btcUsdtAsk = tick.ask;
});
```

## Candlesticks listener
Candlesticks being closed can be listened through the `watchPeriods` and `timeframes` directives.

- **Example**
```javascript
import { MidaMarketWatcher, MidaTimeframe, } from "@reiryoku/mida";

const marketWatcher = new MidaMarketWatcher({ tradingAccount: myAccount, });

await marketWatcher.watch("XAUUSD", {
    watchPeriods: true,
    timeframes: [ MidaTimeframe.H1, ],
});
marketWatcher.on("period-close", (event) => {
    const { period, } = event.descriptor;
    const goldClosePrice = period.close;
});
```

## unwatch()
Removes all watch directives from a symbol.

- **Interface**
```typescript
class MidaMarketWatcher {
    unwatch (symbol: string): Promise<void>;
}
```

## getSymbolDirectives()
Returns the watch directives of a symbol.

- **Interface**
```typescript
class MidaMarketWatcher {
    getSymbolDirectives (symbol: string): MidaMarketWatcherDirectives | undefined;
}
```
