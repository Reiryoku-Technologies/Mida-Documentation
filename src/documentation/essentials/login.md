# Account login
A trading account is required to get started. Mida is platform-neutral,
this means that any trading platform could be easily integrated in the ecosystem.
Up to now various exchanges and brokers are directly supported.

## login()
Used to login into a trading account.

- **Binance Example**
```javascript
import { login, } from "@reiryoku/mida";

const myAccount = await login("Binance/Spot", {
    apiKey: "...",
    apiSecret: "...",
});
```
Read [how to use Binance](/posts/how-to-use-binance/) to get the `apiKey` and `apiSecret` credentials.

- **cTrader Example**
```javascript
import { login, } from "@reiryoku/mida";

const myAccount = await login("cTrader", {
    clientId: "...",
    clientSecret: "...",
    accessToken: "...",
    cTraderBrokerAccountId: "...",
});
```
Read [how to use cTrader](/posts/how-to-use-ctrader/) to get the `clientId`, `clientSecret`, `accessToken` and `cTraderBrokerAccountId` credentials.
