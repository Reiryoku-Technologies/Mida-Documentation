# Lifecycle hooks
Trading systems are ruled by a lifecycle which exposes hooks.

<br>
<p align="center">
    <img src="/expert-advisor-lifecycle.svg" width="600px">
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
Called before the trading systems starts being operative.

- **Interface**
```typescript
class MidaTradingSystem {
    onStart (): Promise<void>;
}
```

## onTick()
Called when a new market tick is available for a watched symbol.

- **Interface**
```typescript
class MidaTradingSystem {
    onTick (tick: MidaTick): Promise<void>;
}
```

## onPeriodUpdate()
Called when the last live candlestick of a watched symbol is updated.

- **Interface**
```typescript
class MidaTradingSystem {
    onPeriodUpdate (period: MidaPeriod): Promise<void>;
}
```

## onPeriodClose()
Called when the candlestick of a watched symbol is closed.

- **Interface**
```typescript
class MidaTradingSystem {
    onPeriodClose (period: MidaPeriod): Promise<void>;
}
```

## onBeforePlaceOrder()
Called before the trading systems places an order. Can be used
to filter directives and ensure a risk management.

- **Interface**
```typescript
class MidaTradingSystem {
    onBeforePlaceOrder (directives: MidaOrderDirectives): Promise<MidaOrderDirectives>;
}
```

## onMarketOpen()
Called when the market of a watched symbol opens.

- **Interface**
```typescript
class MidaTradingSystem {
    onMarketOpen (symbol: string): Promise<void>;
}
```

## onMarketClose()
Called when the market of a watched symbol closes.

- **Interface**
```typescript
class MidaTradingSystem {
    onMarketClose (symbol: string): Promise<void>;
}
```
