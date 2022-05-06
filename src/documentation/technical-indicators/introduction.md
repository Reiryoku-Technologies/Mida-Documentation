# Introduction
The `MidaIndicator` API handles the creation and usage of indicators. The Mida core has no
indicators installed by default, the Mida Tulipan plugin
provides performant technical indicators written in C.

```
npm i @reiryoku/mida-tulipan
```

```javascript
import { Mida, } from "@reiryoku/mida";

Mida.use(await import("@reiryoku/mida-tulipan"));
```

## createIndicator()
Used to create a new indicator.

- **Interface**
```typescript
class Mida {
    static createIndicator (name: string, parameters: GenericObject = {}): MidaIndicator;
}
```
- **Example**
```javascript
import { Mida, } from "@reiryoku/mida";

const simpleMovingAverageIndicator = Mida.createIndicator("SMA");
```

## calculate()

- **Interface**
```typescript
class MidaIndicator {
    calculate (input: MidaIndicatorIo): MidaIndicatorIo;
}
```
- **Example 1**
```javascript
import { Mida, } from "@reiryoku/mida";

const simpleMovingAverageIndicator = Mida.createIndicator("SMA");
```
