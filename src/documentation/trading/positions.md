# Positions
Positions are represented by the `MidaBrokerPosition` class.
An open position represents a quantity of asset held by the account.

## Execution price
Because a position is the result of one or more deals which can be executed at different prices,
the position execution price is the VWAP of the deals execution prices.

## getUnrealizedNetProfit()
Returns the unrealized net profit of the position.

- **Interface**
```typescript
class MidaBrokerPosition {
    getUnrealizedProfit (): Promise<number>;
}
```
- **Example**
```javascript
const actualNetProfit = await myPosition.getUnrealizedNetProfit();
```

## addVolume()
Places an order to for adding volume to the position.

- **Interface**
```typescript
class MidaBrokerPosition {
    addVolume (quantity): Promise<MidaBrokerOrder>;
}
```

## subtractVolume()
Places an order to for subtracting volume to the position.

- **Interface**
```typescript
class MidaBrokerPosition {
    subtractVolume (quantity): Promise<MidaBrokerOrder>;
}
```

## close()
Places an order for closing the position.

- **Interface**
```typescript
class MidaBrokerPosition {
    close (): Promise<MidaBrokerOrder>;
}
```

## Orders and deals
Orders and deals can be retrieved from positions.

- **Interface**
```typescript
class MidaBrokerPosition {
    get executedOrders (): MidaBrokerOrder[];
}
```
- **Interface**
```typescript
class MidaBrokerPosition {
    get executedDeals (): MidaBrokerDeal[];
}
```
