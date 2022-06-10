# Dates
Dates are represented by the `MidaDate` API.

::: tip
Mida dates are immutable and universal time coordinated
:::

## MidaDate()
- **Interface**
```typescript
class MidaDate {
    constructor (descriptor?: number | string);
    
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
    subtract (milliseconds: number): MidaDate;
    differenceInMinutes (date: MidaDate): number;
    differenceInDays (date: MidaDate): number;
}
```
- **Example 1**
```javascript
import { MidaDate, } from "@reiryoku/mida";

const date = new MidaDate();
```
- **Example 2**
```javascript
import { MidaDate, } from "@reiryoku/mida";

const date = new MidaDate(0); // <= Timestamp
```
- **Example 3**
```javascript
import { MidaDate, } from "@reiryoku/mida";

const date = new MidaDate("2022-05-10T22:26:45.530Z"); // <= ISO
```
