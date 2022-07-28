# Introduction
Indicators are represented by the `MidaIndicator` API.

::: tip
The Mida core has no indicators installed by default, the
Mida Tulipan plugin provides performant technical indicators
:::

Install and use the Mida Tulipan plugin.
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
createIndicator (name: string, parameters?: GenericObject): MidaIndicator;
```
- **Example**
```javascript
import { createIndicator, } from "@reiryoku/mida";

const sma = createIndicator("SMA");
```

## calculate()
Used to calculate the indicator on the specified input **without
changing the internal state of the indicator**.

- **Interface**
```typescript
class MidaIndicator {
    calculate (input: MidaIndicatorIo): Promise<MidaIndicatorIo>;
}
```
- **Example**
```javascript
import { createIndicator, } from "@reiryoku/mida";

const values = await createIndicator("SMA")
    .calculate([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ]);
```

## next()
Used to calculate the indicator on the specified input and
the previous inputs, **updates the internal
state of the indicator**.

- **Interface**
```typescript
class MidaIndicator {
    next (input: MidaIndicatorIo): Promise<MidaIndicatorIo>;
}
```
- **Example**
```javascript
import { createIndicator, } from "@reiryoku/mida";

const sma = createIndicator("SMA", { length: 14, });

await sma.next([ 1, 2, 3, ]); // Calculate on 1, 2, 3
await sma.next([ 4, 5, 6, ]); // Calculate on 1, 2, 3, 4, 5, 6

const values = sma.values;
const lastValue = sma.lastValue;
```
