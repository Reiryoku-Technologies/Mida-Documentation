# Positions
Positions are represented by the `MidaPosition` API.

::: tip
An open position represents a volume of asset held by the account
:::

## getOpenPositions()
Used to get the account open positions.

- **Interface**
```typescript
class MidaTradingAccount {
    getOpenPositions (): Promise<MidaPosition[]>;
}
```
- **Example 1**
```javascript
const myOpenPositions = await myAccount.getOpenPositions();
```

## getUsedMargin()
Used to get the position used margin.

- **Interface**
```typescript
class MidaPosition {
    getUsedMargin (): Promise<MidaDecimal>;
}
```
- **Example**
```javascript
const usedMargin = await myPosition.getUsedMargin();
```

## getUnrealizedGrossProfit()
Used to get the position unrealized gross profit.

- **Interface**
```typescript
class MidaPosition {
    getUnrealizedGrossProfit (): Promise<MidaDecimal>;
}
```
- **Example**
```javascript
const unrealizedGrossProfit = await myPosition.getUnrealizedGrossProfit();
```

## getUnrealizedCommission()
Used to get the position unrealized commission.

- **Interface**
```typescript
class MidaPosition {
    getUnrealizedCommission (): Promise<MidaDecimal>;
}
```
- **Example**
```javascript
const unrealizedCommission = await myPosition.getUnrealizedCommission();
```

## getUnrealizedSwap()
Used to get the position unrealized swap.

- **Interface**
```typescript
class MidaPosition {
    getUnrealizedSwap (): Promise<MidaDecimal>;
}
```
- **Example**
```javascript
const unrealizedSwap = await myPosition.getUnrealizedSwap();
```

## addVolume()
Used to place an order for adding volume to the position.

- **Interface**
```typescript
class MidaPosition {
    addVolume (volume: MidaDecimalConvertible): Promise<MidaOrder>;
}
```
- **Example**
```javascript
await myPosition.addVolume(1);
```

## subtractVolume()
Used to place an order for subtracting volume to the position.

- **Interface**
```typescript
class MidaPosition {
    subtractVolume (volume: MidaDecimalConvertible): Promise<MidaOrder>;
}
```
- **Example**
```javascript
await myPosition.subtractVolume(0.1);
```

## close()
Used to place an order for entirely closing the position.

- **Interface**
```typescript
class MidaPosition {
    close (): Promise<MidaOrder>;
}
```
- **Example**
```javascript
await myPosition.close();
```

## Open price
A position is the result of one or more opening trades, the open price
of a position is the VWAP of the opening trades whose assets are still held.

<br>
<p align="center"> 
    <img src="/vwap.svg" alt="" width="344px">
</p>

## Realized profits
The total realized profit, commission and swap of an open or closed position can
be calculated with its closing trades.

- **Example**
```javascript
import { MidaTradePurpose, decimal, } from "@reiryoku/mida";

const positionId = myPosition.id;
const trades = await myAccount.getTrades(myPosition.symbol);
const positionClosingTrades = trades.filter((trade) => {
    return trade.positionId === positionId && trade.purpose === MidaTradePurpose.CLOSE;
});

let totalGrossProfit = decimal(0);
let totalCommission = decimal(0);
let totalSwap = decimal(0);

for (const trade of positionClosingTrades) {
    totalGrossProfit = totalGrossProfit.add(trade.grossProfit);
    totalCommission = totalCommission.add(trade.commission);
    totalSwap = totalSwap.add(trade.swap);
}

// If gross profit, commission and swap are applied on the same asset
// then the net profit can be directly calculated
const netProfit = totalGrossProfit.add(totalCommission).add(totalSwap);
```

## changeProtection()
Used to change the protection of an open position.

::: warning
Explicit values must be passed to change a protection, this means
that passing an empty protection will keep the previous
protection active and not change anything
:::

- **Interface**
```typescript
class MidaPosition {
    changeProtection (protection: MidaProtectionDirectives): Promise<MidaProtectionChange>;
}
```
- **Example 1**
```javascript
await myPosition.changeProtection({
    takeProfit: 1000,
    stopLoss: 500,
    trailingStopLoss: true,
});
```
- **Example 2**
```javascript
await myPosition.changeProtection({
    stopLoss: undefined,
});
```

## setTakeProfit()
Used to set the position take profit.

- **Interface**
```typescript
class MidaPosition {
    setTakeProfit (takeProfit: MidaDecimalConvertible | undefined): Promise<MidaProtectionChange>;
}
```
- **Example 1**
```javascript
await myPosition.setTakeProfit(2000);
```
- **Example 2**
```javascript
await myPosition.setTakeProfit(undefined);
```

## setStopLoss()
Used to set the position stop loss.

- **Interface**
```typescript
class MidaPosition {
    setStopLoss (stopLoss: MidaDecimalConvertible | undefined): Promise<MidaProtectionChange>;
}
```
- **Example 1**
```javascript
await myPosition.setStopLoss(1000);
```
- **Example 2**
```javascript
await myPosition.setStopLoss(undefined);
```

## setTrailingStopLoss()
Used to activate/deactivate the position trailing stop loss.

- **Interface**
```typescript
class MidaPosition {
    setTrailingStopLoss (trailingStopLoss: boolean): Promise<MidaProtectionChange>;
}
```
- **Example 1**
```javascript
await myPosition.setTrailingStopLoss(true);
```
- **Example 2**
```javascript
await myPosition.setTrailingStopLoss(false);
```
