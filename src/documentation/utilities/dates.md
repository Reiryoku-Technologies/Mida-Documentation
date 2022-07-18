# Dates
Dates are represented by the `MidaDate` API.

::: tip
Mida dates are immutable and universal time coordinated
:::

- **Interface**
```typescript
class MidaDate {
    constructor (value?: MidaDateConvertible);
    
    get timestamp (): number;
    get milliseconds (): number;
    get seconds (): number;
    get minutes (): number;
    get hours (): number;
    get weekDay (): number;
    get monthDay (): number;
    get month (): number;
    get iso (): string;

    add (milliseconds: number): MidaDate;
    addMinutes (minutes: number): MidaDate;
    addHours (hours: number): MidaDate;
    subtract (milliseconds: number): MidaDate;
    subtractMinutes (minutes: number): MidaDate;
    subtractHours (hours: number): MidaDate;
    differenceInMinutes (date: MidaDate): number;
    differenceInDays (date: MidaDate): number;
}
```

## date()
- **Interface**
```typescript
date (value?: MidaDateConvertible): MidaDate;
```
- **Example 1**
```javascript
import { date, } from "@reiryoku/mida";

const date = date();
```
- **Example 2**
```javascript
import { date, } from "@reiryoku/mida";

const date = date(0); // <= Timestamp
```
- **Example 3**
```javascript
import { date, } from "@reiryoku/mida";

const date = date("0"); // <= Timestamp
```
- **Example 4**
```javascript
import { date, } from "@reiryoku/mida";

const date = date("2022-05-10T22:26:45.530Z"); // <= ISO
```

## add()

## addMinutes()

## addHours()

## subtract()

## subtractMinutes()

## subtractHours()
