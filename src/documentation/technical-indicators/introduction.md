# Introduction
The creation and usage of indicators is handled by the `MidaIndicator` API.

::: tip
The Mida core has no indicators installed by default, the
Mida Tulipan plugin provides performant technical indicators
written in C that can be used directly from Mida
:::

```
npm i @reiryoku/mida-tulipan
```

```javascript
import { Mida, } from "@reiryoku/mida";
import { TulipanPlugin, } from "@reiryoku/mida-tulipan";

Mida.use(new TulipanPlugin());
```

## createIndicator()
Used to create a new indicator.

- **Interface**
```typescript
class Mida {
    static createIndicator (name: string, parameters?: GenericObject): MidaIndicator;
}
```
- **Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const smaIndicator = Mida.createIndicator("SMA");
```

## calculate()
Used to calculate the indicator on the input without
changing the indicator state.

- **Interface**
```typescript
class MidaIndicator {
    calculate (input: MidaIndicatorIo): Promise<MidaIndicatorIo>;
}
```
- **Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const values = await Mida.createIndicator("SMA")
    .calculate([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ]);
```

## next()
Used to calculate the indicator on the input and
the previous inputs, updates the internal
state of the indicator.

- **Interface**
```typescript
class MidaIndicator {
    next (input: MidaIndicatorIo): Promise<MidaIndicatorIo>;
}
```
- **Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const smaIndicator = Mida.createIndicator("SMA");

await smaIndicator.next([ 1, 2, 3, ]); // Calculate on 1, 2, 3
await smaIndicator.next([ 4, 5, 6, ]); // Calculate on 1, 2, 3, 4, 5, 6

const values = smaIndicator.values;
```
