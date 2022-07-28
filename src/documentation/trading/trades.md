# Trades
Trades are represented by the `MidaTrade` API.

::: tip
A trade (or deal) is the result of an order execution and represents the transaction
occurred to entirely or partially fill the volume requested by the order, an order can be executed entirely
or partially with one or more trades
:::

- **Interface**
```typescript
class MidaTrade {
    get symbol: string;
    get volume: MidaDecimal;
    get executionPrice: MidaDecimal | undefined;
    get executionDate: MidaDate | undefined;
    get rejectionDate: MidaDate | undefined;
    get orderId: string;
    get positionId: string;
    get grossProfit: MidaDecimal;
    get grossProfitAsset: string;
    get commission: MidaDecimal;
    get commissionAsset: string;
    get swap: MidaDecimal;
    get swapAsset: string;
    get status: MidaTradeStatus;
    get purpose: MidaTradePurpose;
}
```

## Opening trades
An opening trade represents the transfer of an asset into the trading account, opening trades
result in creating a new position or adding volume to an existing one.

## Closing trades
A closing trade represents the transfer of an asset out of the trading account, closing trades
result in entirely or partially closing the volume of an open position.

## getTrades()
Used to get the account most recent trades (or deals) for a symbol.

- **Interface**
```typescript
class MidaTradingAccount {
    getTrades (symbol: string): Promise<MidaTrade[]>;
}
```
- **Example 1**
```javascript
const myEtherTrades = await myAccount.getTrades("ETHUSDT");
```
- **Example 2**
```javascript
const myAppleTrades = await myAccount.getTrades("#AAPL");
```
- **Example 3**
```javascript
const myYenTrades = await myAccount.getTrades("USDJPY");
```

## Trades from orders
Trades can be retrieved from orders.

- **Interface**
```typescript
class MidaOrder {
    get trades (): MidaTrade[];
}
```

Trades can also be listened from accounts, orders and positions.

- **Example 1**
```typescript
myAccount.on("trade", (event) => {
    const { trade, } = event.descriptor;
});
```
- **Example 2**
```typescript{5-9}
const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSDT",
    direction: MidaOrderDirection.BUY,
    volume: 1,
    listeners: {
        trade (event) {
            const { trade, } = event.descriptor;
        },
    },
});
```
- **Example 3**
```typescript
myPosition.on("trade", (event) => {
    const { trade, } = event.descriptor;
});
```
