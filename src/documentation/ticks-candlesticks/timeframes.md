# Timeframes
Timeframes are represented by the `MidaTimeframe` API. In Mida all timeframes
are expressed as a `number` of seconds.

- **Interface**
```typescript
enum MidaTimeframe {
    /** 1 second */
    S1 = 1,
    /** 1 minute */
    M1 = 60,
    /** 5 minutes */
    M5 = 300,
    /** 15 minutes */
    M15 = 900,
    /** 30 minutes */
    M30 = 1800,
    /** 1 hour */
    H1 = 3600,
    /** 4 hours */
    H4 = 14400,
    /** 1 day */
    D1 = 86400,
    /** 1 week */
    W1 = 604800,
    /** 1 month */
    MO1 = 2592000,
    /** 1 year */
    Y1 = 31536000,
}
```

## parseTimeframe()
Used to convert a string timeframe to number. String timeframes must be in the
Mida format: `S*`, `M*`, `H*`, `W*`, `MO*` and `Y*`.

- **Interface**
```typescript
namespace MidaTimeframe {
    parseTimeframe (timeframe: string): number | undefined;
}
```
- **Example 1**
```javascript
import { MidaTimeframe, } from "@reiryoku/mida";

const M45 = MidaTimeframe.parseTimeframe("M45"); // <= 2700
```
- **Example 2**
```javascript
import { MidaTimeframe, } from "@reiryoku/mida";

const D3 = MidaTimeframe.parseTimeframe("D3"); // <= 259200
```
- **Example 3**
```javascript
import { MidaTimeframe, } from "@reiryoku/mida";

const Y1 = MidaTimeframe.parseTimeframe("D365"); // <= 31536000
```
