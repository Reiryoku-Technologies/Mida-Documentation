# Decimals
Decimal numbers and calculations are precisely represented by the `MidaDecimal` API.

::: tip
Computers can only natively store integers, so they need some way of representing
decimal numbers. This representation is not perfectly accurate. This is why, in
most programming languages `0.1 + 0.2 != 0.3`. For financial and monetary calculations
this can lead to unrecoverable mistakes.
:::

## decimal()
Used to create or convert an existing value to decimal.
Any `MidaDecimal`, `string` or `number` can be converted to
decimal.

- **Interface**
```typescript
decimal (value: MidaDecimalConvertible): MidaDecimal;
```
- **Example 1**
```javascript
import { decimal, } from "@reiryoku/mida";

const balance = decimal("1.2345678");
```

## add()
Used to add a decimal.

- **Example 2**
```javascript
import { decimal, } from "@reiryoku/mida";

0.1 + 0.2; // >= 0.30000000000000004

decimal(0.1).add(0.2); // <= 0.3

decimal("0.1").add("0.2"); // <= 0.3
```

## subtract()

## multiply()

## divide()
Used to divide for a decimal.

- **Example**
```javascript
const withoutDecimal = 0.1 / 0.3; // <= 0.33333333333333337
const withDecimal = decimal(0.1).divide(0.3); // <= 0.33333333333333333333
```

## Conversions
::: warning
A `number` can be safely converted to decimal, it's strictly recommended instead to convert
a decimal to `number` only if it's really intended since the operation is not safe and can lead to
precision loss.
:::
