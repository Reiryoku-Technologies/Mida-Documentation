# Account login
A broker account is required to get started with Mida. Until now
Mida supports all cTrader brokers.

## Mida.login()
Used to login into any broker supported by Mida.

- **Example**
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
