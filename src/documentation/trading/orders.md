# Orders
Orders are represented by the `MidaBrokerOrder` class.

## placeOrder()
Used to place an order.

- Interface
```typescript
placeOrder (directives: MidaBrokerOrderDirectives): Promise<MidaBrokerOrder>;
```

## Market orders
Market orders are executed as soon as possible at the current market conditions.
```javascript
import { MidaBrokerOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSD",
    direction: MidaBrokerOrderDirection.BUY,
    volume: 1,
});
```

## Limit orders
Limit orders are executed at different conditions depending on the order direction.
Buy limit orders are executed when the ask price goes below the limit price,
sell limit orders are executed when the bid price goes above the limit price.

- Example
```javascript
import { MidaBrokerOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaBrokerOrderDirection.SELL,
    volume: 1,
    limit: 2000,
});
```

## Stop orders
Stop orders are executed at different conditions depending on the order direction.
Buy stop orders are executed when the ask price goes above the stop price,
sell stop orders are executed when the bid price goes below the stop price.

- Example
```javascript
import { MidaBrokerOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaBrokerOrderDirection.SELL,
    volume: 1,
    stop: 2000,
});
```

## Protections
Take profit and stop loss can be optionally set with the `protection` option.

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

## Resolvers
The Promise returned by `placeOrder()` resolves when the order enters in one of the following states:
`rejected`, `pending`, `expired` or `executed`.

The `resolverEvents` option allows to change this behaviour, the option indicates a set of order events that will resolve the Promise.
Passing an empty array will result in resolving the Promise immediately, this
means that in most cases the returned order will be in `requested` state.
