# Decimals
Decimal numbers and calculations are accurately represented by the `MidaDecimal` API.

::: tip
Computers can only natively store integers, so they need some way of representing
decimal numbers. This representation is not perfectly accurate. This is why, in
most programming languages `0.1 + 0.2 != 0.3`, for financial and monetary calculations
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
- **Example**
```javascript
import { decimal, } from "@reiryoku/mida";

const balance = decimal("12.00000000012");
```

## add()
Used to add a decimal to the current value.

- **Interface**
```typescript
class MidaDecimal {
    add (operand: MidaDecimalConvertible): MidaDecimal;
}
```
- **Example**
```javascript
import { decimal, } from "@reiryoku/mida";

0.1 + 0.2; // >= 0.30000000000000004
decimal(0.1).add(0.2); // <= 0.3
decimal("0.1").add("0.2"); // <= 0.3
```

## subtract()
Used to subtract a decimal from the current value.

- **Interface**
```typescript
class MidaDecimal {
    subtract (operand: MidaDecimalConvertible): MidaDecimal;
}
```
- **Example**
```javascript
import { decimal, } from "@reiryoku/mida";

0.3 - 0.1; // >= 0.19999999999999998
decimal(0.3).subtract(0.1); // <= 0.2
decimal("0.3").subtract("0.1"); // <= 0.2
```

## multiply()
Used to multiply the current value by a decimal.

- **Interface**
```typescript
class MidaDecimal {
    multiply (operand: MidaDecimalConvertible): MidaDecimal;
}
```
- **Example**
```javascript
import { decimal, } from "@reiryoku/mida";

0.1 * 0.1; // >= 0.010000000000000002
decimal(0.1).multiply(0.1); // <= 0.1
decimal("0.1").multiply("0.1"); // <= 0.1
```

## divide()
Used to divide the current value by a decimal.

- **Interface**
```typescript
class MidaDecimal {
    divide (operand: MidaDecimalConvertible): MidaDecimal;
}
```
- **Example**
```javascript
import { decimal, } from "@reiryoku/mida";

0.1 / 0.3; // >= 0.33333333333333337
decimal(0.1).divide(0.3); // <= 0.3
decimal("0.1").divide("0.3"); // <= 0.3
```

## Number conversions
::: warning
A `number` can be safely converted to decimal. It's strictly recommended instead to convert
a decimal to `number` only if it's really intended, **the operation is not safe and can lead to
precision loss**.
:::

- **Example**
```javascript
import { decimal, } from "@reiryoku/mida";

const commission = decimal("0.0000000000001");
const numberCommission = Number(commission.toString());
```
