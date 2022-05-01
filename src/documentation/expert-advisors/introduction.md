# Introduction
The `MidaExpertAdvisor` API handles the creation and execution of expert advisors.<br>
The first step to create an expert advisor (or trading bot) is extending the `MidaExpertAdvisor` class.

- **Example**
```javascript
import { MidaExpertAdvisor, } from "@reiryoku/mida";

export class MyExpertAdvisor extends MidaExpertAdvisor {
    async configure () {
        // This hook is called once per instance
        // and should be used as async constructor
    }
    
    async onStart () {
        // This hook is called when the EA starts its operativity
    }
    
    async onStop () {
        // This hook is called when thea EA stops its operativity
    }
}
```

An expert advisor can be configured to listen market ticks and candlesticks, this is a core functionality useful
to implement a strategy according to market conditions. Every expert advisor has an integrated market watcher.

- **Example**
```javascript
import { MidaExpertAdvisor, MidaTimeframe, } from "@reiryoku/mida";

export class MyExpertAdvisor extends MidaExpertAdvisor {
    async configure () {
        await this.watchTicks("BTCUSD");
        await this.watchPeriods("BTCUSD", [
            MidaTimeframe.H1,
            MidaTimeframe.D1,
        ]);
    }
    
    async onTick (tick) {
        const bid = tick.bid;
        const ask = tick.ask;
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
