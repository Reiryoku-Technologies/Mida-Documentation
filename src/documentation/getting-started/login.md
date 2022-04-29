# Account login
A broker account is required to get started with Mida.

## `Mida.login()`
Used to login into any broker supported by Mida.
- Example
```javascript
const myAccount = await Mida.login("cTrader", {
    clientId: "...",
    clientSecret: "...",
});
```
