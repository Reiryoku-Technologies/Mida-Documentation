# Positions
Positions are represented by the `MidaPosition` class.
An open position represents a volume of asset held by the account.

## getOpenPositions()
Used to get the account open positions.

- **Interface**
```typescript
class MidaTradingAccount {
    getOpenPositions (): Promise<MidaPosition[]>;
}
```
- **Example**
```javascript
const myOpenPositions = await myAccount.getOpenPositions();
````

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
Because a position is the result of one or more trades which may have been executed
at different prices, the position open price is the VWAP of the execution prices of the assets
being hold.
