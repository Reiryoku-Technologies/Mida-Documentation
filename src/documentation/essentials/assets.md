# Assets
Assets are represented by the `MidaAsset` API.

::: tip
An asset is a resource with economic value
:::

## getAssets()
Used to get the assets available for the trading account.

- **Interface**
```typescript
class MidaTradingAccount {
    getAssets (): Promise<string[]>;
}
```

## getAsset()
Used to get an asset by its string representation, returns `undefined` if the asset is not found.

::: warning
- Assets as strings are case sensitive
- Assets as strings may not be equal across all trading platforms
:::

- **Interface**
```typescript
class MidaTradingAccount {
    getAsset (asset: string): Promise<MidaAsset | undefined>;
}
```
- **Example 1**
```js
const btc = await myAccount.getAsset("BTC");
```
- **Example 2**
```js
const eth = await myAccount.getAsset("ETH");
```
- **Example 3**
```js
const jpy = await myAccount.getAsset("JPY");
```
- **Example 4**
```js
const tsla = await myAccount.getAsset("#TSLA");
```

## getBalance()
Used to get the asset balance.

- **Interface**
```typescript
class MidaAsset {
    getBalance (): Promise<MidaAssetStatement>;
}
```
- **Example 1**
```js
const eth = await myAccount.getAsset("ETH");
const ethBalance = await eth.getBalance();
```
- **Example 2**
```js
const xau = await myAccount.getAsset("XAU");
const xauBalance = await xau.getBalance();
```

## getCryptoAssetDepositAddress()
Used to get the deposit address of a crypto asset.

- **Interface**
```typescript
class MidaTradingAccount {
    getCryptoAssetDepositAddress (asset: string, net: string): Promise<string>;
}
```
- **Example 1**
```js
const trxAddress = await myAccount.getCryptoAssetDepositAddress("TRX", "BNB");
```
- **Example 2**
```js
const btcAddress = await myAccount.getCryptoAssetDepositAddress("BTC", "");
```
