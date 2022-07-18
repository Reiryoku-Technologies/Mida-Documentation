# Introduction
Trading systems (trading bots or expert advisors) are represented by the `MidaTradingSystem` API.

## MidaTradingSystem()
The first step to create a trading system is extending the `MidaTradingSystem` class.

- **Example 1**
```javascript
import { MidaTradingSystem, } from "@reiryoku/mida";

export class MyTradingSystem extends MidaTradingSystem {
    async configure () {
        // Called once per instance before the first startup
        // can be used as async constructor
    }
    
    async onStart () {
        // Called when the trading system starts being operative
    }
    
    async onStop () {
        // Called when the trading system stops being operative
    }
}
```

A trading system can be configured to listen market ticks and candlesticks, this is a core functionality that can be
used to implement a strategy according to market conditions.

::: tip
A trading system has an integrated market watcher, the `watched()` method
is used to configure the market watcher before the first startup of the trading system
:::

- **Example 2**
```javascript
import { MidaTradingSystem, MidaTimeframe, } from "@reiryoku/mida";

export class MyTradingSystem extends MidaTradingSystem {
    watched () {
        return {
            "BTCUSD": {
                watchTicks: true,
                watchPeriods: true,
                timeframes: [ MidaTimeframe.H1, MidaTimeframe.D1, ],
            },
        };
    }
    
    async configure () {
        // Called once per instance before the first startup
        // can be used as async constructor
    }
    
    async onTick (tick) {
        const { bid, ask, date, } = tick;
    }
    
    async onPeriodClose (period) {
        const [ open, high, low, close, ] = period.ohlc;
        
        switch (period.timeframe) {
            case MidaTimeframe.H1: {
                // Closed H1 candlestick
                
                break;
            }
            case MidaTimeframe.D1: {
                // Closed D1 candlestick
                
                break;
            }
        }
    }
}
```

## start()
Starts the trading system.

- **Interface**
```typescript
class MidaTradingSystem {
    start (): Promise<void>;
}
```

## stop()
Stops the trading system.

- **Interface**
```typescript
class MidaTradingSystem {
    stop (): Promise<void>;
}
```

## watchTicks()
Used to watch the ticks of the specified symbol.

- **Interface**
```typescript
class MidaTradingSystem {
    protected watchTicks (symbol: string): Promise<void>;
}
```

## watchPeriods()
Used to watch the periods of the specified symbol and timeframe/s.

- **Interface**
```typescript
class MidaTradingSystem {
    protected watchPeriods (symbol: string, timeframes: number[] | number): Promise<void>;
}
```

## placeOrder()
Used to place an order according to the specified directives. The
order will be associated to the trading system.

- **Interface**
```typescript
class MidaTradingSystem {
    protected placeOrder (directives: MidaOrderDirectives): Promise<MidaOrder | undefined>;
}
```
