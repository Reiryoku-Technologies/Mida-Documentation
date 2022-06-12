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
3. Open "API Management" from your profile menu.
4. Use "Create API" to generate the credentials.

At this point it's possible to use Mida with the authorized Binance account.

## Something is not working?
[Create an issue](https://github.com/Reiryoku-Technologies/Mida/issues) on GitHub if something is not working as expected.
