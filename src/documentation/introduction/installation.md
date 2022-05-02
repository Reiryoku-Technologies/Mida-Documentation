# Installation
The Mida core and the Mida cTrader plugin are necessary to get started.
```console
npm i @reiryoku/mida @reiryoku/mida-ctrader
```

- `@reiryoku/mida` is the Mida core
- `@reiryoku/mida-ctrader` is the Mida plugin allowing to use any cTrader broker

The Mida core comes with no default plugins or integrations.
Installing the plugin is necessary to use cTrader brokers.

Plugins must be registered in the application main entry point.

- **Example**
```javascript
import { Mida, } from "@reiryoku/mida";
import cTraderPlugin from "@reiryoku/mida-ctrader";

Mida.use(cTraderPlugin);
```
