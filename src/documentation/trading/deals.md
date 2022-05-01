# Deals
Deals are represented by the `MidaBrokerDeal` class.
A deal is the result of an order execution and represents the transaction
occurred to satisfy the order directives. An order can be executed entirely
or partially with one or severe deals.

## Opening deals
A opening deal represents the transfer of an asset into the account, opening deals
result in creating a new position or adding volume to an existing one.

## Closing deals
A closing deal represents the transfer of an asset out of the account, closing deals
result in entirely or partially closing the volume of an open position. A closing deal
affects the account balance by applying the respective profit, commission and swaps according
to the closed volume and execution price.

## Orders and positions
Deals can be retrieved from orders and positions.

- **Interface**
```typescript
class MidaBrokerOrder {
    get executedDeals (): MidaBrokerDeal[];
}
```
- **Interface**
```typescript
class MidaBrokerPosition {
    get executedDeals (): MidaBrokerDeal[];
}
```
