# Deals
Deals are the result of an order execution: a deal represents the transaction
performed to finalize an order. An order can be executed either in its 
entirety or parts with one or severe deals.

## Opening deals
A opening deal represents the transfer of an asset into the account, opening deals
result in creating a new position or adding volume to an existing one.

## Closing deals
A closing deal represents the transfer of an asset out of the account, closing deals
result in entirely or partially closing the volume of an open position. Closing deals
affect the account balance by applying the respective profits, commissions and swaps according
to the closed volumes and execution prices.

## Profits, commissions and swaps
In most cases an opening deal has zero profit, an opening commission and zero swaps.

## getDeals()
Deals can also be retrived from orders and positions
- `order.deals`
- `position.deals`
