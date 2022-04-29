# Positions
An open position represents an amount of asset held by the account.

## executionPrice
Because a position is the result of one or more deals which can be executed at different times and at different prices,
the position execution price is the VWAP of the execution prices of the deals impacting the position.

## getUnrealizedNetProfit()
Returns the unrealized net profit of the position.

## addVolume()

## subtractVolume()

## close()

## Orders and deals
`position.orders` represents the orders that affected the position
- Interface
```typescript
get orders (): MidaBrokerOrder[];
```

`position.deals` represents the deals that affected the position
- Interface
```typescript
get deals (): MidaBrokerDeal[];
```
