# Assets
Assets are represented by the `MidaAsset` class.

## getAsset()
Used to get an asset by its string representation, returns `undefined` if the asset is not found.

- **Interface**
```typescript
class MidaTradingAccount {
    getAsset (asset: string): Promise<MidaAsset | undefined>;
}
```
- **Example**
```js
const btc = await myAccount.getAsset("BTC");
```

## getBalance()
...

## getCryptoAssetDepositAddress()
Used to get the deposit address of a crypto asset.

- **Interface**
```typescript
class MidaTradingAccount {
    getCryptoAssetDepositAddress (asset: string, network: string): Promise<string>;
}
```
- **Example**
```js
const trxAddress = await myAccount.getCryptoAssetDepositAddress("TRX", "BNB");
```
