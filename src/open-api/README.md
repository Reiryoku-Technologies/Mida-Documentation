# How to use cTrader accounts
A free live or demo trading account can be created at of one the many brokers supporting cTrader
such as [Pepperstone](https://pepperstone.com), [FxPro](https://www.fxpro.com), [Axiory](http://axiory.com),
[ICMarkets](https://www.icmarkets.com) or [RoboForex](http://roboforex.com).

## Login credentials
A broker account is the first step to get started with Mida and cTrader, the second step is having a `clientId`,
`clientSecret`, `accessToken` and `cTraderBrokerAccountId`.

1. From the broker website, create a cTrader trading account
2. Visit [cTrader Open API](http://openapi.ctrader.com) and login
3. Go to the "Applications" page
   ![](/open-api/1.png)
4. Create a new application
   ![](/open-api/2.png)
5. Wait for the application to be approved, this may take up to 48 hours
6. Pressing "View" under credentials will reveal the `clientId` and `clientSecret` of the application
7. Once the application is activated, go to the "Playground" page
   ![](/open-api/3.png)
8. Make sure to select the "Trading" scope, then press "Get Token" and select your trading account
   ![](/open-api/4.png)
9. After the confirmation, the `accessToken` will be revealed
10. To retrieve the `cTraderBrokerAccountId` press on "Trading Accounts", the `cTraderBrokerAccountId` is
    the "accountId" revealed in the JSON message.

At this point it's possible to use Mida with the authorized broker account.