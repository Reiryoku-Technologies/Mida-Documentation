# How to use Binance
A Binance account is required to get started ([create a Binance account](https://accounts.binance.com/en/register?ref=172142672)).

## The plugin
The Mida Binance plugin must be installed for using Binance with Mida.
```
npm i @reiryoku/mida-binance
```
```javascript
import { Mida, } from "@reiryoku/mida";
import { BinancePlugin, } from "@reiryoku/mida-binance";

Mida.use(new BinancePlugin());
```

## Login example
Below an example on how to login into a Binance Spot account.
```javascript
import { login, } from "@reiryoku/mida";

const myAccount = await login("Binance/Spot", {
    apiKey: "...",
    apiSecret: "...",
});
```

## Login credentials
The `apiKey` and `apiSecrect` credentials are required to use a Binance account with Mida,
the credentials can be easily generated from the Binance website.

1. [Create a Binance account](https://accounts.binance.com/en/register?ref=172142672) if you don't have one
2. Visit [Binance](https://www.binance.com) and login
3. Go to the "Applications" page
   ![](/open-api/1.png)
4. Create a new application
   ![](/open-api/2.png)
5. After the creation, wait for the application to be approved, this may take up to 48 hours
6. Pressing "View" under credentials will reveal the `clientId` and `clientSecret` of the application
7. Once the application is activated, go to the "Playground" page
   ![](/open-api/3.png)
8. Make sure to select the "Trading" scope, then press "Get Token" and select your trading account
   ![](/open-api/4.png)
9. After the confirmation, the `accessToken` will be revealed
10. To retrieve the `cTraderBrokerAccountId` press on "Trading Accounts", the `cTraderBrokerAccountId` is
    the "accountId" revealed in the JSON message

At this point it's possible to use Mida with the authorized broker account.

## Something is not working?
[Create an issue](https://github.com/Reiryoku-Technologies/Mida/issues) on GitHub if something is not working as expected.
