# MarketWatcher
The `MarketWatcher` API allows to listen real-time ticks and candlesticks.

## watch()
Used to watch a symbol.

- Interface
```typescript
watch (symbol: string, directives: MidaMarketWatcherDirectives): Promise<void>;
```

## Ticks listener
Ticks can be listened through the `watchTicks` option.

- Example
```javascript
const { MidaMarketWatcher, } = require("@reiryoku/mida");

const marketWatcher = new MidaMarketWatcher({ brokerAccount: myAccount, });

await marketWatcher.watch("BTCUSD", { watchTicks: true, });
marketWatcher.on("tick", (event) => {
    const { tick, } = event.descriptor;
    const btcUsdBid = tick.bid;
    const btcUsdAsk = tick.ask;
});
```

## Candlesticks listener
Candlesticks being closed can be listened through the `watchPeriods` and `timeframes` options.

- Example
```javascript
const { MidaMarketWatcher, MidaTimeframe } = require("@reiryoku/mida");

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
Removes all watch directives from a symbol. If the intention is just to remove specific directives, it's recommended to
override the watch directives by using `watch()`.

- Interface
```typescript
unwatch (symbol: string): Promise<void>;
```

## getSymbolDirectives()
Returns the watch directives of a symbol.

- Interface
```typescript
getSymbolDirectives (symbol: string): MidaMarketWatcherDirectives | undefined;
```
