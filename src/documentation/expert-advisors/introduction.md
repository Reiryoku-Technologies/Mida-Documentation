# Introduction
The `MidaExpertAdvisor` API handles the creation and execution of a trading bot, the first step to
create a trading bot is extending the class.

- **Example 1**
```javascript
import { MidaExpertAdvisor, } from "@reiryoku/mida";

export class MyTradingStrategy extends MidaExpertAdvisor {
    async configure () {
        // Called once per instance
        // Use as async constructor
    }
    
    async onStart () {
        // Called when the trading bot starts its operativity
    }
    
    async onStop () {
        // Called when the trading bot stops its operativity
    }
}
```

A trading bot can be configured to listen market ticks and candlesticks, this is a core functionality that can be
used to implement a strategy according to market conditions. Every trading bot has an integrated market watcher.

- **Example 2**
```javascript
import { MidaExpertAdvisor, MidaTimeframe, } from "@reiryoku/mida";

export class MyTradingStrategy extends MidaExpertAdvisor {
    async configure () {
        await this.watchTicks("BTCUSDT");
        await this.watchPeriods("BTCUSDT", [
            MidaTimeframe.H1,
            MidaTimeframe.D1,
        ]);
    }
    
    async onTick (tick) {
        const { bid, ask, } = tick;
    }
    
    async onPeriodClose (period) {
        const ohlc = period.ohlc;
        const closePrice = period.close;
        
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

## Lifecycle
<br>

<p align="center">
    <img src="/expert-advisor-lifecycle.svg" width="600px">
</p>

## watchTicks()
Used to listen ticks which will trigger the `onTick()` hook.

- **Interface**
```typescript
class MidaExpertAdvisor {
    watchTicks (symbol: string): Promise<void>;
}
```

## watchPeriods()
Used to listen closed candlesticks which will trigger the `onPeriodClose()` hook.

- **Interface**
```typescript
class MidaExpertAdvisor {
    watchPeriods (symbol: string, timeframes: number[] | number): Promise<void>;
}
```

## placeOrder()

- **Interface**
```typescript
class MidaExpertAdvisor {
    placeOrder (directives: MidaBrokerOrderDirectives): Promise<MidaBrokerOrder>;
}
```
