---
home: true
actionText: Quick Start →
actionLink: /documentation/
---

::: slot platform-neutral
```javascript
import { login, } from "@reiryoku/mida";

const myAccount = await login("Binance/Spot", {
    apiKey: "***",
    apiSecret: "***",
});
```
:::

::: slot approachable
```javascript
import { MidaOrderDirection, } from "@reiryoku/mida";

const myOrder = await myAccount.placeOrder({
    symbol: "BTCUSDT",
    direction: MidaOrderDirection.BUY,
    volume: 1,
});
```
:::

::: slot versatile
```javascript
import { MidaTradingSystem, } from "@reiryoku/mida";

export class MyTradingSystem extends MidaTradingSystem {
    watched () {
        return {
            "BTCUSDT": {
                watchTicks: true,
            },
        };
    }

    async onStart () {
        // Called when the trading system starts being operative
    }

    async onTick (tick) {
        const { bid, ask, date, } = tick;
    }

    async onStop () {
        // Called when the trading system stops being operative
    }
}
```
:::
