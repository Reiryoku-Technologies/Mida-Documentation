# Watchers
The `MidaMarketWatcher` API is available to listen real-time ticks and candlesticks.

## watch()
Used to watch a symbol based on the specified directives.

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

const marketWatcher = new MidaMarketWatcher({ brokerAccount: myAccount, });

await marketWatcher.watch("BTCUSD", { watchTicks: true, });
marketWatcher.on("tick", (event) => {
    const { tick, } = event.descriptor;
    const btcUsdBid = tick.bid;
    const btcUsdAsk = tick.ask;
});
```

## Candlesticks listener
Candlesticks being closed can be listened through the `watchPeriods` and `timeframes` directives.

- **Example**
```javascript
import { MidaMarketWatcher, MidaTimeframe, } from "@reiryoku/mida";

const marketWatcher = new MidaMarketWatcher({ brokerAccount: myAccount, });

await marketWatcher.watch("BTCUSD", {
    watchPeriods: true,
    timeframes: [ MidaTimeframe.H1, ],
});
marketWatcher.on("period-close", (event) => {
    const { period, } = event.descriptor;
    const btcUsdClosePrice = period.close;
});
```

## unwatch()
Removes all watch directives from a symbol. If it's necessary to remove specific directives, it's recommended to
override the watch directives with `watch()`.

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
