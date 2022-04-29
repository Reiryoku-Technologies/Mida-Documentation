# Deals
Deals are represented by the `MidaBrokerDeal` class.
A deal is the result of an order execution and represents the transaction
occurred to execute an order. An order can be executed entirely or partially with one or severe deals.

## Opening deals
A opening deal represents the transfer of an asset into the account, opening deals
result in creating a new position or adding volume to an existing one.

## Closing deals
A closing deal represents the transfer of an asset out of the account, closing deals
result in entirely or partially closing the volume of an open position. Closing deals
affect the account balance by applying the respective profits, commissions and swaps according
to the closed volumes and execution prices.

## getDeals()
Deals can be retrived from orders and positions instances.
- `order.executedDeals`
- `position.executedDeals`
