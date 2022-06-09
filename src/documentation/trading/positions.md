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
- **Example 2**
```javascript
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "XAUUSD",
    direction: MidaOrderDirection.BUY,
    volume: 1,
});
const myPosition = (await myAccount.getOpenPositions())
    .find((position) => myOrder.positionId === position.id);
```

## addVolume()
Used to place an order for adding volume to the position.

- **Interface**
```typescript
class MidaPosition {
    addVolume (volume: number): Promise<MidaOrder>;
}
```

## subtractVolume()
Used to place an order for subtracting volume to the position.

- **Interface**
```typescript
class MidaPosition {
    subtractVolume (volume: number): Promise<MidaOrder>;
}
```

## close()
Used to place an order for entirely closing the position.

- **Interface**
```typescript
class MidaPosition {
    close (): Promise<MidaOrder>;
}
```

## Open price
A position is the result of one or more opening trades, the open price
of a position is the VWAP of the opening trades whose assets are still held.

<br>
<p align="center"> 
    <img src="/vwap.svg" alt="" width="344px">
</p>

## changeProtection()
Used to change the protection of an open position.

::: warning
The protection is merged and overwrites the active one, this means that passing
an empty protection will keep the actual one, explicit values must be passed to change a protection
:::

- **Interface**
```typescript
class MidaPosition {
    changeProtection (protection: MidaProtection): Promise<MidaProtectionChange>;
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
