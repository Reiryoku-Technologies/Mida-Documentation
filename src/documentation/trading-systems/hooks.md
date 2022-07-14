# Hooks
Trading systems are ruled by a lifecycle which exposes hooks.

<br>
<p align="center">
    <img src="/trading-system-lifecycle.svg" width="600px">
</p>

## configure()
Called once before the first start of the trading system. Can be used
as asynchronous constructor.

- **Interface**
```typescript
class MidaTradingSystem {
    configure (): Promise<void>;
}
```

## onStart()
Called before the trading system starts being operative.

- **Interface**
```typescript
class MidaTradingSystem {
    onStart (): Promise<void>;
}
```

## onStop()
Called before the trading system stops being operative.

- **Interface**
```typescript
class MidaTradingSystem {
    onStop (): Promise<void>;
}
```

## onTick()
Called when a new market tick is available for a watched symbol.
The hook is active only for the symbols with `watchTicks` directive
enabled.

- **Interface**
```typescript
class MidaTradingSystem {
    onTick (tick: MidaTick): Promise<void>;
}
```

## onPeriodUpdate()
Called when the last live candlestick of a watched symbol is updated.
The hook is active only for the symbols with `watchPeriods` directive
enabled and for the timeframes specified in the `timeframes` directive.

- **Interface**
```typescript
class MidaTradingSystem {
    onPeriodUpdate (period: MidaPeriod): Promise<void>;
}
```

## onPeriodClose()
Called when the candlestick of a watched symbol is closed.
The hook is active only for the symbols with `watchPeriods` directive
enabled and for the timeframes specified in the `timeframes` directive.

- **Interface**
```typescript
class MidaTradingSystem {
    onPeriodClose (period: MidaPeriod): Promise<void>;
}
```

## onBeforePlaceOrder()
Called before the trading system places an order. Can be used
to filter directives and ensure risk management.
The hook is active only for orders placed through the trading
system `placeOrder` method.

- **Interface**
```typescript
class MidaTradingSystem {
    onBeforePlaceOrder (directives: MidaOrderDirectives): Promise<MidaOrderDirectives>;
}
```

## onImpactPosition()
Called when an order placed by the trading system has
created/impacted a position. The hook is active only for orders placed through the trading
system `placeOrder` method.

- **Interface**
```typescript
class MidaTradingSystem {
    onImpactPosition (position: MidaPosition): Promise<void>;
}
```

## onMarketOpen()
Called when the market of a watched symbol opens.
The hook is active only for the symbols with `watchTicks` directive
enabled.

- **Interface**
```typescript
class MidaTradingSystem {
    onMarketOpen (symbol: string): Promise<void>;
}
```

## onMarketClose()
Called when the market of a watched symbol closes.
The hook is active only for the symbols with `watchTicks` directive
enabled.

- **Interface**
```typescript
class MidaTradingSystem {
    onMarketClose (symbol: string): Promise<void>;
}
```
