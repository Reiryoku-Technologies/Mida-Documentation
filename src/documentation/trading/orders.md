# Orders
Orders are represented by the `MidaOrder` API.

::: tip
An order is the intention to buy or sell an asset. An order is
processed by the trading platform according to the client directives
and is finalized with the execution of one or more trades
:::

## placeOrder()
Used to place an order according to the specified directives.

- **Interface**
```typescript
class MidaTradingAccount {
    placeOrder (directives: MidaOrderDirectives): Promise<MidaOrder>;
}
```

## Market orders
Market orders are executed as soon as possible at the current market conditions.

- **Example 1**
```javascript
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSDT",
    direction: MidaOrderDirection.BUY,
    volume: 1,
});
```
- **Example 2**
```javascript
import { MidaOrderDirection, MidaOrderTimeInForce, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "#AAPL",
    direction: MidaOrderDirection.SELL,
    timeInForce: MidaOrderTimeInForce.FILL_OR_KILL,
    volume: 1,
});
```
- **Example 3**
```javascript
import { MidaOrderDirection, decimal, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "SATS",
    direction: MidaOrderDirection.BUY,
    volume: decimal("0.00000000000000001"),
});
```

## Limit orders
Limit orders are executed at different conditions depending on the order direction.
Buy limit orders are executed when the ask price goes below the limit price,
sell limit orders are executed when the bid price goes above the limit price.

- **Example**
```javascript{7}
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaOrderDirection.SELL,
    volume: 1,
    limit: 2000,
});
```

## Stop orders
Stop orders are executed at different conditions depending on the order direction.
Buy stop orders are executed when the ask price goes above the stop price,
sell stop orders are executed when the bid price goes below the stop price.

- **Example**
```javascript{7}
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaOrderDirection.SELL,
    volume: 1,
    stop: 2000,
});
```

## Time in force
Time in force can be passed in the directives.

- **Example**
```javascript
import {
    MidaOrderDirection,
    MidaOrderTimeInForce,
    date,
} from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaOrderDirection.SELL,
    volume: 1,
    limit: 2000,
    timeInForce: MidaOrderTimeInForce.GOOD_TILL_DATE,
    expirationDate: date().add(1000 * 60 * 5), // Expire in 5 minutes
});
```

## Impact existing positions
The position id can be passed in the directives to make the order
affect an existing position.

- **Example**
```javascript
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    positionId: "12345",
    direction: MidaOrderDirection.BUY,
    volume: 1,
});
```

## Execution price
Orders with relatively small volume are usually executed with a single trade, in this case
the order execution price is equal to the trade execution price, when an order is executed
with multiple trades, the execution price is equal to the VWAP of its trades.

<br>
<p align="center"> 
    <img src="/vwap.svg" alt="" width="344px">
</p>

- **Interface**
```typescript
class MidaOrder {
    get executionPrice (): MidaDecimal | undefined;
}
```

## cancel()
Used to cancel a pending order.
- **Interface**
```typescript
class MidaOrder {
    cancel (): Promise<void>;
}
```
- **Example**
```javascript
await myOrder.cancel();
```

## getPosition()
Used to get the position created/impacted by the order.
- **Interface**
```typescript
class MidaOrder {
    getPosition (): Promise<MidaPosition | undefined>;
}
```
- **Example**
```javascript
const myPosition = await myOrder.getPosition();
```

## Rejected orders
Orders may get rejected for various reasons, for example one or more directives not being valid, the market being closed
or the trading account not having enough funds.

- **Example**
```javascript
import { MidaOrderDirection, MidaOrderRejection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "ETHUSDT",
    direction: MidaOrderDirection.BUY,
    volume: 10,
});

if (myOrder.isRejected) {
    switch (myOrder.rejection) {
        case MidaOrderRejection.MARKET_CLOSED: {
            // ...

            break;
        }
        case MidaOrderRejection.NOT_ENOUGH_MONEY: {
            // ...

            break;
        }
        case MidaOrderRejection.INVALID_SYMBOL: {
            // ...

            break;
        }
    }
}
```

## Protections
Take profit and stop loss can be optionally set with the `protection` directive.

- **Example**
```javascript
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSDT",
    direction: MidaOrderDirection.BUY,
    volume: 1,
    protection: {
        takeProfit: 65000,
        stopLoss: 30000,
    },
});
```

## getOrders()
Used to get the account most recent orders for a symbol.

- **Interface**
```typescript
class MidaTradingAccount {
    getOrders (symbol: string): Promise<MidaOrder[]>;
}
```
- **Example 1**
```javascript
const myEtherOrders = await myAccount.getOrders("ETHUSDT");
```
- **Example 2**
```javascript
const myTeslaOrders = await myAccount.getOrders("#TSLA");
```

## getPendingOrders()
Used to get the account pending orders.

- **Interface**
```typescript
class MidaTradingAccount {
    getPendingOrders (): Promise<MidaOrder[]>;
}
```
- **Example**
```javascript
const myPendingOrders = await myAccount.getPendingOrders();
```

## Resolvers
The Promise returned by `placeOrder()` resolves when the order enters in one of the following states:
`rejected`, `pending`, `expired` or `executed`.

The `resolverEvents` directive makes possible to change this behaviour by indicating an array of order events that will resolve the Promise.
Passing an empty array will result in resolving the Promise immediately, this
means that in most cases the returned order will still be in `requested` state.

## Status
- **Interface**
```typescript
class MidaOrder {
    get status (): MidaOrderStatus;
}
```
- **Interface**
```typescript
enum MidaOrderStatus {
    REQUESTED = "requested",
    REJECTED = "rejected",
    ACCEPTED = "accepted",
    PENDING = "pending",
    CANCELLED = "cancelled",
    EXECUTED = "executed",
    EXPIRED = "expired",
}
```
