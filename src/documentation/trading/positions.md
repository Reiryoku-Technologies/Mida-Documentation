# Positions
Positions are represented by the `MidaBrokerPosition` class.
An open position represents a quantity of asset held by the account.

## Execution price
Because a position is the result of one or more deals which can be executed at different times and different prices,
the position execution price is the VWAP of the execution prices of the deals impacting the position.

## getUnrealizedNetProfit()
Returns the unrealized net profit of the position.

- Interface
```typescript
getUnrealizedProfit(): Promise<number>;
```
- Example
```javascript
const actualNetProfit = await myPosition.getUnrealizedNetProfit();
```

## addVolume()
Places an order to for adding volume to the position.

- Interface
```typescript
addVolume (quantity): Promise<MidaBrokerOrder>;
```

## subtractVolume()
Places an order to for subtracting volume to the position.

- Interface
```typescript
subtractVolume (quantity): Promise<MidaBrokerOrder>;
```

## close()
Places an order for closing the position.

- Interface
```typescript
close (): Promise<MidaBrokerOrder>;
```

## Orders and deals
`position.executedOrders` represents the orders that affected the position
- Interface
```typescript
get orders (): MidaBrokerOrder[];
```

`position.executedDeals` represents the deals that affected the position
- Interface
```typescript
get deals (): MidaBrokerDeal[];
```
