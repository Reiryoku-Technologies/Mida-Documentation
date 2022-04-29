# Orders

## placeOrder()
Used to place an order.

- Interface
```typescript
placeOrder (directives: MidaBrokerOrderDirectives): Promise<MidaBrokerOrder>;
```

## Market orders
```javascript
const { MidaBrokerOrderDirection, } = require("@reiryoku/mida");

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSD",
    direction: MidaBrokerOrderDirection.BUY,
    volume: 1,
});
```

## Limit orders
- Example
```javascript
const { MidaBrokerOrderDirection, } = require("@reiryoku/mida");

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaBrokerOrderDirection.SELL,
    volume: 1,
    limit: 2000,
});
```

## Stop orders
- Example
```javascript
const { MidaBrokerOrderDirection, } = require("@reiryoku/mida");

const myOrder = await myAccount.placeOrder({
    symbol: "EURUSD",
    direction: MidaBrokerOrderDirection.SELL,
    volume: 1,
    stop: 1.3,
});
```

## Protections
Take profit and stop loss can be optionally set through the `protection` option.

- Example
```javascript
const { MidaBrokerOrderDirection, } = require("@reiryoku/mida");

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSD",
    direction: MidaBrokerOrderDirection.BUY,
    volume: 1,
    protection: {
        takeProfit: 65000,
        stopLoss: 30000,
    },
});
```

### Trailing stop loss


## Resolvers
By default the `Promise<MidaBrokerOrder>` returned by `placeOrder()` resolves when the order enters in one of the following states:
`rejected`, `pending`, `expired` or `executed`.

The `resolverEvents` option allows to change this behaviour, the option indicates a set of order events that will resolve the Promise.
Passing an empty array will result in resolving the Promise immediately, this
means that in most cases the returned order will be in `requested` state.
