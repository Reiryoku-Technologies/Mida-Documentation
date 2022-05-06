# Account login
A trading account is required to get started. Mida is platform-neutral and 
virtually supports any exchange, broker or trading platform.

## Mida.login()
Used to login into a trading account.

- **Binance Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const myAccount = await Mida.login("Binance/Spot", {
    apiKey: "...",
    apiSecret: "...",
});
```

- **Kraken Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const myAccount = await Mida.login("Kraken/Futures", {
    apiKey: "...",
    apiSecret: "...",
});
```

- **cTrader Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const myAccount = await Mida.login("cTrader", {
    clientId: "...",
    clientSecret: "...",
    accessToken: "...",
    cTraderBrokerAccountId: "...",
});
```

Read [how to use cTrader accounts](/open-api/) to get a `clientId`, `clientSecret`, `accessToken` and `cTraderBrokerAccountId`.
