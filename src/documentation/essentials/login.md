# Account login
A trading account is required to get started, check the [supported trading platforms](/documentation/#trading-platforms).

::: tip
Mida is platform-neutral, this means that any trading platform could
be easily integrated in the ecosystem. Trading systems/applications built with Mida can be
easily executed on different trading platforms without code changes
:::

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

- **Multiple accounts Example**
```javascript
import { login, } from "@reiryoku/mida";

const myAccount1 = await login("cTrader", { ... });
const myAccount2 = await login("cTrader", { ... });
const myAccount3 = await login("Binance/Spot", { ... });
```
