---
roadmap: true
actionText: Quick
actionLink: /documentation/
features:
- title: Approachable
  details: A clean, simple and intuitive TypeScript API with first-class documentation.
- title: Versatile
  details: A complete and incrementally adoptable ecosystem that scales between a library and a full-featured framework.
- title: Platform-neutral
  details: A single TypeScript API for trading with any exchange, broker or trading platform.
---

```javascript
import { Mida, MidaOrderDirection, } from "@reiryoku/mida";

const myAccount = await Mida.login("Binance/Spot", {
    apiKey: "...",
    apiSecret: "...",
});

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSDT",
    volume: 0.888,
    direction: MidaOrderDirection.BUY,
});
```

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
